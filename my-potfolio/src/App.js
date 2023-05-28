import React from "react";
import About from "./component/about";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skilss";
import Testimonials from "./component/Testimonials";
export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}