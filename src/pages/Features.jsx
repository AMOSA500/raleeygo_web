import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { HiArrowRight, HiCheckCircle } from "react-icons/hi"
import { FaMapMarkedAlt, FaCar, FaQrcode, FaShieldAlt, FaClock, FaPoundSign, FaMobileAlt, FaBell, FaStar } from "react-icons/fa"

const featuresList = [
  { icon: FaMapMarkedAlt, title: "Live GPS Tracking", desc: "Watch your driver's real-time location on an interactive map as they approach. Know exactly when to walk to the pickup point.", color: "from-blue-500 to-blue-700", perks: ["Real-time updates every 5 seconds", "Driver ETA calculated on traffic", "Precise pickup coordinates"] },
  { icon: FaCar, title: "TfL Route Alignment", desc: "All rides are matched along official London bus routes, so your journey is efficient, familiar, and predictable.", color: "from-indigo-500 to-purple-600", perks: ["Covers all major TfL bus corridors", "Route is shown before you book", "No detours or diversions"] },
  { icon: FaQrcode, title: "QR Verification", desc: "Every ride starts with a simple QR scan. It confirms the right driver and the right passenger before you board.", color: "from-amber-500 to-orange-500", perks: ["One-tap QR scan at pickup", "Driver must match your booking", "Fail-safe prevents wrong rides"] },
  { icon: FaShieldAlt, title: "Verified Drivers", desc: "Every driver on RaleeyGo completes background checks, vehicle inspections, and a training programme.", color: "from-emerald-500 to-teal-600", perks: ["Enhanced DBS checks", "Annual vehicle safety inspection", "Ongoing performance reviews"] },
  { icon: FaClock, title: "Faster Commutes", desc: "Point-to-point travel means no bus stops, no waiting, no standing. Just direct rides to your destination.", color: "from-rose-500 to-pink-600", perks: ["Up to 50% faster than the bus", "Door-to-door service", "No scheduled stop delays"] },
  { icon: FaPoundSign, title: "Fair Pricing", desc: "Flat fares based on your route, no surge pricing, no hidden costs. What you see is exactly what you pay.", color: "from-cyan-500 to-blue-500", perks: ["No surge or peak pricing", "Full fare shown upfront", "In-app secure payment"] },
  { icon: FaMobileAlt, title: "Smooth App Experience", desc: "Built natively for iOS and Android with a clean, intuitive interface designed for quick booking on the go.", color: "from-violet-500 to-purple-600", perks: ["One-tap booking flow", "Saved home and work addresses", "Offline map caching"] },
  { icon: FaBell, title: "Smart Notifications", desc: "Timely alerts when your driver is nearby, when the ride starts, and when you're approaching your stop.", color: "from-yellow-500 to-amber-600", perks: ["Driver arrival alerts", "Journey progress updates", "Receipt sent automatically"] },
  { icon: FaStar, title: "Two-Way Rating System", desc: "Rate your driver after every ride. Drivers can also rate passengers. Together we keep quality high for everyone.", color: "from-pink-500 to-rose-500", perks: ["Rate after every ride", "Minimum 4.5 driver average", "Feedback improves matches"] },
]

const Features = () => (
  <div>
    {/* Hero */}
    <section className="page-hero relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-96 h-96 bg-brand-yellow/8 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Platform Features
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Everything you need<br /><span className="text-brand-yellow">to ride smart</span>
          </h1>
          <p className="text-white/65 text-lg leading-relaxed mb-8">
            Nine powerful features working together to make every London commute safer, faster, and cheaper.
          </p>
          <Link to="/download" className="btn-primary">Download Free <HiArrowRight className="w-5 h-5" /></Link>
        </motion.div>
      </div>
    </section>

    {/* Feature grid */}
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }} viewport={{ once: true }}
              className="card"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white text-2xl mb-5 shadow-md`}>
                <f.icon />
              </div>
              <h3 className="text-xl font-bold text-brand-darkGray mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{f.desc}</p>
              <ul className="space-y-2">
                {f.perks.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                    <HiCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="section-title mb-4">Ready to try it?</h2>
          <p className="section-subtitle mx-auto mb-8">Download RaleeyGo and experience all these features today.</p>
          <Link to="/download" className="btn-secondary">Download Free <HiArrowRight className="w-5 h-5" /></Link>
        </motion.div>
      </div>
    </section>
  </div>
)

export default Features
