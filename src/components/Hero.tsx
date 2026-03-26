import React, { useState } from "react";
import { C, HF, BF } from "../theme";
import Icon from "./Icon";

const HERO_VIDEO_SRC = "/videos/hero-video.mp4";
const protectMedia = (e: React.SyntheticEvent<HTMLElement>) => e.preventDefault();

const Hero: React.FC = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
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
        <div style={{ position: "absolute", top: "15%", right: "3%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,${C.tealGlow} 0%,transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: 0, width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle,${C.tealGlow} 0%,transparent 70%)`, pointerEvents: "none" }} />

        <div className="hero-grid" style={{ width: "100%", maxWidth: 1180, margin: "0 auto" }}>
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
              <span style={{ color: C.teal, fontStyle: "italic" }}>Shiena Badajos</span>
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
                Let's Connect
              </button>
              <button
                className="btn-outline"
                onClick={() => setVideoOpen(true)}
              >
                <Icon name="chevron-right" size={14} />
                Play Video
              </button>
            </div>
          </div>

          <div className="hero-img-wrap" style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="protected-media hero-photo"
              src="/images/hero-photo.jpg"
              alt="Shiena May Badajos"
              draggable={false}
              onDragStart={protectMedia}
              onContextMenu={protectMedia}
              style={{ width: 330, height: 410, borderRadius: 14, objectFit: "cover", border: `1.5px solid ${C.border}` }}
            />
          </div>
        </div>
      </section>

      {videoOpen ? (
        <div className="modal-overlay" onClick={() => setVideoOpen(false)}>
          <div className="hero-video-shell" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close hero-video-close" onClick={() => setVideoOpen(false)} aria-label="Close video modal">
              <Icon name="x" size={16} />
            </button>
            <div className="hero-video-modal card">
              <div className="hero-video-frame">
                {HERO_VIDEO_SRC ? (
                  <video
                    className="protected-media"
                    controls
                    autoPlay
                    onContextMenu={protectMedia}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  >
                    <source src={HERO_VIDEO_SRC} />
                  </video>
                ) : (
                  <div className="hero-video-placeholder">
                    <div className="hero-video-placeholder-icon">
                      <Icon name="chevron-right" size={26} />
                    </div>
                    <div style={{ fontFamily: HF, fontSize: "1.6rem", color: C.text, marginBottom: 10 }}>
                      Video Placeholder
                    </div>
                    <p style={{ margin: 0, maxWidth: 420, fontSize: "0.9rem", lineHeight: 1.8, color: C.textMuted, fontFamily: BF }}>
                      Place your local MP4 file at <strong style={{ color: C.text }}>/public/videos/hero-video.mp4</strong> or update <strong style={{ color: C.text }}>HERO_VIDEO_SRC</strong> to another local `.mp4` path.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Hero;
