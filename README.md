# Global Connect — Marketing Website

The official promotional website for **Global Connect**, a travel and social discovery mobile app that connects travelers, expats, digital nomads, and locals around the world through an interactive map, city chats, events, and shared travel memories.

## What This Website Is

This is a multi-page marketing site built to showcase the Global Connect app. It includes:

- **Home** — Hero landing page with feature highlights
- **Features** — Detailed breakdown of all app capabilities
- **How It Works** — Step-by-step onboarding guide
- **For Partners** — Business and partnership information
- **About** — Project background
- **FAQ** — Common questions answered
- **Contact** — Get in touch
- **Terms of Use** and **Privacy Policy** — Legal pages

## Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework with server-side rendering
- [TypeScript](https://www.typescriptlang.org/) — Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [Lucide React](https://lucide.dev/) — Icons

---

## Running the Project Locally

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v18 or higher) — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** — [Download here](https://git-scm.com/)

You can verify your installations by running:

```bash
node -v
npm -v
git --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/dzemalen/global-connect-website.git
```

### 2. Navigate into the Project Folder

```bash
cd global-connect-website
```

### 3. Install Dependencies

```bash
npm install
```

This downloads all required packages into a `node_modules/` folder. It may take a minute.

### 4. Start the Development Server

```bash
npm run dev
```

Open your browser and go to [http://localhost:3000](http://localhost:3000). The site will automatically reload when you make changes to the code.

### Other Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the app for production |
| `npm start` | Run the production build locally |
| `npm run lint` | Check code for linting errors |

---

## Project Structure

```
global-connect-website/
├── public/             # Static assets (images, icons)
├── src/
│   ├── app/            # Next.js pages (App Router)
│   ├── components/     # Reusable React components
│   │   ├── home/       # Home page sections
│   │   ├── layout/     # Navbar and Footer
│   │   └── ui/         # Shared UI components
│   └── lib/            # Utilities and constants
├── package.json
├── tailwind.config.ts
└── next.config.mjs
```
