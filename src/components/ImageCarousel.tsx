import React, { useEffect, useState } from "react";
import { C, BF, HF } from "../theme";
import Icon from "./Icon";
import { GalleryItem } from "../data";

type Props = {
  items: GalleryItem[];
  eyebrow: string;
  title: string;
};

const AUTOPLAY_MS = 4500;

const ImageCarousel: React.FC<Props> = ({ items, eyebrow, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [hiddenImages, setHiddenImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!galleryOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [galleryOpen]);

  useEffect(() => {
    if (items.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [items.length]);

  const next = () => setActiveIndex((current) => (current + 1) % items.length);
  const prev = () => setActiveIndex((current) => (current - 1 + items.length) % items.length);
  const activeItem = items[activeIndex];

  if (!items.length) {
    return null;
  }

  return (
    <>
      <div className="carousel-block">
        <div className="carousel-header">
          <div>
            <p className="carousel-eyebrow">{eyebrow}</p>
            <h3 className="carousel-title">{title}</h3>
          </div>
          <div className="carousel-controls">
            <button type="button" className="carousel-nav" onClick={prev} aria-label="Previous slide">
              <Icon name="chevron-left" size={16} />
            </button>
            <button type="button" className="carousel-nav" onClick={next} aria-label="Next slide">
              <Icon name="chevron-right" size={16} />
            </button>
          </div>
        </div>

        <button type="button" className="carousel-stage card" onClick={() => setGalleryOpen(true)}>
          {!hiddenImages[activeItem.title] && activeItem.image ? (
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="carousel-stage-image"
              onError={() => setHiddenImages((current) => ({ ...current, [activeItem.title]: true }))}
            />
          ) : (
            <div className="carousel-stage-fallback">
              <div className="carousel-stage-fallback-icon">
                <Icon name="briefcase" size={28} />
              </div>
              <div style={{ fontFamily: HF, fontSize: "1.3rem", color: C.text, marginBottom: 8 }}>{activeItem.title}</div>
              <p style={{ margin: 0, maxWidth: 420, fontFamily: BF, fontSize: "0.9rem", lineHeight: 1.75, color: C.textMuted }}>{activeItem.subtitle}</p>
            </div>
          )}
          <div className="carousel-stage-overlay">
            <p className="carousel-stage-label">{activeItem.title}</p>
            <p className="carousel-stage-copy">{activeItem.subtitle}</p>
          </div>
        </button>

        <div className="carousel-dots">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`carousel-dot ${index === activeIndex ? "carousel-dot-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>
      </div>

      {galleryOpen ? (
        <div className="modal-overlay" onClick={() => setGalleryOpen(false)}>
          <div className="gallery-grid-modal card" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-grid-header">
              <div>
                <p className="carousel-eyebrow">{eyebrow}</p>
                <h3 className="carousel-title">{title}</h3>
              </div>
              <button className="modal-close gallery-grid-close" onClick={() => setGalleryOpen(false)} aria-label="Close gallery">
                <Icon name="x" size={16} />
              </button>
            </div>
            <div className="gallery-grid">
              {items.map((item) => (
                <div key={item.title} className="gallery-grid-card card">
                  {!hiddenImages[item.title] && item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="gallery-grid-image"
                      onError={() => setHiddenImages((current) => ({ ...current, [item.title]: true }))}
                    />
                  ) : (
                    <div className="gallery-grid-fallback">
                      <Icon name="briefcase" size={24} />
                    </div>
                  )}
                  <div className="gallery-grid-copy">
                    <div style={{ fontFamily: HF, fontSize: "1rem", color: C.text, marginBottom: 6 }}>{item.title}</div>
                    <p style={{ margin: 0, fontFamily: BF, fontSize: "0.82rem", lineHeight: 1.65, color: C.textMuted }}>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ImageCarousel;
