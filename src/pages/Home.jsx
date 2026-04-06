import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiStar, HiCheckCircle, HiShieldCheck, HiLightningBolt } from 'react-icons/hi'
import { FaApple, FaGooglePlay, FaMapMarkedAlt, FaCar, FaQrcode, FaShieldAlt, FaClock, FaPoundSign } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } })
}

const Home = () => {
  const features = [
    { icon: FaMapMarkedAlt, title: 'Live GPS Tracking', desc: 'Real-time driver location on an interactive map', color: 'from-blue-500 to-blue-700' },
    { icon: FaCar, title: 'TfL Route Alignment', desc: 'Rides follow official London bus routes', color: 'from-indigo-500 to-purple-600' },
    { icon: FaQrcode, title: 'QR Verification', desc: 'Scan to confirm your driver before boarding', color: 'from-amber-500 to-orange-500' },
    { icon: FaShieldAlt, title: 'Verified Drivers', desc: 'Background checked, insured, and approved', color: 'from-emerald-500 to-teal-600' },
    { icon: FaClock, title: 'Faster Commutes', desc: 'Beat the bus and save 20+ mins each way', color: 'from-rose-500 to-pink-600' },
    { icon: FaPoundSign, title: 'Fair Pricing', desc: 'No surge pricing, no hidden fees, ever', color: 'from-cyan-500 to-blue-500' },
  ]

  const stats = [
    { num: '0', label: 'Active Riders' },
    { num: '0', label: 'Verified Drivers' },
    { num: '0', label: 'Rides Completed' },
    { num: '0', label: 'App Store Rating' },
  ]

  const steps = [
    { n: '01', icon: '📍', title: 'Set Your Destination', body: "Enter your destination and browse TfL-aligned routes nearby." },
    { n: '02', icon: '🚗', title: 'Match with a Driver', body: 'Get paired instantly with a verified driver heading your way.' },
    { n: '03', icon: '✅', title: 'Ride & Pay Securely', body: 'Scan the QR code, enjoy the journey, and pay in-app.' },
  ]

  const reviews = [
    { name: 'Sarah M.', role: 'Daily Commuter · Hackney', text: "Cut my morning commute from 45 min to 20. The app is incredibly simple to use.", rating: 5, initial: 'S' },
    { name: 'James T.', role: 'Office Professional · Canary Wharf', text: 'Saving over £80 a month compared to the Tube. Brilliant concept.', rating: 5, initial: 'J' },
    { name: 'Priya K.', role: 'Nurse · NHS Barts', text: 'The QR verification made me feel safe from day one. Very professional.', rating: 5, initial: 'P' },
  ]

  return (
    <div>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0d1b3e] via-brand-indigo to-brand-blue overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT — Copy */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-8">
                <HiLightningBolt className="w-4 h-4 text-brand-yellow" />
                Now available across London
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.05] tracking-tight mb-6">
                short <span className="text-brand-yellow">rides</span><br />
                <span className="text-brand-yellow">quick</span> arrivals, smart <span className="text-brand-yellow">prices</span>  
              </h1>

              <p className="text-lg md:text-xl text-white/65 leading-relaxed mb-10 max-w-lg">
                RaleeyGo connects you with verified drivers on the same TfL bus routes.
                Faster than the bus, kinder to your wallet than a cab.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/download" className="btn-primary text-base px-8 py-4">
                  Download Free <HiArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/how-it-works" className="btn-ghost text-base px-8 py-4">
                  See How It Works
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex">{[...Array(5)].map((_, i) => <HiStar key={i} className="w-4 h-4 text-brand-yellow" />)}</div>
                  <span className="text-white/55">4.9 on App Store</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-white/55">riders</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-white/55">All drivers verified</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Phone mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="hidden lg:flex justify-center relative"
            >
              <div className="relative">
                <div className="w-[280px] h-[560px] rounded-[3rem] bg-white/10 border-2 border-white/20 backdrop-blur-sm shadow-2xl overflow-hidden">
                  <img src="/app_screenshot.png" alt="RaleeyGo app" className="w-full h-full object-cover" />
                </div>

                {/* Floating card — match notification */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="absolute -left-20 bottom-24 bg-white rounded-2xl shadow-2xl px-4 py-3.5 flex items-center gap-3 min-w-[180px]"
                >
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <HiCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Driver matched!</p>
                    <p className="text-xs text-gray-400">2 min away · Route 38</p>
                  </div>
                </motion.div>

                {/* Floating card — fare */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="absolute -right-16 top-24 bg-white rounded-2xl shadow-2xl px-5 py-4"
                >
                  <p className="text-xs text-gray-400 mb-1">Your fare</p>
                  <p className="text-2xl font-black text-gray-900">£2.40</p>
                  <p className="text-xs text-emerald-500 font-semibold mt-1">Save £6 vs taxi</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ──────────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-brand-blue mb-1">{s.num}</div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────────── */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="max-w-xl mb-16"
          >
            <span className="badge mb-4">Why RaleeyGo</span>
            <h2 className="section-title">Built for London commuters</h2>
            <p className="section-subtitle">Every feature designed around how people actually travel in this city.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
                className="card group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white text-2xl mb-5 shadow-md`}>
                  <f.icon />
                </div>
                <h3 className="text-lg font-bold text-brand-darkGray mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="text-center max-w-xl mx-auto mb-20"
          >
            <span className="badge mb-4">Simple process</span>
            <h2 className="section-title">Up and running in minutes</h2>
            <p className="section-subtitle mx-auto">Three steps between you and a smarter commute.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-8 left-[calc(33%+1rem)] w-[calc(33%-2rem)] h-0.5 bg-gradient-to-r from-brand-blue to-brand-yellow" />
            <div className="hidden md:block absolute top-8 left-[calc(66%+1rem)] w-[calc(33%-2rem)] h-0.5 bg-gradient-to-r from-brand-yellow to-brand-indigo" />

            {steps.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.15 }} viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center text-white font-black text-xl shadow-lg">
                    {step.n}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-yellow rounded-xl flex items-center justify-center text-lg shadow">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-darkGray mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm max-w-xs">{step.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/how-it-works" className="btn-outline">
              Full guide <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="badge mb-4">Reviews</span>
            <h2 className="section-title">Loved by London commuters</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                className="card"
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(r.rating)].map((_, s) => <HiStar key={s} className="w-5 h-5 text-brand-yellow" />)}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm italic">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {r.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-darkGray">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APP DOWNLOAD ─────────────────────────────────────── */}
      <section className="section-pad bg-gradient-to-br from-[#0d1b3e] via-brand-indigo to-brand-blue overflow-hidden relative">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Free Download
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Get RaleeyGo<br /><span className="text-brand-yellow">on your phone</span>
              </h2>
              <p className="text-white/65 text-lg mb-10 leading-relaxed">
                Available on iOS and Android. Download free and take your first ride in minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3.5 bg-white text-brand-darkGray px-6 py-4 rounded-2xl hover:bg-gray-100 transition-colors shadow-xl">
                  <FaApple className="w-7 h-7 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500">Download on the</div>
                    <div className="text-base font-black">App Store</div>
                  </div>
                </a>
                <div className="flex items-center gap-3.5 bg-white/80 text-brand-darkGray px-6 py-4 rounded-2xl shadow-xl opacity-70 cursor-not-allowed relative">
                  <FaGooglePlay className="w-6 h-6 flex-shrink-0 text-green-500" />
                  <div>
                    <div className="text-xs text-gray-500">Get it on</div>
                    <div className="text-base font-black">Google Play</div>
                  </div>
                  <span className="ml-2 text-[10px] font-bold bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full">Coming Soon</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="hidden lg:flex justify-center"
            >
              <div className="w-64 h-[480px] rounded-[2.5rem] bg-white/10 border-2 border-white/20 shadow-2xl overflow-hidden">
                <img src="/app_screenshot.png" alt="RaleeyGo app" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-24 bg-brand-darkGray">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Ready for a better<br /><span className="text-brand-yellow">commute</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Join Londoners already using RaleeyGo every day.
            </p>
            <Link to="/download" className="btn-primary text-base px-10 py-4">
              Download — It's Free <HiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
