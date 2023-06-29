import React from "react";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Skills from "./skills";
import Footer from "./footer";
import Projects from "./projects";
import Header from "./header";
import LCP from "./lcp";
import Safari from "./safari";

function App(): React.ReactElement {
  return (
    <>
      <Safari />
      <LCP />
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
