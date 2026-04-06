import { motion } from "framer-motion"
import { FaApple, FaGooglePlay, FaStar } from "react-icons/fa"
import { HiCheckCircle, HiShieldCheck, HiStar } from "react-icons/hi"

const reviews = [
  { name: "Alex R.", text: "Best commute app in London. Simple and reliable every morning.", rating: 5 },
  { name: "Mei L.", text: "Saved me so much money. The drivers are always professional.", rating: 5 },
  { name: "Tom B.", text: "Interface is clean and the rides are always on time.", rating: 5 },
]

const badges = [
  { icon: HiShieldCheck, label: "Safe & Verified" },
  { icon: HiCheckCircle, label: "Free to Download" },
  { icon: HiStar, label: "4.9 App Rating" },
]

const Download = () => (
  <div>
    {/* Hero */}
    <section className="page-hero relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-96 h-96 bg-brand-yellow/8 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Free Download
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Download<br /><span className="text-brand-yellow">RaleeyGo</span> today
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              Available on iPhone and Android. Free to download, no subscription required.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3.5 bg-white text-brand-darkGray px-6 py-4 rounded-2xl hover:bg-gray-50 transition-colors shadow-xl">
                <FaApple className="w-7 h-7 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-base font-black">App Store</div>
                </div>
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3.5 bg-white text-brand-darkGray px-6 py-4 rounded-2xl hover:bg-gray-50 transition-colors shadow-xl">
                <FaGooglePlay className="w-6 h-6 flex-shrink-0 text-green-500" />
                <div>
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-base font-black">Google Play</div>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/60 text-sm">
                  <Icon className="w-4 h-4 text-emerald-400" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:flex justify-center">
            <div className="w-72 h-[540px] rounded-[3rem] bg-white/10 border-2 border-white/20 backdrop-blur-sm shadow-2xl overflow-hidden">
              <img src="/app_screenshot.png" alt="RaleeyGo app" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Requirements */}
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { platform: "iOS", icon: FaApple, reqs: ["iOS 14.0 or later", "iPhone 8 or newer", "100MB free storage", "Location services enabled"] },
            { platform: "Android", icon: FaGooglePlay, reqs: ["Android 8.0 (Oreo)+", "2GB RAM minimum", "100MB free storage", "Google Play Services required"] },
          ].map(({ platform, icon: Icon, reqs }) => (
            <motion.div key={platform}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }} viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-brand-darkGray">{platform} Requirements</h3>
              </div>
              <ul className="space-y-2.5">
                {reqs.map(r => (
                  <li key={r} className="flex items-center gap-2 text-sm text-gray-500">
                    <HiCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Reviews */}
    <section className="section-pad bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="badge mb-4">App Store Reviews</span>
          <h2 className="section-title">What riders are saying</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
              className="card"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(r.rating)].map((_, s) => <FaStar key={s} className="w-4 h-4 text-brand-yellow" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
              <p className="text-sm font-bold text-brand-darkGray">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
)

export default Download
