import React from "react";
import useMousePosition from "../../Hooks/useMouse";
import "./Error.css";

import Logo from "../../Assets/Images/2czyBlackLogo.png";

// Component imports
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Error() {
  const { x, y } = useMousePosition();
  return (
    <>
      <div className="errorPage">
        <Navbar />
        <div className="errorContainer">
          <img src={Logo} className="blackLogo-Error" />
          <h1>UNDER MAINTENANCE</h1>
          <h3 className="errorMessage">we are loading</h3>
        </div>
        <Footer x={x} y={y} showArrow={false} />
      </div>
    </>
  );
}

export default Error;
