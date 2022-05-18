import React, { useEffect, useState } from "react";

// Import Components
import "./Contact.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import {Modal} from '../Modal/Modal';

export default function Contact() {
  // States
  const [showModal,setShowModal] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const openModal=()=>{
    setShowModal(true);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_h2x1j13", "template_zmo1u7j", e.target, "pXRndQpq6t6M_KCCc").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    // Let user know that email has been sent
    openModal();
    e.target.reset();
  };

  return (
    <div className="contact-section">
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
      <h1 data-aos="zoom-in-down" className="section-header">
        GET IN TOUCH
      </h1>
      <div data-aos="zoom-in-down" className="header-underline"></div>
      <form onSubmit={sendEmail} id="contact" className="contact-form">
        <label data-aos="fade-right" htmlFor="firstName" className="input-label">
          First Name
        </label>
        <input
          data-aos="fade-right"
          type="text"
          id="firstName"
          className="input-style full-w-input"
          name="from_name"
          required
        />

        <label data-aos="fade-right" htmlFor="email" className="input-label">
          Email
        </label>
        <input
          data-aos="fade-right"
          type="email"
          className="input-style full-w-input"
          name="email"
          required
        />
        <label data-aos="fade-right" htmlFor="Message" className="input-label">
          Message
        </label>
        <textarea
          data-aos="fade-right"
          type="text"
          className="input-style full-w-input"
          name="message"
          required
        />

        <button type="submit" data-aos="fade-right" className="btn contact-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
