import React from "react";
import { C, HF, BF } from "../theme";

const Hero: React.FC = () => (
  <section
    id="Home"
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "0 5%",
      paddingTop: "90px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Glow blobs */}
    <div style={{ position: "absolute", top: "15%", right: "3%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,${C.tealGlow} 0%,transparent 70%)`, pointerEvents: "none" }} />
    <div style={{ position: "absolute", bottom: "10%", left: 0, width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle,${C.tealGlow} 0%,transparent 70%)`, pointerEvents: "none" }} />

    <div className="hero-grid" style={{ width: "100%", maxWidth: 1180, margin: "0 auto" }}>
      {/* Text */}
      <div>
        <div style={{
          display: "inline-block", background: C.tealLight, border: `1px solid ${C.border}`,
          borderRadius: 20, padding: "5px 14px", fontSize: "0.7rem", letterSpacing: "0.15em",
          textTransform: "uppercase", color: C.teal, marginBottom: "1.5rem", fontWeight: 700, fontFamily: BF,
        }}>
          Portfolio · HR & Admin Professional
        </div>

        <h1 style={{
          fontFamily: HF, fontSize: "clamp(3.2rem,7vw,5.8rem)", fontWeight: 700,
          lineHeight: 1.0, color: C.text, marginBottom: "1.2rem", letterSpacing: "-0.02em",
        }}>
          Shiena<br />
          <span style={{ color: C.teal, fontStyle: "italic" }}>May Badajos</span>
        </h1>

        <p style={{ fontSize: "0.93rem", lineHeight: 1.85, color: C.textMuted, maxWidth: 460, marginBottom: "2.5rem", fontFamily: BF }}>
          Welcome — discover the experience, mindset, and dedication I bring to every opportunity.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            className="btn-primary"
            onClick={() => document.getElementById("Overview")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore
          </button>
          <button
            className="btn-outline"
            onClick={() => document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            ▶ Let's Connect
          </button>
        </div>
      </div>

      {/* Photo */}
      <div className="hero-img-wrap" style={{ display: "flex", justifyContent: "center" }}>
        {/* 
          Replace the div below with:
          <img src="/images/hero-photo.jpg" alt="Shiena May Badajos" style={{ width: 330, height: 410, borderRadius: 14, objectFit: "cover", border: `1.5px solid ${C.border}` }} />
          once you place hero-photo.jpg inside public/images/
        */}
        <div style={{
          width: 330, height: 410, borderRadius: 14,
          background: "linear-gradient(135deg,#0f1a1a,#0d2020)",
          border: `1.5px solid ${C.border}`,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          color: C.textDim, gap: 12, position: "relative", overflow: "hidden",
        }}>
          <span style={{ fontSize: "4rem" }}>👤</span>
          <span style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, fontFamily: BF }}>
            Place hero-photo.jpg in public/images/
          </span>
          <div style={{ position: "absolute", top: 0, left: 20, right: 20, height: 2, background: `linear-gradient(90deg,transparent,${C.teal},transparent)` }} />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
