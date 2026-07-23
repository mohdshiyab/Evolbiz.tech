"use client"

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We start with a free consultation to understand your business goals, target audience, and the problem you're trying to solve.",
  },
  {
    num: "02",
    title: "Strategy & Proposal",
    desc: "Our team maps out the right mix of services — web, marketing, or software — and sends over a clear scope, timeline, and quote.",
  },
  {
    num: "03",
    title: "Design & Development",
    desc: "Designers and Full-Stack Developers build your solution in iterative sprints, with regular check-ins so you always know where things stand.",
  },
  {
    num: "04",
    title: "Launch & Grow",
    desc: "After testing and sign-off, we launch your project and stay on for ongoing support, hosting, and growth marketing as your business scales.",
  },
]

export default function Process() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="process" className="py-24 bg-[#050810] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gray-400">
            <span className="blue-dot" /> How We Work
          </div>
          <h2 className="font-space text-3xl md:text-5xl font-bold text-white tracking-tight">
            From First Call <span className="text-blue-glow">To Launch.</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            A simple, transparent process so you always know what happens next and who to talk to.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.num} className="glass-card p-6 relative flex flex-col gap-3">
              <div className="font-space text-3xl font-bold text-blue-500/40">{step.num}</div>
              <h3 className="font-space text-lg font-bold text-white">{step.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              {idx < steps.length - 1 && (
                <span className="hidden md:flex absolute top-8 -right-4 text-blue-500/40 text-xl">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button onClick={() => scrollToSection("contact")} className="btn-glow">
            Start With a Free Consultation
            <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm bg-white/15">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
