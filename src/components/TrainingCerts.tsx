import React from "react";
import { trainingGallery } from "../galleryAssets";
import ImageCarousel from "./ImageCarousel";

const TrainingCerts: React.FC = () => (
  <section id="TrainingCerts" className="section">
    <p className="sec-tag">Professional Growth</p>
    <h2 className="sec-title">Training & Certificates</h2>
    <div className="sec-divider" />
    <div>
      <ImageCarousel
        items={trainingGallery}
        eyebrow="Training Gallery"
        title="Seminars, workshops, and certificates"
      />
    </div>
  </section>
);

export default TrainingCerts;
