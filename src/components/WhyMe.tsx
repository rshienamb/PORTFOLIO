import React from "react";
import { C, BF } from "../theme";
import Icon from "./Icon";

const WhyMe: React.FC = () => (
  <section id="WhyMe" className="section">
    <p className="sec-tag">The Case for Shiena</p>
    <h2 className="sec-title">Why Hire Me?</h2>
    <div className="sec-divider" />

    <div style={{
      background: "linear-gradient(135deg,#0d2a28,#0f1a1a)",
      border: `1px solid ${C.borderHover}`,
      borderRadius: 16,
      padding: "48px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 200, height: 2, background: `linear-gradient(90deg,transparent,${C.teal},transparent)` }} />
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.2rem" }}>
        <Icon name="sparkles" size={30} />
      </div>
      <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: C.text, maxWidth: 680, margin: "0 auto 1.2rem", fontFamily: BF }}>
        Exploring different industries has never been a disadvantage — it has been my way of discovering where my strengths can make the greatest impact. Whether my tenure in a role is short or long, my focus remains the same:{" "}
        <strong style={{ color: C.teal }}>to contribute meaningfully, continuously grow, and elevate my skills</strong>{" "}
        both personally and professionally.
      </p>
      <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: C.textMuted, maxWidth: 680, margin: "0 auto 2rem", fontFamily: BF }}>
        If you hire me, you will gain a versatile professional who brings <strong style={{ color: C.teal }}>energy, growth, and dedication</strong> — while consistently meeting metrics and <strong style={{ color: C.teal }}>leveraging skills honed across multiple industries</strong>.
      </p>
      <button
        className="btn-primary"
        style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
        onClick={() => document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Let's Talk
        <Icon name="chevron-right" size={14} color="#0a0f0f" />
      </button>
    </div>
  </section>
);

export default WhyMe;
