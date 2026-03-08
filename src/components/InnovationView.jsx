import { BACK_ARROW_IMG } from "../constants";

export default function InnovationView({ onBack, imgSrc }) {
  return (
    <div className="innovation-view">
      <div
        className="innovation-view__banner"
        style={{
          position: "relative",
          minHeight: 400, 
          overflow: "hidden",
          marginBottom: 0,
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
          }}
        />
        <div
          className="innovation-view__banner-content"
          style={{
            position: "relative",
            zIndex: 1,
            padding: "20px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={onBack}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 15,
              }}
            >
              <img
                src={BACK_ARROW_IMG}
                alt=""
                width={32}
                height={32}
                style={{ display: "block" }}
              />
              <span>Back</span>
            </button>
          </div>
          <div
            className="innovation-view__banner-title"
            style={{ color: "#fff", display: "flex", flexDirection: "column" }}
          >
            <div style={{ fontSize: 26, fontWeight: 800 }}>Model Choices</div>
            <div
              style={{
                fontSize: 14,
                opacity: 0.85,
                borderBottom: "2px solid #fff",
                paddingBottom: 8,
              }}
            >
              LLM vs SLM
            </div>
          </div>
        </div>
      </div>

      <div
        className="innovation-view__cards"
        style={{
          display: "flex",
          gap: 24,
          marginBottom: 24,
          flexWrap: "wrap",
          maxWidth: 1100,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      >
        {[
          ["The Problem", "LLM"],
          ["The Solution", "SLM"],
        ].map(([heading, body]) => (
          <div
            key={heading}
            style={{
              flex: 1,
              minWidth: 40,
              minHeight: 300,
  
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 6px 14px rgba(23,26,31,.18)",
              padding: "24px 28px",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
              {heading}
            </div>
            <div style={{ fontSize: 14, color: "#555" }}>{body}</div>
          </div>
        ))}
      </div>

      <div
        className="innovation-view__video"
        style={{
          background: "#1a1a1a",
          borderRadius: 8,
          height: 420,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#aaa",
          fontSize: 15,
          flexDirection: "column",
          gap: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 40,
          maxWidth: 1100,
          width: "100%",
          boxSizing: "border-box",
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        <span style={{ fontSize: 40 }}>⚠</span>
        This video is unavailable
      </div>
    </div>
  );
}
