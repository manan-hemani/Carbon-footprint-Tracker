import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Instructions from "./components/instruction.jsx";
import Main from "./components/main.jsx";
import Result from "./components/result.jsx";
import Reduce from "./components/reduce.jsx";

// All the routes of the pages used to navigate using React Router v6
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about.jsx" element={<About />} />
        <Route path="/contact.jsx" element={<Contact />} />
        <Route path="/instruction.jsx" element={<Instructions />} />
        <Route path="/main.jsx" element={<Main />} />
        <Route path="/result.jsx" element={<Result />} />
        <Route path="/reduce.jsx" element={<Reduce />} />
      </Routes>
    </>
  );
}

export default App;
