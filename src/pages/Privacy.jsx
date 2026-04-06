import { motion } from 'framer-motion'

const Privacy = () => {
  const sections = [
    { title: '1. Information We Collect', content: 'We collect information you provide directly (name, email, phone number, payment details) and information collected automatically (device information, location data, usage data, cookies).' },
    { title: '2. How We Use Your Information', content: 'We use your information to provide and improve our ride-sharing service, process payments, communicate with you, ensure safety and security, and comply with legal obligations.' },
    { title: '3. Location Data', content: 'We collect location data to match riders with drivers, calculate fares, provide real-time tracking, and ensure safety. You can control location permissions through your device settings.' },
    { title: '4. Data Sharing', content: 'We share your data with drivers/riders for ride completion, payment processors, and third-party service providers who help us operate. We do not sell your personal data to third parties.' },
    { title: '5. Data Security', content: 'We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your personal information.' },
    { title: '6. Data Retention', content: 'We retain your data for as long as your account is active or as needed to provide services. You can request deletion of your account and associated data at any time.' },
    { title: '7. Your Rights', content: 'Under GDPR and UK data protection law, you have the right to access, correct, delete, and port your data. You can also object to processing and withdraw consent at any time.' },
    { title: '8. Cookies', content: 'We use cookies and similar technologies to improve your experience, analyse usage, and deliver relevant content. You can manage cookie preferences through your browser settings.' },
    { title: '9. Children\'s Privacy', content: 'Our services are not intended for users under 18 years of age. We do not knowingly collect information from children.' },
    { title: '10. Changes to This Policy', content: 'We may update this privacy policy from time to time. We will notify you of any material changes by email or through the app.' },
  ]

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-brand-blue to-brand-indigo text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-200">Last updated: April 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {sections.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-8">
                <h2 className="text-2xl font-bold mb-3">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <p className="text-gray-600">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@raleeygo.com" className="text-brand-blue hover:underline">privacy@raleeygo.com</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
