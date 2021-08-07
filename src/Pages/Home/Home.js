import React, { useState, useEffect } from "react";
import "./Home.css";
import useMousePosition from "../../Hooks/useMouse";

// Component imports
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Canvas from "../../Components/MouseTrail/Canvas";

function Home() {
  const { x, y } = useMousePosition();

  return (
    <div className="homeContainer">
      <Navbar />
      <Footer x={x} y={y} />
    </div>
  );
}

export default Home;
