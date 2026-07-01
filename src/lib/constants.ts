export const APP_NAME = 'Global Connect'
export const APP_TAGLINE = 'Go Global. Stay Connected.'
export const APP_DESCRIPTION =
  'Discover travelers, locals, and tips around you. Join city chats, find your countrymen abroad, or connect globally.'

export const CONTACT_EMAIL = 'nidal@global-connect.ai'
export const PARTNER_URL = 'https://www.global-connect.ai/partner'
export const CONTACT_URL = '/contact'

// --- App store links ---------------------------------------------------------
// The app is not published yet. Leave these empty to keep the "Coming soon"
// buttons (which point users to the contact / notify page). When the app goes
// live, paste the real store URLs here and flip APP_LAUNCHED to true — the
// download buttons across the whole site update automatically.
export const APP_STORE_URL = '' // e.g. 'https://apps.apple.com/app/idXXXXXXXXX'
export const GOOGLE_PLAY_URL = '' // e.g. 'https://play.google.com/store/apps/details?id=...'
export const APP_LAUNCHED = false
export const NOTIFY_URL = '/contact' // where "Coming soon" buttons send users

export const FEATURES = [
  {
    id: 'map-discovery',
    icon: 'MapPin',
    title: 'Discover on the Map',
    description:
      'See travelers and locals around you on a live interactive map. Tap any pin to view profiles, nationalities, and connect.',
    color: 'blue',
  },
  {
    id: 'city-chat',
    icon: 'MessageSquare',
    title: 'Join City Chat',
    description:
      'Every city has a live public chat room. Jump in, ask questions, share tips, and meet people in real time.',
    color: 'sky',
  },
  {
    id: 'private-messaging',
    icon: 'MessageCircle',
    title: 'Private & Group Chat',
    description:
      'Message anyone directly or create group conversations with travelers you meet. Stay connected on your terms.',
    color: 'cyan',
  },
  {
    id: 'local-tips',
    icon: 'Lightbulb',
    title: 'Local Tips & Hidden Gems',
    description:
      'Get authentic recommendations from real people who know the city. Restaurants, spots, shortcuts — all from the community.',
    color: 'amber',
  },
  {
    id: 'best-restaurants',
    icon: 'UtensilsCrossed',
    title: 'Best Restaurants',
    description:
      'Discover standout restaurants recommended by the community and curated by Global Connect, with reviews and locations.',
    color: 'blue',
  },
  {
    id: 'travel-memories',
    icon: 'Camera',
    title: 'Travel Memories',
    description:
      'Share posts, photos, and stories from your journey. Build your travel identity and inspire others.',
    color: 'rose',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'Is Global Connect free to use?',
    answer:
      'Yes, Global Connect is free to download and use. The core features — map discovery, city chat, and tips — are completely free. We offer premium features for power users.',
  },
  {
    question: 'How does Countrymen Mode work?',
    answer:
      'Countrymen Mode filters your map and feed to show people from your own nationality who are in the same city or area. It\'s perfect when you want to find familiar faces, connect in your language, or get tips from people who share your background.',
  },
  {
    question: 'Is the app safe? How is privacy handled?',
    answer:
      'Safety is a top priority. You control exactly what information is visible on your profile. You can set your location to approximate, block users, and report any content. We have community guidelines and a moderation team.',
  },
  {
    question: 'Can I use Global Connect at home, not just when traveling?',
    answer:
      'Absolutely. Many users use Global Connect in their home city to meet international visitors, join city chats, and discover local tips. The app works anywhere in the world.',
  },
  {
    question: 'What is Global Mode vs Countrymen Mode?',
    answer:
      'Global Mode shows you everyone nearby — travelers and locals from any country. Countrymen Mode narrows the view to people from your own nationality. You can switch between them anytime, instantly.',
  },
  {
    question: 'How do local tips and recommendations work?',
    answer:
      'Every city has a community-curated guide. Browse tips and restaurant recommendations from real travelers, filter by category or by your countrymen, upvote what\'s helpful, and share your own.',
  },
]
