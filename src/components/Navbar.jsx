import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"

const links = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Contact", path: "/contact" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location])

  const light = scrolled

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/96 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/raleey_art_black.png"
              alt="RaleeyGo logo"
              className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {links.map(link => (
              <Link key={link.path} to={link.path}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-brand-yellow"
                    : light
                    ? "text-gray-600 hover:text-brand-darkGray hover:bg-gray-50"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link to="/download" className="btn-primary text-sm py-2.5 px-5">
              Get the App
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              light ? "text-brand-darkGray hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}>
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {links.map(link => (
                <Link key={link.path} to={link.path}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-brand-blue/5 text-brand-blue font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-brand-darkGray"
                  }`}>
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 pb-1">
                <Link to="/download" className="btn-primary w-full text-sm py-3">Get the App</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
