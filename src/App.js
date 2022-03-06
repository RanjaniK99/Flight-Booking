import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Flight from "./component/Flight";
import About from "./component/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Flight />} />
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
