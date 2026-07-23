"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "What services does Evolbiz offer?",
    a: "We offer 360° digital marketing (SEO, PPC, social media), full-stack web & software development, e-commerce solutions, branding & visual design, ERP/CRM systems, and cloud consulting & hosting.",
  },
  {
    q: "How do I get started on a project?",
    a: "Fill out the contact form below or email info@evolbiz.com / call us at +971 50 978 7123. We'll set up a free discovery call to understand your goals, then send a proposal with scope, timeline, and pricing.",
  },
  {
    q: "Where is Evolbiz based?",
    a: "Evolbiz has offices in the UAE and India, and we work with clients globally including the UK and USA.",
  },
  {
    q: "How long does a typical website or software project take?",
    a: "Timelines depend on scope. A standard business website usually takes 2-4 weeks, while custom software, ERP/CRM systems, or e-commerce platforms can take 6-12 weeks. We confirm exact timelines during the proposal stage.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We provide ongoing hosting, maintenance, and growth marketing support after your project goes live, so your website or software keeps performing as your business scales.",
  },
  {
    q: "Can Evolbiz help with just marketing, without a new website?",
    a: "Absolutely. Our 360° digital marketing services (SEO, PPC, social media, branding) can run independently of any development work, tailored to your existing platforms.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#080d1a] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gray-400">
            <span className="blue-dot" /> Got Questions?
          </div>
          <h2 className="font-space text-3xl md:text-5xl font-bold text-white tracking-tight">
            Frequently Asked <span className="text-blue-glow">Questions.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-white/10">
              <AccordionTrigger className="text-left font-space text-white text-sm md:text-base hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
