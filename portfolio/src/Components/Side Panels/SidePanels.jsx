import React from "react";
import { Link } from "react-scroll";

// Import Compotents
import "./SidePanels.scss";

export default function SidePanels() {
  return (
    <div className="side-bar">
      <a
        href="https://www.linkedin.com/in/keanu-b-262823118/"
        target="_blank"
        rel="noreferrer"
        className="side-link linked-in-btn"
        id="linkedIn-btn"
      >
        <span className="toggle">LINKEDIN</span>
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/KeanuBarnardd"
        target="_blank"
        rel="noreferrer"
        className="side-link linked-in-btn"
        id="github-btn"
      >
        <span className="toggle">GITHUB</span>
        <i className="fa-brands fa-github"></i>
      </a>
      <Link className="side-link linked-in-btn" id="email-btn" to="contact" smooth="true">
        <span className="toggle">EMAIL</span>
        <i className="fa-regular fa-envelope"></i>
      </Link>
      <a
        href="../../Files/Keanu_Resume.pdf"
        className="side-link linked-in-btn"
        id="resume-btn"
        download
      >
        <span className="toggle">RESUME</span>
        <i className="fa-solid fa-circle-user"></i>
      </a>
    </div>
  );
}
