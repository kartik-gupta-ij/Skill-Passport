import CircleProgress from "./CircleProgress";
import SubSkillRow from "./SubSkillRow";
import { BACK_ARROW_IMG, SUB_SKILLS } from "../constants";

export default function SkillDetailView({ skill, onBack }) {
  const subs = SUB_SKILLS[skill.label] || [];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 24 }}>
        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 15,
            color: "#252525",
          }}
        >
          <img src={BACK_ARROW_IMG} alt="" width={32} height={32} style={{ display: "block", filter: "invert(1)" }} />
          <span>Back</span>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: 24,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 20px 30px rgba(23,26,31,.15)",
            padding: "28px 32px",
            minWidth: 220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>
            {skill.label}
          </span>
          <CircleProgress value={skill.value} color={skill.color} />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            minWidth: 260,
          }}
        >
          {subs.map((s) => (
            <SubSkillRow key={s.name} name={s.name} score={s.score} />
          ))}
        </div>
      </div>
    </div>
  );
}
