import React, { useEffect } from "react";

// Import Components
import ProjectItem from "../ProjectItem/ProjectItem";
import Skill from "../ProjectItem/Skill/Skill";
import "./Projects.scss";
import Aos from "aos";
import "aos/dist/aos.css";

// Import Images from Project 1
import bugTrackerImg from "./Project_Images/bug-tracker.PNG";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects" className="projects-section container-w">
      <h1 data-aos="fade-up" className="section-header">
        Projects
      </h1>
      <div data-aos="fade-up" className="header-underline"></div>
      <ProjectItem
        title={"Bug Tracker"}
        animationType={"fade-right"}
        description={
          <span>
            I created a Bug Tracker with React that allows users to log bugs within their program
            during development. This application allows the user to create, edit and resolve logged
            bugs. <br /> <br /> Organising logs into a digestable and maintable solution. This was
            my first 'real' project and one I can proudly say I did myself from top to bottom
            without following a 1 hour youtube tutorial.
          </span>
        }
        img1={bugTrackerImg}
        demoLink={"https://keanubarnardd.github.io/Bug-Tracker-Final/"}
        sourceCodeLink={"https://github.com/KeanuBarnardd/Bug-Tracker-Final"}
        skillsList={
          <>
            <Skill text={"React "} />
            <Skill text={"HTML "} />
            <Skill text={"SCSS"} />
          </>
        }
      />
    </div>
  );
}

/*
I created a Bug Tracker with React that allows users to log bugs within their program during development. This application allows the user to create, edit and resolve logged bugs. Organising logs into a digestable and maintable solution. This was my first 'real' project and one I can proudly say I did myself from top to bottom. That wasn't just a follow along Youtube tutorial.
*/
