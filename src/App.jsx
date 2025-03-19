import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import MyProjects from "./components/MyProjects";
import ResumeDownload from "./components/ResumeDownload"; // Ensure correct path

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <ResumeDownload />
        <About />
        <PortFolio />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
