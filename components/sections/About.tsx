"use client"

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="about"
      className="relative min-h-[80vh] flex items-center py-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 80% at 35% 50%, rgba(26,108,245,0.22) 0%, transparent 65%),
          radial-gradient(ellipse 40% 40% at 70% 30%, rgba(41,121,255,0.1) 0%, transparent 55%),
          var(--eb-bg-2)
        `,
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Performance Metric Card */}
          <div className="relative flex justify-center lg:justify-start">
            <div
              className="w-80 glass rounded-3xl p-6 shadow-2xl relative"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.1)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="blue-dot" />
                <span className="text-xs font-medium text-gray-400">Founded 2021 · UAE & India</span>
              </div>

              {/* Chart Graphic */}
              <div className="h-20 relative mb-4 overflow-hidden">
                <svg viewBox="0 0 160 56" fill="none" className="w-full h-full">
                  <path
                    d="M0 50 L20 42 L40 45 L60 30 L80 28 L100 18 L120 10 L140 6 L160 2"
                    stroke="#2979ff"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 50 L20 42 L40 45 L60 30 L80 28 L100 18 L120 10 L140 6 L160 2 L160 56 L0 56 Z"
                    fill="url(#blueGrad)"
                    opacity="0.25"
                  />
                  <defs>
                    <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2979ff" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="font-space text-2xl font-bold text-white mb-1">360° Digital Solutions</div>
              <div className="text-xs text-gray-400">Bringing creative ideas to life globally</div>
            </div>
          </div>

          {/* RIGHT: Official Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gray-400">
              <span className="blue-dot" />
              About Evolbiz
            </div>

            <h2 className="font-space text-3xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              Bringing Creative Ideas <span className="text-blue-glow">To Life.</span>
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Evolbiz was founded in 2021 with an objective to provide top quality, affordable, one of a kind, 360° digital marketing business solutions to an ever-growing roster of clients and industries. The company has offices in UAE and India.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              From database design and web app development to system integrations and cloud consulting, our diverse team of Full-Stack Developers has the expertise to build your next software application. At Evolbiz, we work with some of the best brands in the digital advertising business globally.
            </p>

            <button onClick={() => scrollToSection("portfolio")} className="btn-glow">
              Explore Our Work
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm bg-white/15">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
