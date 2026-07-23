"use client"

import { useEffect, useRef } from "react"
import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import LogoCloud from "@/components/sections/LogoCloud"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import Process from "@/components/sections/Process"
import Portfolio from "@/components/sections/Portfolio"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"
import ChatBot from "@/components/ChatBot"

export default function FuturisticEvolbizWebsite() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", `${e.clientX}px`)
        containerRef.current.style.setProperty("--mouse-y", `${e.clientY}px`)
      }
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden relative" style={{ background: "var(--eb-bg-0)" }}>
      {/* Subtle mouse-follow glow */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-all duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(26,108,245,0.07) 0%, transparent 70%)",
          left: "calc(var(--mouse-x, 50vw) - 192px)",
          top: "calc(var(--mouse-y, 50vh) - 192px)",
        }}
      />

      <div className="relative z-10">
        <Header />
        <Hero />
        <LogoCloud />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>

      <ChatBot />
    </div>
  )
}
