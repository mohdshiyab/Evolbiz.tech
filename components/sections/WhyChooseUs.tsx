"use client"

const advantages = [
  {
    icon: "🌏",
    title: "Offices in UAE & India",
    desc: "Dual international headquarters delivering top quality, affordable digital marketing and software engineering solutions globally.",
  },
  {
    icon: "💻",
    title: "Full-Stack Developers",
    desc: "From database design and web app development to custom API architecture, our diverse team has the expertise for any application.",
  },
  {
    icon: "💡",
    title: "Creative Innovation",
    desc: "Fueled by the prospect of bringing creative ideas to life, we formulate strategies that help brands stand out in digital advertising.",
  },
  {
    icon: "🚀",
    title: "360° Business Growth",
    desc: "One-of-a-kind 360° solutions combining marketing, software, e-commerce, and cloud infrastructure under one roof.",
  },
]

export default function WhyChooseUs() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="why-choose-us" className="py-24 bg-[#050810] relative grid-bg overflow-hidden">
      {/* Decorative Crosses */}
      <span className="absolute top-12 left-10 text-white/15 text-2xl font-light pointer-events-none">+</span>
      <span className="absolute top-12 right-10 text-white/15 text-2xl font-light pointer-events-none">+</span>
      <span className="absolute bottom-12 left-10 text-white/15 text-2xl font-light pointer-events-none">+</span>
      <span className="absolute bottom-12 right-10 text-white/15 text-2xl font-light pointer-events-none">+</span>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        {/* Badges */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          <div className="glass px-4 py-1.5 rounded-full text-xs font-medium text-gray-300 flex items-center gap-2">
            <span className="blue-dot" /> Offices in UAE & India
          </div>
          <div className="glass px-4 py-1.5 rounded-full text-xs font-medium text-gray-300 flex items-center gap-2">
            <span className="green-dot" /> 360° Digital Solutions
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-space text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
          Innovative digital solutions
          <br />
          made <span className="text-blue-glow">affordable & simple.</span>
        </h2>

        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-16 leading-relaxed">
          Evolbiz provides top quality, one of a kind 360° business solutions to an ever-growing roster of clients and industries globally.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
          {advantages.map((adv, idx) => (
            <div key={idx} className="glass-card p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-xl flex-shrink-0">
                {adv.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-space text-lg font-bold text-white">{adv.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button onClick={() => scrollToSection("contact")} className="btn-glow">
            Get Started
            <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm bg-white/15">→</span>
          </button>
          <button onClick={() => scrollToSection("portfolio")} className="btn-outline-glow">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  )
}
