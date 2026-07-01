import { NextResponse } from 'next/server'
import { createPool, type VercelPool } from '@vercel/postgres'

// This route runs as a Vercel serverless function. It stores contact and
// partner submissions in a Vercel Postgres database.
//
// SETUP (one time): in the Vercel dashboard → Storage → create a Postgres
// database and connect it to this project. Vercel injects the connection
// string as an env var automatically, and this route picks it up. Until a
// database is connected, the route returns 503 and the forms fall back to
// opening the visitor's email client (mailto), so nothing breaks.
export const dynamic = 'force-dynamic'

const connectionString =
  process.env.POSTGRES_URL ||
  process.env.DATABASE_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  ''

// Create the pool once per warm instance (efficient for serverless).
const pool: VercelPool | null = connectionString ? createPool({ connectionString }) : null
let tableReady = false

async function ensureTable(db: VercelPool) {
  if (tableReady) return
  await db.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id BIGSERIAL PRIMARY KEY,
      type TEXT NOT NULL,
      name TEXT,
      email TEXT NOT NULL,
      message TEXT,
      details JSONB,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `)
  tableReady = true
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 })
  }

  // Honeypot: real users never fill the hidden "company" field; bots do.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const type = body.type === 'partner' ? 'partner' : 'contact'
  const name = String(body.name ?? '').trim().slice(0, 200)
  const email = String(body.email ?? '').trim().slice(0, 200)
  const message = String(body.message ?? '').trim().slice(0, 5000)
  const details =
    body.details && typeof body.details === 'object'
      ? JSON.stringify(body.details).slice(0, 8000)
      : null

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 })
  }

  if (!pool) {
    // No database connected yet → signal the client to use its email fallback.
    return NextResponse.json({ ok: false, error: 'storage_not_configured' }, { status: 503 })
  }

  try {
    await ensureTable(pool)
    await pool.query(
      `INSERT INTO leads (type, name, email, message, details)
       VALUES ($1, $2, $3, $4, $5::jsonb)`,
      [type, name || null, email, message || null, details]
    )
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('lead insert failed:', err)
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 })
  }
}
