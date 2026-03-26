import React, { useState } from "react";
import { C, HF } from "../theme";
import { NAV_ITEMS } from "../data";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [mob, setMob] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.replace(" ", ""))?.scrollIntoView({ behavior: "smooth" });
    setMob(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 5%", background: C.navBg,
        backdropFilter: "blur(18px)", borderBottom: `1px solid ${C.border}`,
      }}>
        <span
          style={{ fontFamily: HF, fontSize: "1.3rem", fontWeight: 700, color: C.teal, cursor: "pointer" }}
          onClick={() => scrollTo("Home")}
        >
          Shiena M. Badajos
        </span>

        <ul className="nav-links">
          {NAV_ITEMS.map((n) => (
            <li key={n} className="nav-link" onClick={() => scrollTo(n)}>{n}</li>
          ))}
        </ul>

        <button
          className={`hamburger ${mob ? "ham-open" : ""}`}
          onClick={() => setMob(!mob)}
          aria-label="Toggle menu"
        >
          <span className="ham-bar" style={{ background: C.teal }} />
          <span className="ham-bar" style={{ background: C.teal }} />
          <span className="ham-bar" style={{ background: C.teal }} />
        </button>
      </nav>

      {mob && (
        <div className="mob-overlay">
          {NAV_ITEMS.map((n) => (
            <div key={n} className="mob-link" style={{ fontFamily: HF }} onClick={() => scrollTo(n)}>{n}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
