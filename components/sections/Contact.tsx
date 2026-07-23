"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Send, Loader2, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.")
      }

      toast({
        title: "Message Sent Successfully! 🚀",
        description: "Thank you for reaching out to Evolbiz. Our team will get back to you within 24 hours.",
      })
      setFormData({ name: "", email: "", phone: "", service: "Web Development", message: "" })
    } catch (err) {
      toast({
        title: "Couldn't send your message",
        description: err instanceof Error ? err.message : "Please try again in a moment.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#080d1a] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Callout Box */}
        <div className="glass-card p-10 md:p-14 mb-16 text-center max-w-3xl mx-auto relative overflow-hidden bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border-blue-500/30">
          <h2 className="font-space text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to scale your brand?
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Join 85+ businesses that trust Evolbiz to power their digital growth across the globe.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => {
                const formElem = document.getElementById("contact-form")
                if (formElem) formElem.scrollIntoView({ behavior: "smooth" })
              }}
              className="btn-glow"
            >
              Get a Free Quote →
            </button>
          </div>
        </div>

        {/* Contact Grid */}
        <div id="contact-form" className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gray-400">
                <span className="blue-dot" /> Contact Us
              </div>
              <h3 className="font-space text-3xl font-bold text-white">
                Let's discuss your <span className="text-blue-glow">next project.</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fill out the form or reach out directly to our team in UAE or India.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 glass p-4 rounded-xl border-white/10">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Email Us</div>
                  <a href="mailto:info@evolbiz.com" className="text-sm font-semibold text-white hover:text-blue-400">
                    info@evolbiz.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 glass p-4 rounded-xl border-white/10">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Call Us (UAE)</div>
                  <a href="tel:+971509787123" className="text-sm font-semibold text-white hover:text-blue-400">
                    +971 50 978 7123
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 glass p-4 rounded-xl border-white/10">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Active Presence</div>
                  <div className="text-sm font-semibold text-white">UAE · India </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card p-8 rounded-3xl border-white/10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#080d1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="Web Development">Custom Web Development</option>
                  <option value="E-Commerce">E-Commerce Solution</option>
                  <option value="Digital Marketing">Digital Marketing & SEO</option>
                  <option value="Branding">Branding & Graphic Design</option>
                  <option value="ERP / CRM">ERP & CRM System</option>
                  <option value="Cloud Hosting">Cloud Hosting & Business Email</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Your Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-glow w-full justify-center py-3.5 text-sm font-semibold"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-4 w-4" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
