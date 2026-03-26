import React from "react";
import { C, HF, BF } from "../theme";
import { STRENGTHS, CHALLENGES } from "../data";

const Strengths: React.FC = () => (
  <section id="Strengths" className="section">
    <p className="sec-tag">Character</p>
    <h2 className="sec-title">Strengths & Growth Areas</h2>
    <div className="sec-divider" />

    <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: C.teal, fontWeight: 700, marginBottom: "1rem", fontFamily: BF }}>✦ Strengths</p>
    <div className="two-col" style={{ marginBottom: "2rem" }}>
      {STRENGTHS.map((s, i) => (
        <div key={i} className="card trait-card">
          <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{s.icon}</div>
          <div style={{ fontFamily: HF, fontSize: "1.1rem", fontWeight: 700, color: C.text, marginBottom: 8 }}>{s.title}</div>
          <div style={{ fontSize: "0.83rem", lineHeight: 1.7, color: C.textMuted, fontFamily: BF }}>{s.text}</div>
        </div>
      ))}
    </div>

    <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: C.textMuted, fontWeight: 700, marginBottom: "1rem", fontFamily: BF }}>◇ Growth Areas</p>
    <div className="two-col">
      {CHALLENGES.map((c, i) => (
        <div key={i} className="card trait-card growth-card">
          <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{c.icon}</div>
          <div style={{ fontFamily: HF, fontSize: "1.1rem", fontWeight: 700, color: C.text, marginBottom: 8 }}>{c.title}</div>
          <div style={{ fontSize: "0.83rem", lineHeight: 1.7, color: C.textMuted, fontFamily: BF }}>{c.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Strengths;
