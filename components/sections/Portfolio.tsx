"use client"

const projects = [
  {
    title: "Glitz Interiors Portal",
    category: "Web & Branding",
    metrics: "+140% Conversions",
    desc: "Luxury interior design showcase and client booking portal in Dubai, UAE.",
  },
  {
    title: "FreshKart E-Commerce",
    category: "Full Stack Store",
    metrics: "3.2x Revenue Growth",
    desc: "Fast grocery e-commerce app with instant payment gateway integrations.",
  },
  {
    title: "Tradewell Logistics ERP",
    category: "Enterprise System",
    metrics: "99.9% Operational Speed",
    desc: "Automated warehouse & shipment tracking ERP for cross-border transport.",
  },
  {
    title: "Quantum Financials",
    category: "Fintech Marketing",
    metrics: "8.4x Campaign ROAS",
    desc: "Targeted digital marketing and lead generation campaign across UAE & UK.",
  },
  {
    title: "Apex Builders CRM",
    category: "Custom Software",
    metrics: "60% Faster Lead Response",
    desc: "Bespoke CRM and project-tracking dashboard for a construction & real estate developer.",
  },
  {
    title: "Vanguard Media Rebrand",
    category: "Branding & Identity",
    metrics: "2.1x Social Engagement",
    desc: "Full brand identity refresh, content strategy, and social media growth campaign.",
  },
]

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="portfolio" className="py-24 bg-[#080d1a] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gray-400">
              <span className="blue-dot" /> Selected Projects
            </div>
            <h2 className="font-space text-3xl md:text-5xl font-bold text-white tracking-tight">
              Featured <span className="text-blue-glow">Work.</span>
            </h2>
          </div>
          <button onClick={() => scrollToSection("contact")} className="btn-outline-glow text-xs">
            Start Your Project →
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {proj.category}
                  </span>
                  <span className="text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                    {proj.metrics}
                  </span>
                </div>
                <h3 className="font-space text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{proj.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 group-hover:text-white transition-colors">
                <span>Explore Case Study</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
