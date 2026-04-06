import { motion } from 'framer-motion'

const Terms = () => {
  const sections = [
    { title: '1. Acceptance of Terms', content: 'By accessing or using the RaleeyGo application and website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.' },
    { title: '2. Description of Service', content: 'RaleeyGo provides a ride-sharing platform that connects commuters with drivers traveling along Transport for London (TfL) bus routes. We facilitate the connection between riders and drivers but are not a transportation provider.' },
    { title: '3. User Accounts', content: 'To use RaleeyGo, you must create an account with accurate and complete information. You are responsible for maintaining the security of your account credentials. You must be at least 18 years old to use our services.' },
    { title: '4. User Responsibilities', content: 'Users must comply with all applicable laws and regulations. Riders must behave respectfully towards drivers and other passengers. Drivers must maintain valid driving licenses, insurance, and vehicle documentation.' },
    { title: '5. Payments and Fees', content: 'Ride fares are calculated based on distance and route. Payment is processed through our secure payment system. RaleeyGo charges a service fee on each transaction. Refund policies are detailed in our Help Centre.' },
    { title: '6. Safety and Conduct', content: 'All users must maintain appropriate conduct during rides. Harassment, discrimination, or unsafe behaviour will result in immediate account suspension. All rides are tracked for safety purposes.' },
    { title: '7. Privacy', content: 'Your use of RaleeyGo is also governed by our Privacy Policy. We collect and process personal data as described in the Privacy Policy to provide and improve our services.' },
    { title: '8. Intellectual Property', content: 'All content, trademarks, and intellectual property on the RaleeyGo platform belong to RaleeyGo Ltd. Users may not copy, modify, or distribute our content without written permission.' },
    { title: '9. Limitation of Liability', content: 'RaleeyGo is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific ride in question.' },
    { title: '10. Modifications', content: 'We reserve the right to modify these terms at any time. Users will be notified of significant changes. Continued use of the service after changes constitutes acceptance of the new terms.' },
  ]

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-brand-blue to-brand-indigo text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
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
            <p className="text-gray-600">If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@raleeygo.com" className="text-brand-blue hover:underline">legal@raleeygo.com</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
