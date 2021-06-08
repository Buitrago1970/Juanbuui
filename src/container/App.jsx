import React from "react";

//components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Footer from "../components/Footer";
import OthersProjects from "../components/OthersProjects";
import Contact from "../components/Contact";

//styles
import "../pages/styles/global.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <OthersProjects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
