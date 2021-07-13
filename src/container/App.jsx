import React from "react";

//components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Footer from "../components/Footer";
import OthersProjects from "../components/OthersProjects";
import Contact from "../components/Contact";
import ProjectContext from "../context/ProjectContext";
import initialState from "../initialState";
//styles
import "../pages/styles/global.css";

const App = () => {
  return (
    <>
      <ProjectContext.Provider value={initialState}>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <OthersProjects />
        <Contact />
        <Footer />
      </ProjectContext.Provider>
    </>
  );
};

export default App;
