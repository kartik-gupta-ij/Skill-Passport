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
              <span style={{ fontSize: 18, opacity: 0.7, cursor: "pointer" }}>
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
          paddingBottom: 20,
        }}
      >
        <span
          style={{ fontSize: 18, cursor: "pointer", opacity: 1 }}
          onClick={onMenuToggle}
          role="button"
          aria-expanded={menuOpen}
        >
          ⌄
        </span>
      </div>
    </header>
  );
}
