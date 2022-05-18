import React, { useEffect } from "react";

// Import Components
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content container-w">
        <h2>KB</h2>

        <div className="details-container">
          <p className="text-light">
            <span>Email:</span> keanu.barnardd@gmail.com
          </p>
          <p className="text-light">
            <span>Phone:</span> 0455847718
          </p>
        </div>

        <div className="socials-container">
          <a
            href="https://github.com/KeanuBarnardd"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <i className="fa-brands fa-github git-link"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/keanu-b-262823118/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <i className="fa-brands fa-linkedin linked-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
