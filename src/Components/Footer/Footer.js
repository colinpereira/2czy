import React, { useState } from "react";
import useDate from "react-use-date";
import "./Footer.css";
import { Link, useHistory } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function Footer({ x, y }) {
  let history = useHistory();
  const date = useDate();
  const [arrowUp, setArrow] = useState(true);

  const handleArrow = () => {
    arrowUp ? setArrow(false) : setArrow(true);
  };

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
          <Link className="footLinks" to="/2contact">
            <h4>2CONTACT</h4>
          </Link>
        </div>
        <div className="footerMid">
          {arrowUp ? (
            <a onClick={handleArrow} href="#2home">
              <KeyboardArrowDownIcon className="footArrow" />
            </a>
          ) : (
            <a onClick={handleArrow} href="#2about">
              <KeyboardArrowUpIcon className="footArrow" />
            </a>
          )}
        </div>
        <div className="footerRight">
          <Link className="footLinks" to="/2casestudy">
            2CASE STUDY
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
