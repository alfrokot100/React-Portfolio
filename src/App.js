import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Cv from "./Components/Cv"
import Portfolio from "./Components/Projects"
import './App.css';

function App() {
  return (
    <Router>
            <Header /> {/* Headern syns på alla sidor */}

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
