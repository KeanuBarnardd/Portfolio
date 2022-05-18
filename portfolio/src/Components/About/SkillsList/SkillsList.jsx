import React, { useEffect }  from "react";

// Import Components
import "./SkillsList.scss";
import Aos from "aos";
import "aos/dist/aos.cjs";

export default function SkillList() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-left" className="skills-list">
      <div className="item-container">
        <i className="skill-icon devicon-javascript-plain"></i>
        <p>Javascript</p>
      </div>
      <div className="item-container">
        <i className="skill-icon devicon-react-original"></i>
        <p>React JS</p>
      </div>
      <div className="item-container">
        <i className="skill-icon devicon-nodejs-plain-wordmark"></i>
        <p>Node JS</p>
      </div>
      <div className="item-container">
        <i className="skill-icon devicon-mongodb-plain"></i>
        <p>Mongo DB</p>
      </div>
      <div className="item-container">
        <i className="skill-icon devicon-css3-plain"></i>
        <p>CSS/SCSS</p>
      </div>
    </div>
  );
}
