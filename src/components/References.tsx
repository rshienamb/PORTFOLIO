import React, { useState } from "react";
import { C, HF, BF } from "../theme";

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
              : "Professional references available. Resume with full contact details downloadable below. (NOT DOWNLOADABLE YET)"}
          </div>
          {/* {tab === "professional" && (
            <button className="btn-outline" style={{ fontSize: "0.75rem", padding: "9px 18px", marginTop: 14 }}>
              ⬇ Download Resume
            </button>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default References;
