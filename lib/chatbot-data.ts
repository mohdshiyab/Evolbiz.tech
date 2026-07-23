// Knowledge base for the Evolbiz assistant.
// This bot only answers questions about Evolbiz — its services, process, portfolio and contact info.
// It works entirely client-side with keyword matching, no external AI API required.

export type ChatIntent = {
  id: string
  keywords: string[]
  reply: string
  quickReplies?: string[]
}

export const COMPANY_NAME = "Evolbiz"

export const intents: ChatIntent[] = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "good morning", "good evening", "good afternoon"],
    reply:
      "Hey! 👋 I'm the Evolbiz assistant. I can tell you about our services, pricing process, portfolio, or how to get started on a project. What would you like to know?",
    quickReplies: ["What services do you offer?", "How do I get started?", "Where are you located?"],
  },
  {
    id: "services",
    keywords: [
      "service", "services", "what do you do", "what do you offer", "offer", "help with",
      "do you build", "web design", "web development",
    ],
    reply:
      "Evolbiz offers 6 core services:\n\n1️⃣ 360° Digital Marketing (SEO, PPC, social media)\n2️⃣ Full-Stack Web & Software Development\n3️⃣ E-Commerce Solutions\n4️⃣ Branding & Visual Design\n5️⃣ ERP & CRM Systems\n6️⃣ Cloud Consulting & Hosting\n\nWant details on any of these?",
    quickReplies: ["Website development", "Digital marketing", "How do I get started?"],
  },
  {
    id: "website",
    keywords: [
      "website", "need a website", "build a website", "new website", "web app",
      "web application", "landing page",
    ],
    reply:
      "Great — Evolbiz builds everything from business websites to custom web apps and enterprise software, using a full-stack team (database design, APIs, integrations, and UI/UX).\n\nTo move forward: share a bit about your project via our contact form, or email info@evolbiz.com / call +971 50 978 7123. We'll set up a free discovery call, then send a proposal with scope, timeline, and pricing. A standard business website typically takes 2-4 weeks.",
    quickReplies: ["How do I get started?", "How long does it take?", "Contact info"],
  },
  {
    id: "marketing",
    keywords: ["marketing", "seo", "ppc", "ads", "social media", "advertising", "digital marketing"],
    reply:
      "Our 360° Digital Marketing service covers SEO, PPC paid ads, social media management, and campaign optimization — designed to grow your client roster and brand visibility. It can run alongside a new website or completely independently of one.",
    quickReplies: ["How do I get started?", "Contact info"],
  },
  {
    id: "ecommerce",
    keywords: ["ecommerce", "e-commerce", "online store", "shop", "payment gateway"],
    reply:
      "We build scalable e-commerce platforms with seamless payment gateway integrations, high-conversion product pages, and robust inventory management — similar to our FreshKart e-commerce project.",
    quickReplies: ["How do I get started?", "Portfolio"],
  },
  {
    id: "erp-crm",
    keywords: ["erp", "crm", "automation", "workflow", "business software"],
    reply:
      "We build custom ERP & CRM systems, business automation software, and operational workflow tools for growing enterprises — like the CRM we built for Apex Builders and the ERP system for Tradewell Logistics.",
    quickReplies: ["How do I get started?", "Portfolio"],
  },
  {
    id: "branding",
    keywords: ["brand", "branding", "logo", "design", "ui/ux", "graphic design", "identity"],
    reply:
      "Our Branding & Visual Design service covers corporate identity, logo design, marketing collateral, and UI/UX design — helping brands like Vanguard Media stand out visually across every touchpoint.",
    quickReplies: ["How do I get started?", "Portfolio"],
  },
  {
    id: "cloud",
    keywords: ["cloud", "hosting", "server", "domain", "email hosting"],
    reply:
      "We provide cloud infrastructure consulting, server maintenance, domain setup, and secure corporate email solutions so your website and software stay fast, secure, and always online.",
    quickReplies: ["How do I get started?", "Contact info"],
  },
  {
    id: "process",
    keywords: [
      "process", "how does it work", "how it works", "steps", "workflow", "get started",
      "start a project", "how do i start", "how do i get started", "onboarding",
    ],
    reply:
      "Getting started is simple:\n\n1️⃣ Free Discovery Call — tell us your goals\n2️⃣ Strategy & Proposal — we scope, timeline, and quote it\n3️⃣ Design & Development — built in iterative sprints with regular check-ins\n4️⃣ Launch & Grow — we launch, then support hosting & marketing after\n\nJust use the contact form on this page, or reach out directly!",
    quickReplies: ["Contact info", "How long does it take?"],
  },
  {
    id: "timeline",
    keywords: ["how long", "timeline", "duration", "turnaround", "time frame", "weeks", "months"],
    reply:
      "Timelines depend on scope: a standard business website usually takes 2-4 weeks, while custom software, ERP/CRM systems, or e-commerce platforms typically take 6-12 weeks. We'll confirm the exact timeline in your proposal.",
    quickReplies: ["How do I get started?", "Contact info"],
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "how much", "budget", "quote", "affordable"],
    reply:
      "Evolbiz is built around top-quality, affordable 360° solutions — pricing depends on your project's scope, so we don't quote a fixed number upfront. Share your requirements via the contact form and our team will send a free, no-obligation quote.",
    quickReplies: ["How do I get started?", "Contact info"],
  },
  {
    id: "contact",
    keywords: [
      "contact", "email", "phone", "call", "reach", "talk to someone", "whom to contact",
      "who do i contact", "speak to", "human", "person",
    ],
    reply:
      "You can reach the Evolbiz team directly:\n\n📧 info@evolbiz.com\n📞 +971 50 978 7123 (UAE)\n\nOr just fill out the contact form on this page — our team replies within 24 hours.",
    quickReplies: ["Where are you located?", "How do I get started?"],
  },
  {
    id: "location",
    keywords: ["located", "location", "where are you", "office", "address", "based", "uae", "india", "country"],
    reply:
      "Evolbiz has offices in the UAE and India, and works with clients globally, including in the UK and USA.",
    quickReplies: ["Contact info", "What services do you offer?"],
  },
  {
    id: "portfolio",
    keywords: ["portfolio", "past work", "projects", "case study", "case studies", "examples", "clients"],
    reply:
      "Some of our recent work includes:\n\n• Glitz Interiors Portal — luxury interiors booking site (+140% conversions)\n• FreshKart E-Commerce — grocery app (3.2x revenue growth)\n• Tradewell Logistics ERP — warehouse & shipment tracking\n• Quantum Financials — fintech marketing campaign (8.4x ROAS)\n• Apex Builders CRM — custom lead-tracking CRM\n• Vanguard Media Rebrand — brand identity refresh\n\nScroll to the Portfolio section above to see more!",
    quickReplies: ["How do I get started?", "Contact info"],
  },
  {
    id: "about",
    keywords: ["about", "who are you", "founded", "history", "company", "evolbiz"],
    reply:
      "Evolbiz was founded in 2021 to provide top-quality, affordable, one-of-a-kind 360° digital marketing and software business solutions, with offices in the UAE and India, serving a growing roster of clients globally.",
    quickReplies: ["What services do you offer?", "Contact info"],
  },
  {
    id: "thanks",
    keywords: ["thank", "thanks", "thank you", "appreciate", "cool", "great", "awesome", "nice"],
    reply: "You're welcome! Anything else you'd like to know about Evolbiz's services or how to get started?",
    quickReplies: ["Contact info", "How do I get started?"],
  },
]

export const fallbackReply =
  "I'm the Evolbiz assistant, so I can only help with questions about our services, process, portfolio, or how to get in touch. Could you rephrase, or try one of the topics below?"

export const defaultQuickReplies = [
  "What services do you offer?",
  "How do I get started?",
  "Contact info",
]

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ")
}

export function matchIntent(userInput: string): ChatIntent | null {
  const text = normalize(userInput)
  let best: { intent: ChatIntent; score: number } | null = null

  for (const intent of intents) {
    let score = 0
    for (const kw of intent.keywords) {
      if (text.includes(kw)) {
        score += kw.split(" ").length // reward longer/more specific phrase matches
      }
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { intent, score }
    }
  }

  return best ? best.intent : null
}
