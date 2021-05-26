import React from "react";

//components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Footer from "../components/Footer";
import OthersProjects from "../components/OthersProjects";

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
      <Footer />
    </>
  );
};

export default App;
