import React, { useEffect } from "react";

// Import Components
import "./About.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import SkillList from "./SkillsList/SkillsList";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <h1 data-aos="zoom-in-up" className="section-header text-light">
          About Me
        </h1>
        <div data-aos="zoom-in-up" className="header-underline"></div>
        <p data-aos="fade-right" className="text-light about-desc">
          Hi my name is Keanu i am the best person in the world and i like to fight with monkeys
          that have so much fun with me because we take into account what type of chicken wings.
        </p>
        <SkillList></SkillList>
        <a
          href="../../Files/Keanu_Resume.pdf"
          download
          data-aos="fade-up"
          className="btn about-btn"
        >
          Check out my resume
        </a>
      </div>
    </div>
  );
}
