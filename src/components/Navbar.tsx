import React, { useState } from "react";
import { C, HF } from "../theme";
import { HOME_SUB_ITEMS, NAV_ITEMS } from "../data";
import "./Navbar.css";

const NAV_LOGO_SRC = "/images/nav-logo.png";
const protectMedia = (e: React.SyntheticEvent<HTMLElement>) => e.preventDefault();

const Navbar: React.FC = () => {
  const [mob, setMob] = useState(false);
  const [mobClosing, setMobClosing] = useState(false);
  const [mobHomeOpen, setMobHomeOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);
  const topLevelItems = NAV_ITEMS.filter(
    (item) => item !== "Home" && !HOME_SUB_ITEMS.includes(item),
  );

  const scrollTo = (id: string) => {
    document
      .getElementById(id.replace(/[^a-zA-Z0-9]/g, ""))
      ?.scrollIntoView({ behavior: "smooth" });
    setMob(false);
    setMobClosing(false);
    setMobHomeOpen(false);
  };

  const toggleMobileMenu = () => {
    if (mob) {
      setMobClosing(true);
      setMobHomeOpen(false);
      window.setTimeout(() => {
        setMob(false);
        setMobClosing(false);
      }, 320);
      return;
    }

    setMob(false);
    setMobClosing(false);
    setMobHomeOpen(false);
    setMob(true);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 5%",
          background: C.navBg,
          backdropFilter: "blur(18px)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <button
          type="button"
          className="nav-brand"
          aria-label="Go to Home"
          onClick={() => scrollTo("Home")}
        >
          {logoVisible ? (
            <span className="nav-brand-logo-wrap">
              <img
                className="nav-brand-logo"
                src={NAV_LOGO_SRC}
                alt="Shiena logo"
                draggable={false}
                onDragStart={protectMedia}
                onContextMenu={protectMedia}
                onError={() => setLogoVisible(false)}
              />
            </span>
          ) : null}

          {!logoVisible ? (
            <span
              style={{
                fontFamily: HF,
                fontSize: "1.3rem",
                fontWeight: 700,
                color: C.teal,
              }}
            >
              Shiena Badajos
            </span>
          ) : null}
        </button>

        <ul className="nav-links">
          <li className="nav-group">
            <button
              type="button"
              className="nav-link nav-group-trigger"
              onClick={() => scrollTo("Home")}
            >
              Home
            </button>
            <div className="nav-submenu">
              {HOME_SUB_ITEMS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="nav-submenu-link"
                  onClick={() => scrollTo(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </li>

          {topLevelItems.map((n) => (
            <li key={n} className="nav-link" onClick={() => scrollTo(n)}>
              {n}
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${mob ? "ham-open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="ham-bar" style={{ background: C.teal }} />
          <span className="ham-bar" style={{ background: C.teal }} />
          <span className="ham-bar" style={{ background: C.teal }} />
        </button>
      </nav>

      {mob && (
        <div
          className={`mob-overlay ${mobClosing ? "mob-overlay-closing" : ""}`}
        >
          <div className="mob-group">
            <button
              type="button"
              className={`mob-link mob-group-title mob-group-trigger ${mobHomeOpen ? "mob-group-trigger-open" : ""}`}
              style={{ fontFamily: HF }}
              onClick={() => setMobHomeOpen(!mobHomeOpen)}
            >
              Home
            </button>
            <div
              className={`mob-submenu ${mobHomeOpen ? "mob-submenu-open" : ""}`}
            >
              {HOME_SUB_ITEMS.map((item) => (
                <div
                  key={item}
                  className="mob-sublink"
                  style={{ fontFamily: HF }}
                  onClick={() => scrollTo(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {topLevelItems.map((n) => (
            <div
              key={n}
              className="mob-link"
              style={{ fontFamily: HF }}
              onClick={() => scrollTo(n)}
            >
              {n}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
