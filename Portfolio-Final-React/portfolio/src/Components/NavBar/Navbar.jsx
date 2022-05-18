import React, { useState } from "react";
import { Link } from "react-scroll";

// Import Components
import "./Navbar.scss";

export default function Navbar() {
  const [isNavActive, setNavActive] = useState("false");

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };
  // Sticky Navbar
  return (
    <div className="nav-bg">
      <div className="nav container-w">
        <a to="home" smooth="true">
          <h4>
            Keanu<span className="dash">/</span>
            <span>Barnard</span>
          </h4>
        </a>
        <div className={`nav-links ${isNavActive ? "active" : null}`}>
          <Link onClick={toggleNav} to="home" smooth="true" className="link">
            HOME
          </Link>
          <Link onClick={toggleNav} to="projects" smooth="true" className="link">
            PROJECT
          </Link>
          <Link onClick={toggleNav} to="about" smooth="true" className="link">
            ABOUT
          </Link>
          <Link onClick={toggleNav} to="contact" smooth="true" className="link">
            CONTACT
          </Link>
        </div>
        <i onClick={toggleNav} className="hamburger fa-solid fa-bars"></i>
      </div>
    </div>
  );
}
