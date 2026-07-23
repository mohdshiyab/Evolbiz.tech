"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(5,8,16,0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="relative flex-shrink-0">
          <Image
            src="/images/evolbiz-logo.png"
            alt="Evolbiz Logo"
            width={100}
            height={50}
            className="h-14 w-auto brightness-0 invert hover:opacity-80 transition-opacity duration-300"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {["home", "services", "about", "portfolio", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "rgba(148,163,184,1)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(148,163,184,1)")}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden lg:flex btn-glow text-sm"
          >
            Get a Quote
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >→</span>
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 transition-colors"
            style={{ color: "rgba(148,163,184,1)" }}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden px-6 pb-5 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <nav className="flex flex-col gap-4">
            {["home", "services", "about", "portfolio", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left text-sm font-medium"
                style={{ color: "rgba(148,163,184,1)" }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-glow w-fit text-sm"
            >
              Get a Quote →
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
