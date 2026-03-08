import { useEffect } from "react";

const SCORES = [
  { level: 1, text: "No evidence / struggles to demonstrate the skill" },
  { level: 2, text: "Emerging skill with limited application" },
  { level: 3, text: "Baseline competency — expected for graduates or early professionals" },
  { level: 4, text: "Strong, consistent skill use across tasks or settings" },
  { level: 5, text: "Demonstrates consistent understanding, competency, and autonomy in applying the skill" },
];

function ChartIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <rect x={4} y={14} width={4} height={6} rx={1} fill="#00E39C" />
      <rect x={10} y={10} width={4} height={10} rx={1} fill="#3b4ea0" />
      <rect x={16} y={6} width={4} height={14} rx={1} fill="#f59e0b" />
    </svg>
  );
}

export default function ScoresLegendModal({ onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          maxWidth: 520,
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          boxShadow: "0 24px 48px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ padding: "24px 28px 28px" }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#00E39C",
              borderBottom: "2px solid #00E39C",
              paddingBottom: 8,
              marginBottom: 20,
              display: "inline-block",
            }}
          >
            Overview
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <ChartIcon />
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#111" }}>
              What the Scores Mean
            </h2>
          </div>
          <p
            style={{
              margin: "0 0 20px",
              fontSize: 13,
              color: "#666",
            }}
          >
            Score General Meaning (Applies Across All Skills).
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {SCORES.map(({ level, text }) => (
              <div key={level} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontWeight: 700, fontSize: 15, color: "#111", flexShrink: 0 }}>
                  {level}.
                </span>
                <span style={{ fontSize: 15, color: "#333", lineHeight: 1.4 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
