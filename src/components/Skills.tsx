import React from "react";
import { C, BF } from "../theme";
import { SKILLS, TOOLS } from "../data";
import Icon, { IconName } from "./Icon";

const Skills: React.FC = () => (
  <section id="Skills" className="section">
    <p className="sec-tag">Capabilities</p>
    <h2 className="sec-title">Overall Skills</h2>
    <div className="sec-divider" />

    <div className="two-col">
      {SKILLS.map((sk, i) => (
        <div key={i} className="card" style={{ padding: 24 }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: C.teal, fontWeight: 700, marginBottom: 14, display: "flex", alignItems: "center", gap: 8, fontFamily: BF }}>
            <Icon name={sk.icon as IconName} size={18} />
            {sk.title}
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {sk.items.map((item) => (
              <li key={item} style={{ fontSize: "0.83rem", color: C.textMuted, display: "flex", alignItems: "flex-start", gap: 8, lineHeight: 1.5, fontFamily: BF }}>
                <span style={{ color: C.teal, marginTop: 2, flexShrink: 0 }}>
                  <Icon name="chevron-right" size={12} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: C.textMuted, fontWeight: 700, margin: "2.5rem 0 1rem", fontFamily: BF }}>Tools & Platforms</p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {TOOLS.map((t) => (
        <span key={t} className="tool-badge">{t}</span>
      ))}
    </div>
  </section>
);

export default Skills;
