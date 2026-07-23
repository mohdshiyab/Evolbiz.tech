"use client"

const clients = ["Glitz Interiors", "FreshKart", "Tradewell", "Apex Builders", "Quantum Labs", "Vanguard Media"]

export default function LogoCloud() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "1.4rem 1.5rem",
      }}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        <span
          style={{
            fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase",
            letterSpacing: "0.1em", color: "rgba(71,85,105,1)", whiteSpace: "nowrap",
          }}
        >
          Trusted by
        </span>

        <div className="flex flex-wrap gap-6 items-center">
          {clients.map((name) => (
            <span
              key={name}
              className="transition-all duration-200 cursor-default"
              style={{ fontSize: "0.88rem", fontWeight: 700, color: "rgba(71,85,105,1)", letterSpacing: "-0.2px" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#4d9fff"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(71,85,105,1)"
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
