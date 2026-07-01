'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

/*
  FAQ content sourced directly from the app's faqScreen.dart.
  Only questions and answers present in the actual app are included here.
*/
const faqGroups = [
  {
    group: 'About the App',
    items: [
      {
        q: 'What exactly is Global Connect?',
        a: 'Global Connect is the mobile app designed to help you explore the world in a new way. Find hidden local gems, great local tips, and meet new friends — whether you\'re traveling or just want to experience more in your own city. We\'re all about connecting you to authentic experiences and people.',
      },
      {
        q: 'Who is this app perfect for?',
        a: 'It\'s great for you if you love to travel, backpack, study abroad, or simply want to get to know your own city better and meet interesting people. Both adventurous souls and those seeking a sense of belonging will find their place here!',
      },
      {
        q: 'Do I have to pay to use the app?',
        a: 'No, Global Connect is free to download and use. We fund the app through collaborations with businesses that want to showcase their offers, and through other partners, so you can enjoy all core features at no cost.',
      },
    ],
  },
  {
    group: 'Features',
    items: [
      {
        q: "What are Global Connect's main features?",
        a: "With Global Connect, you can:\n• Choose your travel mode: decide whether you want to see content and chat with people globally, or only with those from your own home country.\n• Chat locally & privately: participate in chats with everyone in the city you are in, or chat one-on-one and in private groups.\n• Find and share tips: discover the best local tips on restaurants, places, and hidden gems — and share your own!\n• Review places: read and leave reviews for restaurants, bars, and other spots you visit.\n• Show off your travels: keep a personal profile with an interactive map showing all the countries you've visited.",
      },
      {
        q: "What's the difference between \"Countrymen\" and \"Global\" mode?",
        a: 'Countrymen Mode: perfect for you if you want to meet and see content primarily from people of your own nationality while abroad. The local chat, for example, will only include countrymen.\nGlobal Mode: opens up the app to everyone! Meet people from all over the world and see all available tips, regardless of nationality. You can easily switch between modes anytime within the app.',
      },
      {
        q: 'How does the local chat work?',
        a: 'The local chat is a shared conversation for all Global Connect users who are physically present in the same city as you. You\'ll automatically join the chat for your current location and can only send messages there. The content within the local chat will also filter based on whether you\'ve selected "Countrymen" or "Global" mode.',
      },
      {
        q: 'Can I recommend restaurants and share tips myself?',
        a: 'Absolutely — sharing your own tips and writing reviews for restaurants and places you\'ve visited is a key part of the app! New restaurants are also curated by Global Connect administrators to ensure quality and relevance, often in collaboration with our partners.',
      },
    ],
  },
  {
    group: 'Privacy & Safety',
    items: [
      {
        q: 'How does Global Connect protect my privacy?',
        a: 'Your privacy is very important to us. We collect only data to provide and improve the app, personalize your experience, and offer you relevant promotions via our trusted partners. All data processing adheres to strict laws like GDPR. You always have control over your data and can read all details in our Privacy Policy.',
      },
    ],
  },
  {
    group: 'For Businesses',
    items: [
      {
        q: 'I have a business and want to partner — how do I do that?',
        a: 'We love connecting businesses with our engaged audience. Please visit the dedicated "For Partners" section on our website for more information and a simple contact form.',
      },
      {
        q: "I didn't find an answer to my question. Who can I contact?",
        a: "Still have questions or need help? Don't hesitate to contact us! You can send an email directly to nidal@global-connect.ai. We're happy to help!",
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = `faq-${question.slice(0, 20).replace(/\W+/g, '-').toLowerCase()}`
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-sm font-semibold text-slate-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div id={panelId} role="region" className="px-6 pb-5 border-t border-slate-100">
          <p className="text-sm text-slate-600 leading-relaxed pt-4 whitespace-pre-line">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">FAQ</div>
            <h1 className="text-5xl font-extrabold text-slate-900 font-jakarta tracking-tight mb-6">
              Frequently asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">questions.</span>
            </h1>
            <p className="text-xl text-slate-600">
              Everything you need to know about Global Connect.{' '}
              Can&apos;t find your answer?{' '}
              <Link href="/contact" className="text-blue-600 underline underline-offset-2">Contact us</Link>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {faqGroups.map((group, i) => (
            <AnimatedSection key={group.group} delay={i * 0.08}>
              <h2 className="text-xl font-bold text-slate-900 font-jakarta mb-5">{group.group}</h2>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <FAQItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-slate-900 font-jakarta mb-3">Still have questions?</h2>
            <p className="text-slate-600 mb-6">We&apos;re happy to help. Reach out to our team directly.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-sm shadow-md hover:opacity-95 transition-opacity">
              Contact us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
