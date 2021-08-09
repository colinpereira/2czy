import React, { useState, useEffect } from "react";
import "./Home.css";
import useMousePosition from "../../Hooks/useMouse";
import backVideo from "../../Assets/Videos/backVideo.mp4";

// Component imports
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import ModelComp from "../../Components/Model/Model";

import Logo from "../../Assets/Images/2czyBlackLogo.png";

function Home() {
  const { x, y } = useMousePosition();
  // const [spin, setSpin] = useState(true);

  // const handleSpin = () => {
  //   spin ? setSpin(false) : setSpin(true);
  //   console.log(spin);
  // };

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
        <Footer x={x} y={y} />
      </div>
      <div className="about" id="2about">
        <div className="aboutContentContainer">
          <div className="aboutContentLeft">
            <img
              src={Logo}
              // className={setSpin ? "blackLogo" : "blackLogoSpin"}
              // onClick={handleSpin}
              className="blackLogo"
            />
          </div>
          <div className="aboutContentRight">
            <p className="aboutContentp">
              2czy limited since 2018 is more than just a lifestyle brand it is
              a multi faceted design house working on advanced architectural
              solutions that supports the ecosystem; embraced by contemporary
              culture the body of work suggests a forward wave of ideas
              transmitting through <b>2world</b>. Operative in Catalunya, 2czy
              is working in progress to deliver and produce physical results
              whilst cataloguing and showcasing on going studies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
