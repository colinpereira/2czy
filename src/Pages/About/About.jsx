import React, { useState, useEffect } from "react";
import "./About.css";
import UseAnimations from "react-useanimations";
import useMousePosition from "../../Hooks/useMouse.jsx";

// Component imports
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

import Logo from "../../Assets/Images/2czyBlackLogo.png";
import rightArrow from "react-useanimations/lib/arrowDown";
import leftArrow from "react-useanimations/lib/arrowUp";

function About() {
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
      <Navbar />
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
                  The shift from digital to physical has been a long-term
                  evolution. Born from a Gulf perspective and positioned outside
                  the traditional design and fashion megasphere, 2CZY has
                  synthesized its own unique philosophy over time.
                  <br />
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
                <p className="aboutContentp">
                  Years in the making within the digital ecosystem, 2CZY has
                  finally arrived. With a foundation built fragment by fragment,
                  the author, CZY, is taking the leap: transitioning from
                  building a digital world to materializing it in the physical
                  one.
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
      <Footer x={x} y={y} showArrow={true} />
    </>
  );
}

export default About;
