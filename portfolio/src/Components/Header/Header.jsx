import React from "react";

// Import Components
import Navbar from "../NavBar/Navbar";
import { Link } from "react-scroll";
import "./Header.scss";

export default function Header() {
  return (
    <header id="home">
      <div className="container-w header-content">
        <h1>KEANU BARNARD</h1>
        <div className="link-effect-2">
          <h2 className="hover-head-text">
            <span data-hover="A">A</span>
          </h2>
          <h2 className="hover-head-text">
            <span data-hover="WEB">WEB</span>
          </h2>
          <h2 className="hover-head-text">
            <span data-hover="DEVELOPER">DEVELOPER</span>
          </h2>
          <h2 className="hover-head-text">
            <span data-hover="FROM">FROM</span>
          </h2>
          <h2 className="hover-head-text">
            <span data-hover="MELBOURNE,">MELBOURNE,</span>
          </h2>
          <h2 className="hover-head-text">
            <span data-hover="AU.">AU.</span>
          </h2>
        </div>

        <Link to="projects" smooth="true">
          <button className="btn">VIEW PROJECTS</button>
        </Link>
      </div>
    </header>
  );
}
