import React, { useState } from "react";
import "./Home.css";
import useMousePosition from "../../Hooks/useMouse";
import backVideo from "../../Assets/Videos/backVideo.mp4";

// Component imports
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import ModelComp from "../../Components/Model/Model";

function Home() {
  const { x, y } = useMousePosition();

  return (
    <>
      <div className="homeContainer" id="2home">
        <Navbar />
        <video src={backVideo} autoPlay loop muted />
        <div className="ThreeDModel">
          <ModelComp />
        </div>
        <Footer x={x} y={y} />
      </div>
      <div className="about" id="2about">
        <h1>Hello</h1>
      </div>
    </>
  );
}

export default Home;
