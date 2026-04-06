import { Link } from "react-router-dom"
import { FaApple, FaGooglePlay, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import { HiLightningBolt } from "react-icons/hi"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0d1b3e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5 group">
              <img
                src="/raleey_art_black.png"
                alt="RaleeyGo logo"
                className="h-9 w-auto object-contain group-hover:scale-105 transition-transform brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              London&#39;s smart ride-sharing platform built around TfL bus routes.
              Faster commutes, verified drivers, fair prices.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaTwitter, href: "https://twitter.com/raleeygo_mvp", label: "Twitter" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaLinkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-yellow hover:text-brand-darkGray flex items-center justify-center text-white/50 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Features", path: "/features" },
                { label: "How It Works", path: "/how-it-works" },
                { label: "Download", path: "/download" },
                { label: "Contact", path: "/contact" },
              ].map(item => (
                <li key={item.path}>
                  <Link to={item.path}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-5">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", path: "/privacy" },
                { label: "Terms of Service", path: "/terms" },
              ].map(item => (
                <li key={item.path}>
                  <Link to={item.path}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-5">Get the App</h4>
            <div className="space-y-3">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-all duration-200">
                <FaApple className="w-5 h-5 text-white/70 flex-shrink-0" />
                <div>
                  <div className="text-xs text-white/40">Download on</div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 opacity-60 cursor-not-allowed">
                <FaGooglePlay className="w-4 h-4 text-green-400 flex-shrink-0" />
                <div>
                  <div className="text-xs text-white/40">Get it on</div>
                  <div className="text-sm font-semibold text-white">Google Play</div>
                </div>
                <span className="ml-auto text-[10px] font-bold bg-brand-yellow/20 text-brand-yellow px-2 py-0.5 rounded-full">Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-white/30 text-xs">
            &copy; {year} RaleeyGo Ltd. All rights reserved. Built for London.
          </p>
          <div className="flex items-center gap-1.5 text-white/25 text-xs">
            <HiLightningBolt className="w-3.5 h-3.5 text-brand-yellow/50" />
            Designed for London commuters
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
