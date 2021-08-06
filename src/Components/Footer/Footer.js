import React from "react";
import useDate from "react-use-date";
import "./Footer.css";

function Footer({ x, y }) {
  const date = useDate();

  return (
    <div className="footerContainer">
      <div className="footerLeft">
        <div className="footerLeft-coordinates">
          <h3>({x}, </h3>
          <h3> {y})</h3>
        </div>
        <h3>{date.toUTCString()}</h3>
      </div>
      <div className="footerMid"></div>
      <div className="footerRight"></div>
    </div>
  );
}

export default Footer;
