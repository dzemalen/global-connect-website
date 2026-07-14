import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Global Connect',
  description: 'Global Connect privacy policy — how we collect, use, share, and protect your personal information, and your rights under the GDPR.',
}

type SectionItem = { label: string; detail?: string }

type Section = {
  title: string
  intro?: string
  items?: SectionItem[]
  outro?: string
  closing?: string
}

const sections: Section[] = [
  {
    title: '1. Who We Are',
    intro:
      'Global Connect AS ("Global Connect", "we", "us", or "our") is the data controller responsible for your personal information. We are a company registered in Norway (Org. nr. 935687519). This Privacy Policy applies to the Global Connect mobile app and the global-connect.ai website (together, the "Services"). Because we are based in the European Economic Area (EEA), we process personal data in accordance with the EU/EEA General Data Protection Regulation (GDPR) and Norwegian data protection law.',
  },
  {
    title: '2. Information We Collect',
    intro: 'We collect the following categories of information:',
    items: [
      { label: 'Account information', detail: 'name, email address, password (stored encrypted), nationality, profile photo, and bio when you create an account.' },
      { label: 'Location data', detail: 'your device\'s location when you use the app, so we can show you nearby people and place you on the live map. You choose whether to share precise or approximate location, and you can go invisible or turn location sharing off at any time.' },
      { label: 'Content you create', detail: 'messages in city chats, private and group conversations, posts, travel memories, photos, tips, and reviews. Photos and posts may contain images of you or others and any metadata you include.' },
      { label: 'Connections & activity', detail: 'who you chat with, cities you view, people and places you interact with, and your Countrymen/Global mode preferences.' },
      { label: 'Device information', detail: 'device type, operating system, app version, language, and unique device or push-notification identifiers.' },
      { label: 'Usage data', detail: 'how you interact with the Services — features used, screens visited, and time spent — collected to operate and improve the app.' },
    ],
    outro:
      'You are not required to provide all of this information, but some features (such as the map, city chat, or messaging) will not work without it.',
  },
  {
    title: '3. How We Use Your Information',
    intro: 'We use the information we collect to:',
    items: [
      { label: 'Provide, operate, and improve the Services' },
      { label: 'Show your profile and location on the map to other users, based on your visibility settings' },
      { label: 'Enable city chat, private and group messaging, tips, and community features' },
      { label: 'Enable Countrymen Mode, which uses your nationality to help you find people from your own country' },
      { label: 'Send push notifications and in-app alerts about activity relevant to you' },
      { label: 'Keep the community safe — detect, prevent, and respond to spam, abuse, fraud, and violations of our terms' },
      { label: 'Respond to your enquiries and provide customer support' },
      { label: 'Comply with legal obligations' },
      { label: 'Send product updates and announcements, where permitted (you can opt out at any time)' },
    ],
  },
  {
    title: '4. Legal Bases for Processing',
    intro: 'Under the GDPR, we rely on the following legal bases to process your personal data:',
    items: [
      { label: 'Performance of a contract', detail: 'to provide the Services you sign up for — for example, showing you on the map, delivering your messages, and maintaining your account.' },
      { label: 'Consent', detail: 'for precise location sharing, push notifications, and marketing communications. You can withdraw consent at any time without affecting processing already carried out.' },
      { label: 'Legitimate interests', detail: 'to keep the platform secure, prevent abuse, understand how the Services are used, and improve them — balanced against your rights and freedoms.' },
      { label: 'Legal obligation', detail: 'where we are required to process data to comply with the law.' },
    ],
  },
  {
    title: '5. How Information Is Shared',
    intro: 'We do not sell your personal information. We share information only as described below:',
    items: [
      { label: 'With other users', detail: 'your profile (name, photo, nationality, bio), your approximate or precise location (per your settings), public city-chat messages, posts, tips, and reviews are visible to other Global Connect users. Private and group messages are visible only to the participants of that conversation.' },
      { label: 'Service providers (data processors)', detail: 'we use trusted providers who process data on our behalf under contract, including Google Firebase (authentication, cloud database, file storage, and push notifications) and Google Maps Platform (map display and location services). They may only use the data to provide services to us.' },
      { label: 'Legal & safety', detail: 'we may disclose information when required by law, to enforce our terms, or to protect the rights, safety, and security of our users, the public, or Global Connect.' },
      { label: 'Business transfers', detail: 'in the event of a merger, acquisition, or sale of assets, user information may be transferred, subject to this Privacy Policy.' },
    ],
  },
  {
    title: '6. International Data Transfers',
    intro:
      'Some of our service providers, including Google (Firebase and Google Maps), may process data on servers located outside the EEA, including in the United States. Where we transfer personal data outside the EEA, we rely on appropriate safeguards such as the European Commission\'s Standard Contractual Clauses or an adequacy decision, to ensure your data receives an equivalent level of protection.',
  },
  {
    title: '7. Your Privacy Controls',
    intro: 'You have meaningful, built-in control over your information:',
    items: [
      { label: 'Visibility settings', detail: 'set your profile to visible, approximate-location only, or hidden.' },
      { label: 'Go invisible', detail: 'temporarily hide yourself from the map at any time.' },
      { label: 'Location control', detail: 'switch between precise and approximate location, or disable location sharing in your device settings.' },
      { label: 'Profile & content', detail: 'edit or delete your profile information, posts, and messages at any time.' },
      { label: 'Notifications', detail: 'manage push and email notification preferences and opt out of marketing.' },
      { label: 'Account deletion', detail: 'delete your account directly from the app settings. This removes your profile, profile photo, posts, and tips. See "Data Retention" below for details on what may remain.' },
    ],
  },
  {
    title: '8. Your Rights Under the GDPR',
    intro: 'If you are in the EEA, you have the following rights over your personal data:',
    items: [
      { label: 'Access', detail: 'request a copy of the personal data we hold about you.' },
      { label: 'Rectification', detail: 'correct inaccurate or incomplete data.' },
      { label: 'Erasure', detail: 'ask us to delete your data ("right to be forgotten").' },
      { label: 'Restriction', detail: 'ask us to limit how we process your data.' },
      { label: 'Portability', detail: 'receive your data in a structured, machine-readable format.' },
      { label: 'Objection', detail: 'object to processing based on our legitimate interests, and to direct marketing.' },
      { label: 'Withdraw consent', detail: 'withdraw any consent you have given, at any time.' },
    ],
    outro:
      'To exercise any of these rights, contact us at nidal@global-connect.ai. You also have the right to lodge a complaint with your local supervisory authority. In Norway this is the Norwegian Data Protection Authority (Datatilsynet, www.datatilsynet.no).',
  },
  {
    title: '9. Data Retention',
    intro:
      'We retain your personal information for as long as your account is active or as needed to provide the Services. When you delete your account from the app, we remove your profile, profile photo, posts and their images, your tips, and your login credentials. Some information may remain after deletion:',
    items: [
      { label: 'Shared conversations', detail: 'messages you sent in city chats, group chats, and private conversations may remain visible to the other participants, as they form part of those users\' conversation history.' },
      { label: 'Other content', detail: 'certain content, such as travel memories and notification records, may be retained in our systems after account deletion.' },
      { label: 'Legal and security', detail: 'we may retain limited information where required for legal, security, or fraud-prevention purposes.' },
    ],
    outro:
      'If you would like all remaining personal data associated with your account permanently erased, contact us at nidal@global-connect.ai and we will action your request within 30 days.',
  },
  {
    title: '10. Security',
    intro:
      'We implement appropriate technical and organizational measures to protect your information, including encryption of data in transit and at rest, access controls, and secure infrastructure provided by Google Firebase. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
  },
  {
    title: '11. Cookies & Analytics',
    intro:
      'Our website uses essential cookies required for it to function and, with your consent, analytics to understand how the site is used. You can manage your preferences through the cookie banner shown on your first visit and through your browser settings. The mobile app does not use advertising cookies.',
  },
  {
    title: '12. Children\'s Privacy',
    intro:
      'Global Connect is not intended for users under 18 years of age. We do not knowingly collect personal information from children under 18. If we learn that we have collected such information, we will delete it promptly. If you believe a minor is using the app, please contact us.',
  },
  {
    title: '13. Changes to This Policy',
    intro:
      'We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy here and, where appropriate, sending an in-app or email notification. Your continued use of the Services after the changes take effect constitutes acceptance of the updated policy.',
  },
  {
    title: '14. Contact Us',
    intro: 'If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:',
    closing: 'nidal@global-connect.ai\n\nGlobal Connect AS\nOrg. nr. 935687519\nNorway\nAddress available upon request',
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
          <p className="text-slate-500 text-sm">Last updated: July 13, 2026</p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            At Global Connect, your privacy matters deeply. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our app and website, and the rights you have over your data under the GDPR.
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
                {section.outro && <p className="mt-3">{section.outro}</p>}
                {section.closing && (
                  <div className="mt-3 space-y-1">
                    {section.closing.split('\n').map((line, i) =>
                      line ? (
                        i === 0 ? (
                          <p key={i} className="my-2">
                            <a href="mailto:nidal@global-connect.ai" className="text-blue-600 hover:underline font-medium">
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
