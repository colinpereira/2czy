import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navLeft">
        <Link className="navLinks" to="/">
          2HOME
        </Link>
      </div>

      <div className="navMid">
        <Link className="navLinks" to="/">
          <span></span>
        </Link>
      </div>

      <div className="navRight">
        <Link className="navLinks" to="/">
          2SHOP
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
