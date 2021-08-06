import React, { useState, useEffect } from "react";
import "./Home.css";
import useMousePosition from "../../Hooks/useMouse";

// Component imports
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Home() {
  const { x, y } = useMousePosition();

  return (
    <div className="homeContainer">
      <Navbar />
      <div className="homeFooter">
        <Footer x={x} y={y} />
      </div>
    </div>
  );
}

export default Home;
