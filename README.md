# Global Connect — Marketing Website

The official promotional website for **Global Connect**, a travel & social discovery
mobile app that connects travelers, expats, digital nomads, and locals around the
world through an interactive map, city chats, events, tips, and shared travel
memories.

> **Tagline:** *Go Global. Stay Connected.*

The site's branding (colors, logo, fonts, screenshots) is matched to the real
Global Connect mobile app.

---

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router) — React framework
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev/) — icons
- **Package manager:** npm

---

## Run it on another device

### 1. Prerequisites

Install these first (verify with the commands in parentheses):

- **Node.js v18 or higher** — <https://nodejs.org/> (`node -v`)
- **npm** — comes with Node (`npm -v`)
- **Git** — <https://git-scm.com/> (`git --version`)

### 2. Clone the repository

```bash
git clone https://github.com/dzemalen/global-connect-website.git
cd global-connect-website
```

### 3. Install dependencies

```bash
npm install
```

This creates the `node_modules/` folder. It may take a minute.

### 4. Start the development server

```bash
npm run dev
```

Open <http://localhost:3000>. The site hot-reloads as you edit.

> **Note:** Don't run `npm run build` while `npm run dev` is running — they share
> the `.next/` folder and the dev server's styles can break. Stop the dev server
> (Ctrl+C) before building. If the dev styles ever look broken, stop it, delete
> the `.next` folder, and run `npm run dev` again.

### Available commands

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server with hot reload (localhost:3000) |
| `npm run build` | Production build |
| `npm start` | Run the production build locally (after `npm run build`) |
| `npm run lint` | Lint the code |

No environment variables are required to run the site.

---

## Project structure

```
global-connect-website/
├── public/
│   ├── brand/             # Logo + app icon
│   ├── app/               # Real app imagery (travel photos)
│   │   └── screens/       # Real in-app screenshots used in the phone mockups
│   └── og-image.png       # Open Graph / social share image
├── src/
│   ├── app/               # Pages (App Router) + favicon (icon.png / apple-icon.png)
│   ├── components/
│   │   ├── home/          # Home page sections
│   │   ├── layout/        # Navbar, Footer, CookieConsent
│   │   └── ui/            # Shared UI (Button, PhoneMockup, AppStoreButtons, …)
│   └── lib/               # constants.ts (app config) + utils
├── next.config.mjs        # Next config + security headers
├── tailwind.config.ts     # Brand palette (matched to the app)
└── package.json
```

---

## Common things to update

- **App Store / Google Play links:** the app isn't published yet, so the download
  buttons show "Coming soon." When it launches, open
  [`src/lib/constants.ts`](src/lib/constants.ts), paste the real URLs into
  `APP_STORE_URL` / `GOOGLE_PLAY_URL`, and set `APP_LAUNCHED = true`. Every
  download button across the site updates automatically.
- **Real app screenshots:** live in `public/app/screens/`. The `PhoneMockup`
  component takes an `image` prop — pass a screenshot path to show a real screen,
  or omit it to use the built-in CSS recreation.
- **Brand colors:** defined in [`tailwind.config.ts`](tailwind.config.ts)
  (primary `#1577B8`, sky `#4BADE6`, navy `#00263F`).

---

## Deploying to Vercel

This site is optimized for [Vercel](https://vercel.com/). It builds to static
pages plus one serverless function (`/api/leads`, see below).

1. Install/login: `npx vercel login`
2. Deploy: `npx vercel --prod` (accept the auto-detected Next.js settings) —
   or import the GitHub repo at <https://vercel.com/new>.
3. Add your custom domain in **Project → Settings → Domains**; Vercel then shows
   the exact DNS records to add at your domain registrar.

---

## Form submissions (leads)

The **Contact** and **For Partners** forms post to the `/api/leads` serverless
route ([`src/app/api/leads/route.ts`](src/app/api/leads/route.ts)), which stores
each submission in a **Vercel Postgres** database. If no database is connected
yet, the route returns `503` and the forms automatically fall back to opening the
visitor's email client (`mailto:` to `contact@global-connect.ai`) — so nothing
breaks before setup.

### One-time setup on Vercel

1. Vercel dashboard → **Storage** → **Create Database** → **Postgres** → connect
   it to this project. Vercel injects the connection string as an env var
   (`POSTGRES_URL`) automatically.
2. **Redeploy** (Vercel does this automatically when the DB is connected, or run
   `npx vercel --prod`).

That's it — the `leads` table is created automatically on the first submission.

### Viewing / exporting leads

In the Vercel dashboard → **Storage** → your database → **Query**, run:

```sql
select created_at, type, name, email, message, details
from leads
order by created_at desc;
```

Each row is one submission. `type` is `contact` or `partner`; `details` holds the
extra fields (subject for contact; business type + city for partners).

### Testing locally

Pull the env vars once, then run the dev server:

```bash
npx vercel env pull .env.development.local
npm run dev
```

Submissions are protected by a simple honeypot field for basic spam filtering.

---

© Global Connect AS. All rights reserved.
