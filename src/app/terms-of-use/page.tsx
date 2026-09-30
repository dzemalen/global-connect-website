import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Global Connect',
  description: 'Global Connect terms of service — the rules and guidelines for using our platform.',
}

type Section = {
  title: string
  paragraphs?: string[]
  items?: string[]
  email?: string
}

// Approved legal wording: keep it verbatim when editing the page.
// **text** marks words that are shown in bold.
const intro = [
  'Welcome to **Global Connect**, provided by Global Connect AS ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the Global Connect mobile application, website, and related services (collectively, the "Service").',
  'By creating an account, logging in, or accessing the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.',
]

const sections: Section[] = [
  {
    title: '1. Eligibility & Account Registration',
    items: [
      '**Age Requirement:** You must be at least 18 years old (or the applicable legal age in your jurisdiction, if higher) to use this Service.',
      '**Account Accuracy:** You agree to provide accurate and complete information when creating an account and to keep your login credentials secure.',
      '**Account Responsibility:** You are solely responsible for all activities that occur under your account.',
    ],
  },
  {
    title: '2. User Content & Conduct',
    paragraphs: [
      'You retain ownership of any text, images, or other media you upload ("User Content"). However, by submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, host, display, and distribute your content solely for operating and improving the Service.',
      'You agree **NOT** to use the Service to:',
    ],
    items: [
      'Violate any local, national, or international laws.',
      'Upload, post, or transmit spam, malware, or phishing links.',
      'Infringe upon the copyright, trademark, or privacy rights of others.',
      'Attempt to reverse engineer, scrape, or disrupt the Service\'s infrastructure.',
    ],
  },
  {
    title: '3. Zero Tolerance for Objectionable Content and Abusive Users',
    paragraphs: ['We maintain a **zero-tolerance policy** regarding harmful content and conduct:'],
    items: [
      '**Prohibited Behavior:** Harassment, hate speech, bullying, impersonation, graphic violence, and sexually explicit material are strictly forbidden.',
      '**Moderation & Enforcement:** We reserve the right to review, flag, and remove any content that violates these Terms at our sole discretion.',
      '**Account Termination:** Violations will result in immediate content removal and temporary or permanent suspension of the offending user\'s account without notice.',
    ],
  },
  {
    title: '4. Intellectual Property',
    paragraphs: [
      'All rights, title, and interest in and to the Service (excluding User Content), including software, logos, designs, and trademarks, are and will remain the exclusive property of Global Connect AS and its licensors.',
    ],
  },
  {
    title: '5. Termination',
    paragraphs: [
      'You may delete your account and stop using the Service at any time. We reserve the right to suspend or terminate your access to the Service immediately, without prior notice or liability, for any reason, including a breach of these Terms.',
    ],
  },
  {
    title: '6. Disclaimer of Warranties',
    paragraphs: [
      'The Service is provided on an **"AS IS"** and **"AS AVAILABLE"** basis without warranties of any kind, whether express or implied, including fitness for a particular purpose or non-infringement. We do not guarantee that the Service will be uninterrupted, secure, or error-free.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by law, Global Connect AS shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of or inability to use the Service.',
    ],
  },
  {
    title: '8. Changes to These Terms',
    paragraphs: [
      'We may update these Terms from time to time. We will notify you of any material changes by updating the "Last Updated" date at the top of this document or via an in-app notice. Continued use of the Service after changes are made constitutes acceptance of the revised Terms.',
    ],
  },
  {
    title: '9. Governing Law',
    paragraphs: [
      'These Terms are governed by and construed in accordance with the laws of Norway, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts of Norway.',
    ],
  },
  {
    title: '10. Contact Us',
    paragraphs: ['If you have any questions about these Terms, please contact us at:'],
    email: 'nidal@global-connect.ai',
  },
]

// Renders the **bold** spans marked in the text above.
function formatText(text: string) {
  return text.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))
}

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            Legal
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 font-jakarta mb-4">Terms of Service</h1>
          <p className="text-slate-500 text-sm">Last Updated: September 30, 2026</p>
          {intro.map((paragraph, i) => (
            <p key={i} className="mt-4 text-slate-600 leading-relaxed">
              {formatText(paragraph)}
            </p>
          ))}
          <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-700">
              Also see our{' '}
              <Link href="/privacy-policy" className="font-semibold underline underline-offset-2">
                Privacy Policy
              </Link>{' '}
              for information on how we handle your personal data.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-slate-900 font-jakarta mb-3">{section.title}</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                {section.paragraphs?.map((paragraph, i) => (
                  <p key={i}>{formatText(paragraph)}</p>
                ))}
                {section.items && (
                  <ul className="space-y-1.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                        <span>{formatText(item)}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.email && (
                  <p>
                    <a href={`mailto:${section.email}`} className="text-blue-600 hover:underline font-semibold">
                      {section.email}
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
