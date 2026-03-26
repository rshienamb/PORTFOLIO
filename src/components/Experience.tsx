import React from "react";
import { C, HF, BF } from "../theme";
import { EXPERIENCE } from "../data";

const Experience: React.FC = () => (
  <section id="Experience" className="section">
    <p className="sec-tag">Career</p>
    <h2 className="sec-title">Work Experience</h2>
    <div className="sec-divider" />

    <div style={{ position: "relative", paddingLeft: 28 }}>
      {/* Vertical line */}
      <div style={{
        position: "absolute", left: 6, top: 8, bottom: 8, width: 2,
        background: `linear-gradient(to bottom,${C.teal},${C.tealDark},transparent)`,
      }} />

      {EXPERIENCE.map((ex, i) => (
        <div key={i} className="card timeline-item">
          {/* Dot */}
          <div style={{
            position: "absolute", left: -24, top: 22, width: 12, height: 12,
            borderRadius: "50%", background: C.teal,
            border: `2px solid #0a0f0f`, boxShadow: `0 0 8px ${C.teal}`,
          }} />

          <div style={{ fontFamily: HF, fontSize: "1.15rem", fontWeight: 700, color: C.text, marginBottom: 2 }}>{ex.role}</div>
          <div style={{ fontSize: "0.85rem", color: C.teal, fontWeight: 700, marginBottom: 4, fontFamily: BF }}>{ex.company}</div>
          <div style={{ fontSize: "0.75rem", color: C.textMuted, letterSpacing: "0.08em", marginBottom: 12, fontFamily: BF }}>{ex.period}</div>
          <div style={{ fontSize: "0.85rem", lineHeight: 1.75, color: C.textMuted, marginBottom: 14, fontFamily: BF }}>{ex.desc}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {ex.tags.map((t) => (
              <span key={t} className="skill-tag">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
