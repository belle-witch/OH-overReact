import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path='/about'>
        <About />
        </Route>
        <Route path='/projects'>
        <Projects />
        </Route>
        <Route path='/contact'>
        <Contact />
        </Route>
      </Router>
    </>
  );
}
