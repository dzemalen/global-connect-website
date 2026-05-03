import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563EB',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.global-connect.ai'),
  title: {
    default: 'Global Connect — Meet Travelers & Discover Local Experiences',
    template: '%s | Global Connect',
  },
  description:
    'Global Connect helps travelers, expats, and locals discover authentic experiences and meet people nearby. Find travelers on a map, join city chats, get local tips, and discover events — wherever you are.',
  keywords: [
    'travel app',
    'meet travelers',
    'discover locals',
    'local travel tips',
    'events nearby',
    'travel community app',
    'expat social app',
    'backpacker social app',
    'digital nomad community',
    'map based discovery',
    'city chat',
    'countrymen abroad',
  ],
  authors: [{ name: 'Global Connect AS' }],
  creator: 'Global Connect AS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.global-connect.ai',
    siteName: 'Global Connect',
    title: 'Global Connect — Meet Travelers & Discover Local Experiences',
    description:
      'Discover travelers, locals, tips, and events around you. Join city chats, find your countrymen abroad, or go global. Coming to iOS & Android.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Global Connect App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Connect — Meet Travelers & Discover Local Experiences',
    description:
      'The app that turns any city into your community. Map discovery, city chats, local tips, events, and more.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
