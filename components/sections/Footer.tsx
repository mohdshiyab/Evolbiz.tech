"use client"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-[#030508] border-t border-white/10 pt-16 pb-8 text-gray-400">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="font-space text-2xl font-bold text-white">
              evol<span className="text-blue-400">biz</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
              Evolbiz was founded in 2021 to provide top quality, affordable, one of a kind 360° digital marketing and software business solutions. Offices in UAE & India.
            </p>
          </div>

          {/* Column 1 */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-space">Services</div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">
                  Web Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">
                  E-Commerce Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">
                  Digital Marketing & SEO
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">
                  Branding & Graphic Design
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors">
                  ERP & CRM Systems
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-space">Company</div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("portfolio")} className="hover:text-blue-400 transition-colors">
                  Our Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("why-choose-us")} className="hover:text-blue-400 transition-colors">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("testimonials")} className="hover:text-blue-400 transition-colors">
                  Client Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-space">Contact</div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="mailto:info@evolbiz.com" className="hover:text-blue-400 transition-colors">
                  info@evolbiz.com
                </a>
              </li>
              <li>
                <a href="tel:+971509787123" className="hover:text-blue-400 transition-colors">
                  +971 50 978 7123
                </a>
              </li>
              <li>
                <span className="text-gray-500">UAE · India · UK · USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2025 Evolbiz. All rights reserved. Transcending digital boundaries since 2021.</p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/evolbizuae/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs hover:border-blue-400 hover:text-blue-400 transition-all"
            >
              f
            </a>
            <a
              href="https://www.instagram.com/evolbiz.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs hover:border-blue-400 hover:text-blue-400 transition-all"
            >
              in
            </a>
            <a
              href="https://www.linkedin.com/in/evolbiz-digital-business-development-053300220/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs hover:border-blue-400 hover:text-blue-400 transition-all"
            >
              li
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
