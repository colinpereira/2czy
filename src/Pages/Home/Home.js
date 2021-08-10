import React, { useState, useEffect } from "react";
import "./Home.css";
import useMousePosition from "../../Hooks/useMouse";
import backVideo from "../../Assets/Videos/backVideo.mp4";
import UseAnimations from "react-useanimations";

// Component imports
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import ModelComp from "../../Components/Model/Model";

import Logo from "../../Assets/Images/2czyBlackLogo.png";
import rightArrow from "react-useanimations/lib/arrowDown";
import leftArrow from "react-useanimations/lib/arrowUp";

function Home() {
  const { x, y } = useMousePosition();
  const [text, setText] = useState(true);

  const handleText = () => {
    if (text) {
      setText(false);
    } else {
      setText(true);
    }
  };
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
            {text ? (
              <div className="homeRightContentContainer">
                <p className="aboutContentp">
                  2czy ltd. since 2018 is more than just a lifestyle brand. It
                  is a multi-faceted design house working on advanced
                  architectural solutions that supports the ecosystem; embraced
                  by contemporary culture, this dynamic body of work is a
                  trailblazer, transmitting a new league of ideas through
                  <b>2world</b>. Operating from Catalunya, 2czy is progressively
                  working towards delivering and producing physical results,
                  whilst cataloguing and showcasing ongoing studies
                </p>
                <UseAnimations
                  animation={rightArrow}
                  strokeColor="#fff"
                  size="35"
                  className="arrowIcon"
                  onClick={handleText}
                />
              </div>
            ) : (
              <div className="homeRightContentContainer">
                <h3>What is 2WORLD ?</h3>
                <br />
                <p className="aboutContentp">
                  <b>figuratively</b>: 2world is a generative realm and creative
                  cultivation of its own uniqueness that encourages like-minded
                  individuals to embark on a journey where function and form
                  blend in a novel aesthetic that is dedicated to innovative
                  problem solving.
                </p>
                <br />
                <p className="aboutContentp">
                  <b>literally</b>: Fusing the number 2 on planet earth is
                  literally "2world". 2czy hovers over the world with the
                  purpose of conveying ideas that inform, build awareness and
                  solve; for the greater cause to tackle socio-economic and
                  ecological concerns.
                </p>
                <UseAnimations
                  animation={leftArrow}
                  strokeColor="#fff"
                  size="35"
                  className="arrowIcon"
                  onClick={handleText}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
