import React, { useState } from "react";
import { C, BF, HF } from "../theme";
import Icon, { IconName } from "./Icon";

const stats = [
  {
    icon: "graduation",
    label: "Education",
    value: "Magna Cum Laude, PUP — GWA 1.43",
  },
  {
    icon: "briefcase",
    label: "Industries",
    value: "Admin, HR, BPO, Real Estate, Sales",
  },
  { icon: "globe", label: "Languages", value: "Tagalog · English · Rinconada" },
  { icon: "pin", label: "Location", value: "Philippines" },
];

const ABOUT_PHOTO_SRC = "/images/about-photo.jpg";

const Overview: React.FC = () => {
  const [aboutPhotoVisible, setAboutPhotoVisible] = useState(true);

  return (
    <section id="Overview" className="section">
      <p className="sec-tag">Overview</p>
      <h2 className="sec-title">Introduction</h2>
      <div className="sec-divider" />

    <div className="overview-grid">
      <div>
        <p
          style={{
            fontSize: "0.93rem",
            lineHeight: 1.85,
            color: C.textMuted,
            fontFamily: BF,
            marginBottom: "1.2rem",
            maxWidth: 640,
          }}
        >
          If you are considering me as a potential member of your team and would
          like to understand more about me even before an initial conversation,
          this page serves as a comprehensive introduction.
        </p>
        <p
          style={{
            fontSize: "0.93rem",
            lineHeight: 1.85,
            color: C.textMuted,
            fontFamily: BF,
            marginBottom: "2.4rem",
            maxWidth: 640,
          }}
        >
          It reflects not only my professional background, skills, and work
          experience, but also the mindset, integrity, and work ethic I aim to
          bring as a reliable partner in supporting daily operations and
          contributing to your company's continued success.
        </p>
        {/* <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal, fontWeight: 700, marginBottom: "0.45rem", fontFamily: BF }}>About Me</div> */}
        <h3
          style={{
            fontFamily: HF,
            fontSize: "clamp(1.55rem, 2.6vw, 2.2rem)",
            fontWeight: 700,
            color: C.text,
            lineHeight: 1.1,
            margin: "0 0 1rem",
          }}
        >
          About Me
        </h3>
        <div className="sec-divider" />

        {aboutPhotoVisible ? (
          <img
            src={ABOUT_PHOTO_SRC}
            alt="Shiena portrait"
            onError={() => setAboutPhotoVisible(false)}
            style={{
              width: "100%",
              maxWidth: 360,
              height: 420,
              objectFit: "cover",
              objectPosition: "center 20%",
              borderRadius: 18,
              border: `1px solid ${C.border}`,
              marginBottom: "1.4rem",
              display: "block",
            }}
          />
        ) : null}

        <p
          style={{
            fontSize: "0.93rem",
            lineHeight: 1.85,
            color: C.textMuted,
            fontFamily: BF,
          }}
        >
          My name is{" "}
          <strong style={{ color: C.text }}>Shiena May Rull Badajos</strong>,
          though I go by <strong style={{ color: C.teal }}>Shiena</strong> in
          the corporate world and{" "}
          <strong style={{ color: C.teal }}>May-May</strong> among family and
          friends. Born Tagalog but raised as a proud Bicolana, I grew up
          grounded in resilience, adaptability, and a strong sense of heritage.
          I speak{" "}
          <strong style={{ color: C.text }}>
            Tagalog, English, and Rinconada
          </strong>{" "}
          fluently.
        </p>
      </div>

      <div
        className="overview-stats"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="card"
            style={{
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span
              style={{
                minWidth: 32,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon name={s.icon as IconName} size={24} />
            </span>
            <div>
              <div
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: C.textDim,
                  marginBottom: 2,
                  fontWeight: 600,
                  fontFamily: BF,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  color: C.text,
                  fontFamily: BF,
                }}
              >
                {s.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Overview;
