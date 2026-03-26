import React, { useState } from "react";
import { C, HF, BF } from "../theme";
import { EDUCATION } from "../data";
import Icon, { IconName } from "./Icon";

const imageStyle = { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 22%" } as const;

const Education: React.FC = () => {
  const [modal, setModal] = useState<number | null>(null);
  const activeEducation = modal !== null ? EDUCATION[modal] : null;

  return (
    <section id="Education" className="section">
      <p className="sec-tag">Education</p>
      <h2 className="sec-title">Academic Journey</h2>
      <div className="sec-divider" />
      <p style={{ fontSize: "0.93rem", lineHeight: 1.85, color: C.textMuted, fontFamily: BF, marginBottom: "2.5rem", maxWidth: 620 }}>
        My academic journey reflects resilience, discipline, and a strong commitment to growth - shaping my perseverance, adaptability, and sense of responsibility.
      </p>

      <div className="three-col">
        {EDUCATION.map((e, i) => (
          <div key={i} className="card edu-card" onClick={() => setModal(i)}>
            <div className="edu-img-box">
              <img
                src={e.image}
                alt={e.stage}
                onError={(ev) => {
                  (ev.target as HTMLImageElement).style.display = "none";
                  (ev.target as HTMLImageElement).nextElementSibling?.removeAttribute("style");
                }}
                style={imageStyle}
              />
              <span className="edu-emoji-fallback" style={{ display: "none" }}>
                <Icon name={e.icon as IconName} size={42} />
              </span>
            </div>

            <div style={{ padding: 20 }}>
              <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal, fontWeight: 700, marginBottom: 6, fontFamily: BF }}>{e.stage}</div>
              <div style={{ fontFamily: HF, fontSize: "1.15rem", fontWeight: 700, color: C.text, marginBottom: 8, lineHeight: 1.25 }}>{e.title}</div>
              <div style={{ fontSize: "0.82rem", color: C.textMuted, lineHeight: 1.6, marginBottom: 12, fontFamily: BF }}>{e.short}</div>
              <div style={{ fontSize: "0.75rem", color: C.teal, fontWeight: 700, letterSpacing: "0.06em", fontFamily: BF, display: "flex", alignItems: "center", gap: 6 }}>
                Read more
                <Icon name="chevron-right" size={12} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeEducation && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal-box card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(null)} aria-label="Close modal">
              <Icon name="x" size={16} />
            </button>
            <div className="modal-edu-image">
              <img
                src={activeEducation.image}
                alt={activeEducation.stage}
                onError={(ev) => {
                  (ev.target as HTMLImageElement).style.display = "none";
                  (ev.target as HTMLImageElement).nextElementSibling?.removeAttribute("style");
                }}
                style={imageStyle}
              />
              <span className="edu-emoji-fallback" style={{ display: "none" }}>
                <Icon name={activeEducation.icon as IconName} size={54} />
              </span>
            </div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal, fontWeight: 700, marginBottom: 6, fontFamily: BF }}>{activeEducation.stage}</div>
            <div style={{ fontFamily: HF, fontSize: "1.5rem", fontWeight: 700, color: C.text, marginBottom: 16 }}>{activeEducation.title}</div>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: C.textMuted, fontFamily: BF }}>{activeEducation.full}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
