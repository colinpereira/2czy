import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Component imports
import Home from "./Pages/Home/Home.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import CaseStudy from "./Pages/CaseStudy/CaseStudy.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Error from "./Pages/Error/Error.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/2shop" element={<Error />} />
          <Route path="/2casestudy" element={<Error />} />
          <Route path="/2contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
