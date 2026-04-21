import { useState } from "react"
import { motion } from "framer-motion"
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from "react-icons/hi"
import { FaTwitter, FaInstagram } from "react-icons/fa"

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    const subject = encodeURIComponent(`[RaleeyGo] ${form.subject}`)
    window.location.href = `mailto:hello@raleeygo.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const info = [
    { icon: HiMail, label: "Email", value: "hello@raleeygo.com", href: "mailto:hello@raleeygo.com" },
    { icon: HiPhone, label: "Phone", value: "+44 74 6302 5537", href: "tel:+447463025537" },
    { icon: HiLocationMarker, label: "Address", value: "London, United Kingdom", href: null },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="page-hero relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-brand-yellow/8 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
            className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              We&#39;d love to<br /><span className="text-brand-yellow">hear from you</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              Questions, feedback, partnership enquiries — our team responds within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Info sidebar */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-brand-darkGray mb-3">Contact us</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Reach out through any channel — or fill in the form and we&#39;ll get back to you shortly.
                </p>
              </div>

              {info.map(({ icon: Icon, label, value, href }) => (
                <motion.div key={label}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }} viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-brand-darkGray font-medium text-sm hover:text-brand-blue transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-brand-darkGray font-medium text-sm">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <div className="pt-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Follow us</p>
                <div className="flex gap-3">
                  {[
                    { icon: FaTwitter, href: "https://twitter.com/raleeygo_mvp", label: "Twitter" },
                    { icon: FaInstagram, href: "#", label: "Instagram" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} aria-label={label}
                      className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-brand-yellow hover:text-brand-darkGray flex items-center justify-center text-gray-400 transition-all duration-200">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  className="card flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-5">
                    <HiArrowRight className="w-8 h-8 text-emerald-600 rotate-[-45deg]" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-darkGray mb-3">Message sent!</h3>
                  <p className="text-gray-500 max-w-sm">Thanks for reaching out. We&#39;ll respond within one business day.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="card space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      { id: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                      { id: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
                    ].map(field => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-sm font-semibold text-brand-darkGray mb-2">
                          {field.label}
                        </label>
                        <input
                          id={field.id} name={field.id} type={field.type}
                          placeholder={field.placeholder} value={form[field.id]}
                          onChange={handleChange} required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-brand-darkGray bg-gray-50 focus:bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-brand-darkGray mb-2">Subject</label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-brand-darkGray bg-gray-50 focus:bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all">
                      <option value="">Select a topic</option>
                      <option value="support">App Support</option>
                      <option value="driver">Driver Enquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-darkGray mb-2">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Tell us how we can help..."
                      value={form.message} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-brand-darkGray bg-gray-50 focus:bg-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message <HiArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
