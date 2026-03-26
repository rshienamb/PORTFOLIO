import React from "react";
import "./components/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Education from "./components/Education";
import Strengths from "./components/Strengths";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import TrainingCerts from "./components/TrainingCerts";
import WhyMe from "./components/WhyMe";
import References from "./components/References";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Overview />
      <Education />
      <Strengths />
      <Experience />
      <Skills />
      <TrainingCerts />
      <WhyMe />
      <References />
      <Contact />
      <footer style={{
        borderTop: "1px solid rgba(0,201,177,.18)",
        padding: "26px 5%",
        textAlign: "center",
        color: "#3a6060",
        fontSize: "0.8rem",
        letterSpacing: "0.05em",
        fontFamily: "'Nunito', sans-serif",
      }}>
        © 2025 Shiena May Rull Badajos · All rights reserved
      </footer>
    </div>
  );
}

export default App;
