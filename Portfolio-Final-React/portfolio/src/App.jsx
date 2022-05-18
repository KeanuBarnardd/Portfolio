import React from "react";

// Import all components
import "./App.scss";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import SidePanels from "./Components/Side Panels/SidePanels";

export default function App() {
  return (
    <>
      <SidePanels></SidePanels>
      <Navbar />
      <Header></Header>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
