import { useState } from "react";
import ScoresLegendModal from "./ScoresLegendModal";

const headerRowStyle = {
  display: "flex",
  alignItems: "center",
  paddingTop: 60,
  paddingLeft: 84,
  paddingRight: 36,
};

const headerContentStyle = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "2px solid rgba(255,255,255,1)",
  minHeight: 72,
  flexWrap: "wrap",
  gap: 12,
};

const welcomeStyle = {
  margin: "4px 0 0",
  fontSize: 14,
  color: "rgba(159, 159, 159, 1)",
  maxWidth: 900,
  fontWeight: 600,
};

export default function Header({ menuOpen, onMenuToggle }) {
  const [scoresModalOpen, setScoresModalOpen] = useState(false);

  return (
    <header
      className="header"
      style={{
        background: "#11102f",
        color: "#fff",
      }}
    >
      <div className="header__row" style={headerRowStyle}>
        <img
          src="https://98a2be75e7011b397ff3fc6df3ecd188.cdn.bubble.io/cdn-cgi/image/w=192,h=73,f=auto,dpr=2,fit=contain/f1745840161060x989131294203907200/LUMI-LOGO-WHITE-PNG%202.png"
          alt="Lumi Logo"
          style={{ width: 132, height: 50, marginRight: 60, flexShrink: 0 }}
        />
        <div style={headerContentStyle}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <h1 style={{ margin: 0, fontSize: 32, fontWeight: 600 }}>
                Emily (TL A)'s Skill Passport
              </h1>
              <span
                style={{ fontSize: 18, opacity: 0.7, cursor: "pointer" }}
                onClick={() => setScoresModalOpen(true)}
                onKeyDown={(e) => e.key === "Enter" && setScoresModalOpen(true)}
                role="button"
                tabIndex={0}
                aria-label="What the scores mean"
              >
                ℹ
              </span>
            </div>
            <p className="header__welcome" style={welcomeStyle}>
              Welcome to the skill overview. Here you can see how the
              participant has performed in developing their AI, Durable and
              Domain Skills compared to participants across the global Lumi
              Network:
            </p>
          </div>
          <div className="header__social" style={{ display: "flex", gap: 14, alignItems: "center" }}>
            {["🌐", "📷", "in", "▶"].map((ic, i) => (
              <span
                key={i}
                style={{
                  fontSize: i === 2 ? 13 : 16,
                  opacity: 0.75,
                  cursor: "pointer",
                }}
              >
                {ic}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0px 36px",
          paddingBottom: menuOpen ? 0 : 20,
        }}
      >
        <span
          style={{ fontSize: 18, cursor: "pointer", opacity: 1 }}
          onClick={onMenuToggle}
          role="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Collapse info" : "Expand info"}
        >
          {menuOpen ? "⌃" : "⌄"}
        </span>
      </div>

      {menuOpen && (
        <div
          className="header__expandable"
          style={{
            background: "#11102f",
            color: "#fff",
            padding: "24px 84px 32px",
            fontSize: 14,
            lineHeight: 1.6,
          }}
        >
          At Lumi, we ignite potential by helping people build the skills that matter most—creative problem-solving, AI fluency, and entrepreneurial thinking. This Skill Passport is a personalised snapshot of one participant's journey through a real-world innovation challenge. It highlights how they performed, what they excelled at, and where they can grow—based on feedback, reflection, and facilitator insight. It's more than a certificate—it's a window into how someone thinks, learns, and solves problems. Learn more at{" "}
          <a
            href="https://www.lumi.network"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00E39C", textDecoration: "none", fontWeight: 600 }}
          >
            www.lumi.network
          </a>
        </div>
      )}

      {scoresModalOpen && (
        <ScoresLegendModal onClose={() => setScoresModalOpen(false)} />
      )}
    </header>
  );
}
