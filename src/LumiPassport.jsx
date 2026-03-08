import { useState } from "react";
import {
  CertCard,
  CourseSelect,
  CertModal,
  Header,
  InnovationCard,
  InnovationView,
  SkillCard,
  SkillDetailView,
} from "./components";
import { COURSES, INNOVATION_BANNER_IMG, MONTEBIANCO_IMG, SKILLS } from "./constants";

const PARTICIPANT_NAME = "Emily (TL A)";
const CERT_ID = "JWRDKB";

export default function LumiPassport() {
  const [course, setCourse] = useState(COURSES[0]);
  const [view, setView] = useState("home");
  const [activeSkill, setActiveSkill] = useState(null);
  const [certOpen, setCertOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      }}
    >
      <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((m) => !m)} />

      <main
        className={`main-content${view === "innovation" ? " main-content--full-bleed" : ""}`}
        style={{
          padding: view === "innovation" ? 0 : "0 32px 40px",
          background: "#fff",
          minHeight: "calc(100vh - 120px)",
          marginLeft: "auto",
          marginRight: "auto",
          flexWrap: "wrap",
          maxWidth: view === "innovation" ? "none" : 1100,
        }}
      >
        {(view === "home" || view === "skill") && (
          <div className="course-select-wrap" style={{ padding: "16px 0 8px" }}>
            <CourseSelect
              value={course}
              options={COURSES}
              onChange={(c) => {
                setCourse(c);
                setView("home");
              }}
              disabled={view !== "home"}
            />
          </div>
        )}

        {view === "home" && (
          <>
            <div className="skill-cards" style={{ display: "flex", gap: 24, marginTop: 24 }}>
              {SKILLS.map((sk) => (
                <SkillCard
                  key={sk.label}
                  {...sk}
                  onClick={() => {
                    setActiveSkill(sk);
                    setView("skill");
                  }}
                />
              ))}
            </div>

            <section style={{ marginTop: 48 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#11102f",
                  marginBottom: 16,
                }}
              >
                Certifications &amp; Awards
              </h2>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <CertCard
                  name={PARTICIPANT_NAME}
                  certId={CERT_ID}
                  onClick={() => setCertOpen(true)}
                />
              </div>
            </section>

            <section style={{ marginTop: 48 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#11102f",
                  marginBottom: 16,
                }}
              >
                Innovations
              </h2>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <InnovationCard
                  title="Model Choices"
                  date="Completed On July 2025"
                  subtitle="LLM vs SLM"
                  program="Financial Engineering"
                  imgSrc={MONTEBIANCO_IMG}
                  onClick={() => setView("innovation")}
                />
              </div>
            </section>
          </>
        )}

        {view === "skill" && activeSkill && (
          <div style={{ marginTop: 24 }}>
            <SkillDetailView
              skill={activeSkill}
              onBack={() => setView("home")}
            />
          </div>
        )}

        {view === "innovation" && (
          <div>
            <InnovationView
              onBack={() => setView("home")}
              imgSrc={INNOVATION_BANNER_IMG}
            />
          </div>
        )}
      </main>

      {certOpen && (
        <CertModal
          name={PARTICIPANT_NAME}
          certId={CERT_ID}
          onClose={() => setCertOpen(false)}
        />
      )}
    </div>
  );
}
