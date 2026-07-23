"use client"

const testimonials = [
  {
    stars: "★ ★ ★ ★ ★",
    text: "Evolbiz crafted a stunning website that aligned perfectly with our brand. The team was creative, professional, and incredibly responsive throughout the project.",
    initials: "RM",
    name: "Rajeev Menon",
    role: "Founder, Glitz Interiors · Dubai, UAE",
    avatarBg: "linear-gradient(135deg, #1a6cf5, #4d9fff)",
  },
  {
    stars: "★ ★ ★ ★ ★",
    text: "Their branding and marketing solutions gave our business a completely new identity. Our digital presence grew exponentially within the first quarter.",
    initials: "SA",
    name: "Sana Aroor",
    role: "Marketing Director, FreshKart · India",
    avatarBg: "linear-gradient(135deg, #7c3aed, #a78bfa)",
  },
  {
    stars: "★ ★ ★ ★ ★",
    text: "The Evolbiz team exceeded every expectation. Their ERP system brought real operational efficiency and transformed how our entire business runs daily.",
    initials: "HR",
    name: "Harish Rao",
    role: "CEO, Tradewell Logistics · Abu Dhabi",
    avatarBg: "linear-gradient(135deg, #059669, #34d399)",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#050810] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gray-400">
            <span className="blue-dot" /> Client Stories
          </div>
          <h2 className="font-space text-3xl md:text-5xl font-bold text-white tracking-tight">
            Brands that trust <span className="text-blue-glow">Evolbiz.</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Real results from real clients across UAE, India, UK & USA.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-blue-400 text-sm tracking-widest">{t.stars}</div>
                <p className="text-sm text-gray-300 italic leading-relaxed font-light">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                  style={{ background: t.avatarBg }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
