import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { HiArrowRight, HiCheckCircle } from "react-icons/hi"
import { FaApple, FaGooglePlay } from "react-icons/fa"

const steps = [
  {
    n: "01", emoji: "📲",
    title: "Download the App",
    body: "Get RaleeyGo from the App Store or Google Play. It's completely free to download and create an account takes under two minutes.",
    tips: ["Available on iOS 14+ and Android 8+", "No account fee, no subscription", "Quick email or phone sign-up"],
  },
  {
    n: "02", emoji: "📍",
    title: "Enter Your Destination",
    body: "Open the app, type where you're going, and RaleeyGo will show you available TfL-aligned routes in your area with live driver availability.",
    tips: ["Save your home and work stops", "See driver availability in real time", "Route shown on map before booking"],
  },
  {
    n: "03", emoji: "🚗",
    title: "Get Matched Instantly",
    body: "Our algorithm pairs you with the nearest verified driver heading along your route. You'll see their name, rating, car details, and ETA.",
    tips: ["Typical match time under 90 seconds", "Driver rating and reviews visible", "Cancel free within 2 minutes"],
  },
  {
    n: "04", emoji: "✅",
    title: "Scan & Ride",
    body: "When your driver arrives, open the QR screen in the app. The driver scans it to confirm the ride — then you're off.",
    tips: ["QR scan takes under 5 seconds", "Prevents wrong-car boarding", "Both parties confirmed before moving"],
  },
  {
    n: "05", emoji: "💳",
    title: "Pay & Rate",
    body: "Payment is processed automatically in-app when you arrive. You'll get a digital receipt and a chance to rate your driver.",
    tips: ["Card or Apple/Google Pay supported", "Receipt emailed automatically", "Rate to improve future matches"],
  },
]

const faqs = [
  { q: "Is RaleeyGo safe?", a: "All drivers complete enhanced DBS checks, vehicle inspections, and an onboarding assessment. The QR system ensures you only board your confirmed driver's vehicle." },
  { q: "How much does a ride cost?", a: "Fares are flat and transparent, calculated by route length. You see the exact price before confirming. No surge pricing, no hidden fees." },
  { q: "What areas does RaleeyGo cover?", a: "We currently cover Greater London along TfL bus routes. We're expanding rapidly — check the app for live coverage in your postcode." },
  { q: "Can I schedule rides in advance?", a: "Yes! You can book rides up to 7 days ahead. Perfect for early morning commutes, airport runs, or regular weekly trips." },
]

const HowItWorks = () => (
  <div>
    {/* Hero */}
    <section className="page-hero relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-96 h-96 bg-brand-yellow/8 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Step-by-Step Guide
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            How <span className="text-brand-yellow">RaleeyGo</span> works
          </h1>
          <p className="text-white/65 text-lg leading-relaxed">
            Five simple steps from download to your first smarter commute.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Steps */}
    <section className="section-pad bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
              className="flex gap-8 items-start"
            >
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center text-white font-black text-xl shadow-lg">
                  {step.n}
                </div>
                {i < steps.length - 1 && <div className="w-0.5 h-12 bg-gray-100 mt-3" />}
              </div>
              <div className="pt-2 flex-1">
                <div className="text-2xl mb-2">{step.emoji}</div>
                <h3 className="text-2xl font-bold text-brand-darkGray mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-5">{step.body}</p>
                <ul className="flex flex-wrap gap-3">
                  {step.tips.map((tip, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-gray-600">
                      <HiCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-pad bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="badge mb-4">FAQ</span>
          <h2 className="section-title">Common questions</h2>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl p-6"
            >
              <h4 className="text-base font-bold text-brand-darkGray mb-2">{faq.q}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Download CTA */}
    <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-indigo">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-black text-white mb-4">Ready to get started?</h2>
          <p className="text-white/65 text-lg mb-10">Download the app and take your first smarter ride today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-brand-darkGray px-6 py-3.5 rounded-2xl hover:bg-gray-50 transition shadow-lg">
              <FaApple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-gray-400">Download on</div>
                <div className="font-bold text-sm">App Store</div>
              </div>
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-brand-darkGray px-6 py-3.5 rounded-2xl hover:bg-gray-50 transition shadow-lg">
              <FaGooglePlay className="w-5 h-5 text-green-500" />
              <div className="text-left">
                <div className="text-xs text-gray-400">Get it on</div>
                <div className="font-bold text-sm">Google Play</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
)

export default HowItWorks
