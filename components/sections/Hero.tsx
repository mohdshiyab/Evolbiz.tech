"use client"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 70% 40%, rgba(26,108,245,0.15) 0%, transparent 65%),
          radial-gradient(ellipse 50% 50% at 20% 80%, rgba(41,121,255,0.08) 0%, transparent 60%),
          var(--eb-bg-0)
        `,
        paddingTop: "100px",
        paddingBottom: "60px",
      }}
    >
      {/* Ghost background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-space font-bold whitespace-nowrap pointer-events-none select-none z-0"
        style={{ fontSize: "clamp(8rem,18vw,18rem)", color: "rgba(255,255,255,0.018)", letterSpacing: "-4px" }}
      >
        EVOLBIZ
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2" style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(148,163,184,1)" }}>
              <span className="blue-dot" />
              360° Digital Marketing Company · UAE & India
            </div>

            {/* H1 */}
            <h1
              className="font-space font-bold leading-tight"
              style={{ fontSize: "clamp(2.6rem,5vw,4.8rem)", letterSpacing: "-2px" }}
            >
              Grow Your Business<br />
              With <span className="text-blue-glow">Evolbiz.</span>
            </h1>

            <p style={{ fontSize: "0.95rem", color: "rgba(148,163,184,1)", lineHeight: 1.75, maxWidth: "440px" }}>
              We dive into the world of digitization, formulate creative strategies, and bring you the gems of innovative 360° business solutions.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              <button onClick={() => scrollToSection("contact")} className="btn-glow">
                Get Started
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: "rgba(255,255,255,0.15)" }}>→</span>
              </button>
              <button onClick={() => scrollToSection("services")} className="btn-outline-glow">
                Explore Services
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 glass w-fit" style={{ padding: "0.45rem 0.9rem", borderRadius: "100px", fontSize: "0.75rem", fontWeight: 500 }}>
                <span className="blue-dot" />
                Top Quality & Affordable Business Solutions
              </div>
              <div className="flex items-center gap-2 glass w-fit" style={{ padding: "0.45rem 0.9rem", borderRadius: "100px", fontSize: "0.75rem", fontWeight: 500 }}>
                <span className="green-dot" />
                Founded 2021 · Offices in UAE & India
              </div>
            </div>
          </div>

          {/* RIGHT: 3D floating panels */}
          <div className="relative flex items-center justify-center" style={{ minHeight: "420px" }}>
            {/* Panel back 2 */}
            <div
              className="absolute rounded-3xl"
              style={{
                width: "160px", height: "200px",
                background: "rgba(41,121,255,0.10)",
                border: "1px solid rgba(77,159,255,0.10)",
                top: "60px", left: "calc(50% - 140px)",
                transform: "rotate(-14deg)",
                animation: "panelFloatBack 5s ease-in-out infinite 0.8s",
              }}
            />
            {/* Panel back 1 */}
            <div
              className="absolute rounded-3xl"
              style={{
                width: "180px", height: "220px",
                background: "rgba(26,108,245,0.18)",
                border: "1px solid rgba(77,159,255,0.18)",
                top: "40px", left: "calc(50% - 120px)",
                animation: "panelFloatBack 5s ease-in-out infinite 0.4s",
                transform: "rotate(-8deg)",
              }}
            />
            {/* Panel main */}
            <div
              className="absolute rounded-3xl flex flex-col items-center justify-center gap-2 z-10"
              style={{
                width: "200px", height: "240px",
                background: "linear-gradient(140deg, rgba(26,108,245,0.6) 0%, rgba(41,121,255,0.3) 50%, rgba(77,159,255,0.2) 100%)",
                border: "1px solid rgba(77,159,255,0.4)",
                boxShadow: "0 0 60px rgba(26,108,245,0.35), 0 20px 60px rgba(0,0,0,0.5)",
                top: "20px", left: "calc(50% - 100px)",
                animation: "panelFloat 5s ease-in-out infinite",
              }}
            >
              <div style={{ fontSize: "2.8rem" }}>💎</div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "rgba(255,255,255,0.85)" }}>Evolbiz</div>
              <div className="font-space text-center px-2" style={{ fontSize: "1.1rem", fontWeight: 700 }}>360° Digital Hub</div>
            </div>

            {/* Stat cards */}
            <div
              className="absolute glass rounded-2xl"
              style={{ padding: "0.8rem 1.1rem", top: 0, right: "5%", animation: "floatY 4s ease-in-out infinite 0.3s" }}
            >
              <div style={{ fontSize: "0.65rem", color: "rgba(148,163,184,1)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>Services</div>
              <div className="font-space" style={{ fontSize: "1.2rem", fontWeight: 700 }}>360° Solutions</div>
              <div style={{ fontSize: "0.67rem", color: "rgba(148,163,184,1)" }}>Marketing & Full-Stack</div>
            </div>
            <div
              className="absolute glass rounded-2xl"
              style={{ padding: "0.8rem 1.1rem", bottom: "10%", right: "5%", animation: "floatY 4s ease-in-out infinite 1s" }}
            >
              <div style={{ fontSize: "0.65rem", color: "rgba(148,163,184,1)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>Offices</div>
              <div className="font-space" style={{ fontSize: "1.2rem", fontWeight: 700 }}>UAE & India</div>
              <div style={{ fontSize: "0.67rem", color: "rgba(148,163,184,1)" }}>Global Client Roster</div>
            </div>
            <div
              className="absolute glass rounded-2xl"
              style={{ padding: "0.8rem 1.1rem", bottom: "15%", left: "2%", animation: "floatY 4s ease-in-out infinite 0.6s" }}
            >
              <div style={{ fontSize: "0.65rem", color: "rgba(148,163,184,1)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>Founded</div>
              <div className="font-space" style={{ fontSize: "1.2rem", fontWeight: 700 }}>2021</div>
              <div style={{ fontSize: "0.67rem", color: "rgba(148,163,184,1)" }}>Creative & Innovative</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
