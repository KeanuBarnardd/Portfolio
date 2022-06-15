import React, { useEffect } from "react";

//Import Components
import ImageSlider from "../ImageSlider/ImageSlider";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ProjectItem(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos={props.animationType} className="proj-container">
      <div className="proj-item">
        <div className="proj-description desc-left">
          <h1 className="proj-title">{props.title}</h1>
          <p className="proj-text">{props.description}</p>
          <h3>Skills</h3>
          <div className="proj-skills">{props.skillsList}</div>
          <div className="proj-btn-container">
            <a href={props.demoLinK} className="project-btn">
              <i className="fa-solid fa-eye"></i>Live Project
            </a>
            <a href={props.sourceCodeLink} className="demo-btn">
              <i className="fa-regular fa-file-code"></i>Source Code
            </a>
          </div>
        </div>
        <ImageSlider img1={props.img1} />
      </div>
    </div>
  );
}
