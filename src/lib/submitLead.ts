export type LeadPayload = {
  type: 'contact' | 'partner'
  name?: string
  email: string
  message?: string
  details?: Record<string, string>
  company?: string // honeypot — leave empty
}

/**
 * Sends a lead to the /api/leads serverless route (stored in Vercel Postgres).
 * Returns true if it was stored server-side, false otherwise — callers can then
 * fall back to opening the visitor's email client (mailto).
 */
export async function submitLead(payload: LeadPayload): Promise<boolean> {
  try {
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return res.ok
  } catch {
    return false
  }
}
