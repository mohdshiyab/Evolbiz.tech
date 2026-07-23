"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { matchIntent, fallbackReply, defaultQuickReplies, COMPANY_NAME } from "@/lib/chatbot-data"

type Message = {
  id: number
  sender: "bot" | "user"
  text: string
  quickReplies?: string[]
}

let idCounter = 1

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: idCounter++,
      sender: "bot",
      text: `Hi! 👋 I'm the ${COMPANY_NAME} assistant. Ask me about our services, how to get started, or how to reach the team.`,
      quickReplies: defaultQuickReplies,
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping, isOpen])

  const sendMessage = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return

    const userMsg: Message = { id: idCounter++, sender: "user", text: trimmed }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const intent = matchIntent(trimmed)
      const botMsg: Message = intent
        ? { id: idCounter++, sender: "bot", text: intent.reply, quickReplies: intent.quickReplies }
        : { id: idCounter++, sender: "bot", text: fallbackReply, quickReplies: defaultQuickReplies }

      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 550)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* Floating launcher button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Chat with Evolbiz"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        style={{
          background: "linear-gradient(140deg, #1a6cf5 0%, #2979ff 100%)",
          boxShadow: "0 8px 30px rgba(26,108,245,0.5)",
        }}
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm rounded-2xl overflow-hidden flex flex-col"
          style={{
            height: "min(70vh, 560px)",
            background: "rgba(8,13,26,0.97)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{
              background: "linear-gradient(140deg, rgba(26,108,245,0.35) 0%, rgba(41,121,255,0.15) 100%)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              💎
            </div>
            <div>
              <div className="font-space text-sm font-bold text-white">Evolbiz Assistant</div>
              <div className="text-xs text-gray-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Online · Ask me anything about Evolbiz
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col gap-2 ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                <div
                  className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line"
                  style={
                    msg.sender === "user"
                      ? { background: "linear-gradient(140deg, #1a6cf5, #2979ff)", color: "white" }
                      : { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", color: "#e2e8f0" }
                  }
                >
                  {msg.text}
                </div>

                {msg.sender === "bot" && msg.quickReplies && (
                  <div className="flex flex-wrap gap-2 max-w-[95%]">
                    {msg.quickReplies.map((qr) => (
                      <button
                        key={qr}
                        onClick={() => sendMessage(qr)}
                        className="text-xs px-3 py-1.5 rounded-full transition-colors"
                        style={{
                          background: "rgba(41,121,255,0.12)",
                          border: "1px solid rgba(77,159,255,0.3)",
                          color: "#8ec1ff",
                        }}
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start">
                <div
                  className="rounded-2xl px-4 py-3 flex gap-1"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse [animation-delay:0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse [animation-delay:0.3s]" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-3 flex-shrink-0" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our services..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105"
              style={{ background: "linear-gradient(140deg, #1a6cf5, #2979ff)" }}
            >
              <Send size={16} className="text-white" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
