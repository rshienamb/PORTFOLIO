import React, { useState } from "react";
import { C, HF, BF } from "../theme";

const RESUME_A = "Admin Application_Badajos, Shiena.pdf";
const RESUME_B = "Shiena May Badajos_Virtual Assistant.pdf";

const References: React.FC = () => {
  const [tab, setTab] = useState<"character" | "professional">("character");

  return (
    <section id="References" className="section">
      <p className="sec-tag">References</p>
      <h2 className="sec-title">Vouching for Shiena</h2>
      <div className="sec-divider" />

      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        {(["character", "professional"] as const).map((t) => (
          <button
            key={t}
            className="btn-primary"
            style={{
              background: tab === t ? C.teal : "transparent",
              color: tab === t ? "#0a0f0f" : C.textMuted,
              border: `1.5px solid ${tab === t ? C.teal : C.border}`,
            }}
            onClick={() => setTab(t)}
          >
            {t === "character" ? "Character Reference" : "Professional Reference"}
          </button>
        ))}
      </div>

      <div className="card" style={{ padding: 24, display: "flex", alignItems: "flex-start", gap: 16 }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          background: C.tealLight, border: `1.5px solid ${C.teal}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.4rem", flexShrink: 0,
        }}>👤</div>
        <div>
          <div style={{ fontFamily: HF, fontSize: "1.1rem", fontWeight: 700, color: C.text, marginBottom: 3 }}>Available upon request</div>
          <div style={{ fontSize: "0.7rem", color: C.teal, fontWeight: 700, marginBottom: 10, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: BF }}>
            {tab === "character" ? "Character Reference" : "Professional Reference"}
          </div>
          <div style={{ fontSize: "0.85rem", color: C.textMuted, lineHeight: 1.6, marginBottom: tab === "professional" ? 14 : 0, fontFamily: BF }}>
            {tab === "character"
              ? "Personal references available from family and community connections in Bicol and Cavite."
              : "Professional references available. Resume with full contact details downloadable below."}
          </div>
          {tab === "professional" && (
            <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <a href={encodeURI(`/${RESUME_A}`)} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "9px 18px", fontSize: "0.85rem" }}>{RESUME_A}</a>
              {/* <a href={encodeURI(`/${RESUME_A}`)} download className="btn-outline" style={{ padding: "9px 18px", fontSize: "0.85rem" }}>Download {RESUME_A}</a> */}
              <a href={encodeURI(`/${RESUME_B}`)} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "9px 18px", fontSize: "0.85rem" }}>{RESUME_B}</a>
              {/* <a href={encodeURI(`/${RESUME_B}`)} download className="btn-outline" style={{ padding: "9px 18px", fontSize: "0.85rem" }}>Download {RESUME_B}</a> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default References;
