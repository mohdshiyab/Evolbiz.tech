"use client"

const servicesList = [
  {
    num: "01",
    name: "360° Digital Marketing",
    desc: "Creative digital marketing strategies, SEO, PPC paid ads, social media management, and campaign optimization to scale your client roster.",
  },
  {
    num: "02",
    name: "Full-Stack Web & Software Dev",
    desc: "From database design and web app development to system integrations, custom API architecture, and enterprise software application development.",
  },
  {
    num: "03",
    name: "E-Commerce Solutions",
    desc: "Scalable e-commerce platforms with seamless payment gateway integrations, high conversion rates, and robust inventory management.",
  },
  {
    num: "04",
    name: "Branding & Visual Design",
    desc: "Corporate identity, logo design, marketing collateral, UI/UX design, and creative direction built to bring your brand ideas to life.",
  },
  {
    num: "05",
    name: "ERP & CRM Systems",
    desc: "Custom business automation software, CRM systems, resource planning, and operational workflow solutions for expanding enterprises.",
  },
  {
    num: "06",
    name: "Cloud Consulting & Hosting",
    desc: "Reliable cloud infrastructure, server maintenance, domain consulting, and secure corporate email solutions for seamless business continuity.",
  },
]

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" className="py-24 bg-[#080d1a] relative overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gray-400">
            <span className="blue-dot" /> Our Core Services
          </div>
          <h2 className="font-space text-3xl md:text-5xl font-bold text-white tracking-tight">
            Innovative 360° Business
            <br />
            <span className="text-blue-glow">Solutions.</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            From database design to digital advertising, we formulate creative strategies for ever-growing industries.
          </p>
        </div>

        {/* Services List Table */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {servicesList.map((svc) => (
            <div
              key={svc.num}
              onClick={() => scrollToSection("contact")}
              className="svc-row grid grid-cols-1 md:grid-cols-[60px_1fr_1.5fr_auto] items-center gap-4 md:gap-8 py-6 cursor-pointer group px-4 rounded-xl transition-colors"
            >
              <div className="text-xs font-semibold text-gray-500 font-mono">{svc.num}</div>
              <div className="font-space text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                {svc.name}
              </div>
              <div className="text-sm text-gray-400 leading-relaxed">{svc.desc}</div>
              <div className="svc-arrow-btn w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-blue-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
