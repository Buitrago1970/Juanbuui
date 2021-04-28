import React from "react";

//components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Footer from "../components/Footer";

//styles
import "../pages/styles/global.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Footer />
    </>
  );
};

export default App;
