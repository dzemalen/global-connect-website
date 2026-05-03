import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Global Connect',
  description: 'Global Connect privacy policy — how we collect, use, and protect your personal information.',
}

type SectionItem = { label: string; detail?: string }

type Section = {
  title: string
  intro?: string
  items?: SectionItem[]
  closing?: string
}

const sections: Section[] = [
  {
    title: '1. Information We Collect',
    intro: 'We collect information you provide directly to us, including:',
    items: [
      { label: 'Account information', detail: 'name, email address, password, nationality, profile photo, and bio when you create an account.' },
      { label: 'Location data', detail: 'your device\'s location when you use the app, to provide location-based features. You can choose to share approximate or precise location.' },
      { label: 'Communications', detail: 'messages you send through the app, tips, posts, and reviews you create.' },
      { label: 'Device information', detail: 'device type, operating system, app version, and unique device identifiers.' },
      { label: 'Usage data', detail: 'how you interact with the app — features used, pages visited, time spent.' },
    ],
  },
  {
    title: '2. How We Use Your Information',
    intro: 'We use the information we collect to:',
    items: [
      { label: 'Provide, operate, and improve Global Connect' },
      { label: 'Show your profile and location on the map to other users (based on your visibility settings)' },
      { label: 'Enable city chat, private messaging, and community features' },
      { label: 'Send you notifications about activity relevant to you' },
      { label: 'Ensure the safety and security of our community' },
      { label: 'Comply with legal obligations' },
      { label: 'Send product updates and announcements (you can opt out at any time)' },
    ],
  },
  {
    title: '3. Information Sharing',
    intro: 'We do not sell your personal information. We share your information only in the following circumstances:',
    items: [
      { label: 'With other users', detail: 'your profile information and location (based on your privacy settings) are visible to other Global Connect users.' },
      { label: 'Service providers', detail: 'we share data with trusted third-party service providers who help us operate the platform (e.g., cloud hosting, analytics).' },
      { label: 'Legal requirements', detail: 'we may disclose information when required by law or to protect the safety of our users or the public.' },
      { label: 'Business transfers', detail: 'in the event of a merger, acquisition, or sale of assets, user information may be transferred.' },
    ],
  },
  {
    title: '4. Your Privacy Controls',
    intro: 'You have meaningful control over your information:',
    items: [
      { label: 'Visibility settings', detail: 'set your profile to visible, approximate-location only, or hidden' },
      { label: 'Go invisible', detail: 'temporarily hide from the map at any time' },
      { label: 'Profile information', detail: 'edit or delete any profile information at any time' },
      { label: 'Account deletion', detail: 'delete your account and all associated data from the app settings' },
      { label: 'Communications', detail: 'control notification preferences and opt out of marketing emails' },
    ],
  },
  {
    title: '5. Data Retention',
    intro: 'We retain your personal information for as long as your account is active or as needed to provide you services. When you delete your account, we delete your personal data within 30 days, except where we are required to retain it for legal or compliance reasons.',
  },
  {
    title: '6. Security',
    intro: 'We implement industry-standard security measures to protect your information, including encryption in transit and at rest, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: '7. Children\'s Privacy',
    intro: 'Global Connect is not intended for users under 18 years of age. We do not knowingly collect personal information from children under 18. If we learn that we have collected personal information from a child under 18, we will delete that information promptly.',
  },
  {
    title: '8. Changes to This Policy',
    intro: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy in the app and sending a notification. Your continued use of the app after the changes take effect constitutes your acceptance of the updated policy.',
  },
  {
    title: '9. Contact Us',
    intro: 'If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:',
    closing: 'contact@global-connect.ai\n\nGlobal Connect AS\nOrg. nr. 935687519\nAddress available upon request',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            Legal
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 font-jakarta mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: June 17, 2025</p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            At Global Connect, your privacy matters deeply. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our app and services.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-slate-900 font-jakarta mb-3">{section.title}</h2>
              <div className="text-sm text-slate-600 leading-relaxed">
                {section.intro && <p className="my-2">{section.intro}</p>}
                {section.items && (
                  <ul className="mt-2 space-y-1.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                        <span>
                          {item.detail ? (
                            <><strong>{item.label}:</strong> {item.detail}</>
                          ) : (
                            item.label
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.closing && (
                  <div className="mt-3 space-y-1">
                    {section.closing.split('\n').map((line, i) =>
                      line ? (
                        i === 0 ? (
                          <p key={i} className="my-2">
                            <a href="mailto:contact@global-connect.ai" className="text-blue-600 hover:underline font-medium">
                              {line}
                            </a>
                          </p>
                        ) : (
                          <p key={i} className="my-1">{line}</p>
                        )
                      ) : (
                        <br key={i} />
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
