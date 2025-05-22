import React from "react";
import Header from "./Componets/header/Header";
import Nav from "./Componets/nav/Nav";
import Portfolio from "./portfolio/Portfolio";
import Experience from "./Componets/experience/Experience";
import Services from "./services/Services";
import About from "./Componets/about/About";
import Contact from "./Componets/contact/Contact";
import Footer from "./footer/Footer";
import Testimonials from "./testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
