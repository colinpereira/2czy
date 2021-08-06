import React from "react";
import useDate from "react-use-date";
import "./Footer.css";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Footer({ x, y }) {
  const date = useDate();

  return (
    <div className="footerContainer">
      <div className="dateTimeComponent">
        <h3 className="coordinates">
          ({x}, {y})
        </h3>

        <h3 className="footerLeft-date">{date.toUTCString()}</h3>
      </div>
      <div className="footerComponent">
        <div className="footerLeft">
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
    </div>
  );
}

export default Footer;
