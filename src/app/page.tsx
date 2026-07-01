import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import SocialProofSection from '@/components/home/SocialProofSection'
import WhatIsSection from '@/components/home/WhatIsSection'
import DualModeSection from '@/components/home/DualModeSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import MapSection from '@/components/home/MapSection'
import ChatSection from '@/components/home/ChatSection'
import TipsEventsSection from '@/components/home/TipsEventsSection'
import MemoriesSection from '@/components/home/MemoriesSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import PartnerTeaserSection from '@/components/home/PartnerTeaserSection'
import FAQPreviewSection from '@/components/home/FAQPreviewSection'
import FinalCTASection from '@/components/home/FinalCTASection'

export const metadata: Metadata = {
  title: 'Global Connect — Meet Travelers & Discover Local Experiences',
  description:
    'Global Connect helps travelers, expats, and locals discover authentic experiences and meet people nearby. Find travelers on a map, join city chats, and get local tips — wherever you are.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <WhatIsSection />
      <DualModeSection />
      <FeaturesSection />
      <MapSection />
      <ChatSection />
      <TipsEventsSection />
      <MemoriesSection />
      <HowItWorksSection />
      <PartnerTeaserSection />
      <FAQPreviewSection />
      <FinalCTASection />
    </>
  )
}
