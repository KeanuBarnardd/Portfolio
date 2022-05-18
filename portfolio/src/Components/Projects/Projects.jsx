import React, { useEffect } from "react";

// Import Components
import ProjectItem from "../ProjectItem/ProjectItem";
import "./Projects.scss";
import Aos from "aos";
import "aos/dist/aos.css";

// Import Images from Project 1
import exampleImg from "./Project_Images/example1.PNG";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects" className="projects-section container-w">
      <h1  data-aos="fade-up" className="section-header">
        Projects
      </h1>
      <div data-aos="fade-up" className="header-underline"></div>
      <ProjectItem
        title={"Full Stack Bug Tracker"}
        animationType={"fade-right"}
        description={
          "This is the description for the project and what the project is about hello everybody how are you doing this is very cool to see and i love how everybody is getting involved. Suck me off plssss :( "
        }
        img1={exampleImg}
        demoLink={"www.instagram.com"}
        sourceCodeLink={"www.facebook.com"}
      />
      <ProjectItem
        title={"Inventory Management System"}
        animationType={"fade-left"}
        description={
          "This is the description for the project and what the project is about hello everybody how are you doing this is very cool to see.This is the best thing to happen to me "
        }
        img1={exampleImg}
        demoLink={"www.instagram.com"}
        sourceCodeLink={"www.facebook.com"}
      />
    </div>
  );
}
