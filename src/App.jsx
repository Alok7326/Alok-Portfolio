import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import ResumeDownload from "./components/ResumeDownload"; // Ensure correct path
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <ResumeDownload />
        <About />
        <PortFolio />
        <ContactForm />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
