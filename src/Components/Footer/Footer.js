import React from "react";
import useDate from "react-use-date";
import "./Footer.css";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Footer({ x, y }) {
  const date = useDate();

  return (
    <div className="footerContainer">
      <div className="footerLeft">
        <div className="footerLeft-coordinates">
          <h3>
            ({x}, {y})
          </h3>
        </div>
        <h3>{date.toUTCString()}</h3>
        <Link className="navLinks" to="/">
          <h4>2CONTACT</h4>
        </Link>
      </div>
      <div className="footerMid">
        <KeyboardArrowDownIcon className="footArrow" />
      </div>
      <div className="footerRight">
        <Link className="navLinks" to="/">
          2CASE STUDY
        </Link>
      </div>
    </div>
  );
}

export default Footer;
