import React, { useState, useEffect } from "react";
import "./Home.css";
import useMousePosition from "../../Hooks/useMouse.jsx";
import backVideo from "../../Assets/Videos/backVideo.mp4";

// Component imports
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

import ModelComp from "../../Components/Model/Model.jsx";

function Home() {
  const { x, y } = useMousePosition();

  return (
    <>
      {/* <div className="loaderContainer">
        <div className="loader"></div>
      </div> */}
      <div className="homeContainer" id="2home">
        <Navbar />
        <video src={backVideo} autoPlay loop muted />
        <div className="ThreeDModel">
          <ModelComp />
        </div>
        <Footer x={x} y={y} showArrow={true} />
      </div>
    </>
  );
}

export default Home;
