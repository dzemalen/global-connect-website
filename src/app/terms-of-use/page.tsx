import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use — Global Connect',
  description: 'Global Connect terms of use — the rules and guidelines for using our platform.',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By downloading, accessing, or using Global Connect, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the app. We may update these terms from time to time — continued use of the app constitutes acceptance of any changes.',
  },
  {
    title: '2. Eligibility',
    content: 'You must be at least 18 years old to use Global Connect. By using the app, you represent and warrant that you meet this requirement. We reserve the right to terminate accounts that violate this requirement.',
  },
  {
    title: '3. Account Responsibilities',
    content: `You are responsible for:

• Maintaining the confidentiality of your account credentials
• All activity that occurs under your account
• Providing accurate and truthful information in your profile
• Updating your information to keep it accurate

You must notify us immediately if you suspect any unauthorized use of your account.`,
  },
  {
    title: '4. Community Guidelines',
    content: `Global Connect is a community platform. To maintain a safe, respectful environment, you agree NOT to:

• Post or share content that is harmful, offensive, hateful, or discriminatory
• Harass, threaten, or intimidate other users
• Share another person's private information without their consent
• Create fake profiles or impersonate others
• Use the platform for commercial solicitation without authorization
• Post spam, malware, or malicious content
• Attempt to gain unauthorized access to accounts or systems
• Use the app for any illegal purpose

Violations may result in immediate account suspension or termination.`,
  },
  {
    title: '5. User-Generated Content',
    content: 'By posting content on Global Connect (tips, reviews, messages, photos, etc.), you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute that content as part of the service. You retain ownership of your content. You are solely responsible for the content you post and its accuracy.',
  },
  {
    title: '6. Privacy',
    content: 'Your use of Global Connect is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.',
  },
  {
    title: '7. Intellectual Property',
    content: 'Global Connect and its content (excluding user-generated content) are the property of Global Connect AS and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on our platform without explicit permission.',
  },
  {
    title: '8. Disclaimers',
    content: 'Global Connect is provided "as is" without warranties of any kind. We do not guarantee the accuracy of user-generated content, tips, or reviews. We are not responsible for the actions of other users. Meeting strangers involves inherent risks — please exercise good judgment and take appropriate precautions.',
  },
  {
    title: '9. Limitation of Liability',
    content: 'To the maximum extent permitted by law, Global Connect AS shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. Our total liability shall not exceed the amount you paid us in the twelve months prior to the claim.',
  },
  {
    title: '10. Termination',
    content: 'We reserve the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or any other behavior we deem harmful to the community. You may delete your account at any time from the app settings.',
  },
  {
    title: '11. Governing Law',
    content: 'These Terms are governed by and construed in accordance with the laws of Norway, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts of Norway.',
  },
  {
    title: '12. Contact',
    content: 'For questions about these Terms, please contact us at contact@global-connect.ai.',
  },
]

export default function TermsOfUsePage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            Legal
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 font-jakarta mb-4">Terms of Use</h1>
          <p className="text-slate-500 text-sm">Last updated: June 17, 2025</p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            These Terms of Use govern your use of the Global Connect mobile application and related services. Please read them carefully before using the platform.
          </p>
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
              <div className="text-sm text-slate-600 leading-relaxed">
                {section.content.split('\n').map((line, i) => {
                  if (line.startsWith('•')) {
                    return (
                      <div key={i} className="flex items-start gap-2 my-1.5">
                        <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                        <span>{line.replace('• ', '')}</span>
                      </div>
                    )
                  }
                  return line ? <p key={i} className="my-2">{line}</p> : <br key={i} />
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
