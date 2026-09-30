/** @type {import('next').NextConfig} */

// Sensible, non-breaking security headers applied to every route. Works on
// Vercel and in `next start`. (A strict Content-Security-Policy is intentionally
// omitted for now — it needs dedicated testing against next/image, Google Fonts,
// and Framer Motion's inline styles.)
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
]

const nextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  // /terms is a short alias for the Terms of Service page at /terms-of-use (the
  // URL linked from the footer and cookie banner). Non-permanent (307) so the
  // canonical URL can be switched later without browsers caching the redirect.
  async redirects() {
    return [{ source: '/terms', destination: '/terms-of-use', permanent: false }]
  },
}

export default nextConfig
