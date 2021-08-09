import React from "react";
import useMousePosition from "../../Hooks/useMouse";
import "./Contact.css";

import UseAnimations from "react-useanimations";
import instagram from "react-useanimations/lib/instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

// Component imports
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Contact() {
  const { x, y } = useMousePosition();
  return (
    <>
      <Navbar />
      <div className="contactContainer">
        <h1>GET IN TOUCH</h1>
        <div className="contact-IconContainer">
          <a
            href="https://www.instagram.com/2czy__ltd/"
            target="_blank"
            className="instagramIcon"
          >
            <UseAnimations
              animation={instagram}
              strokeColor="#fff"
              size="300"
            />
          </a>
          <a
            className="emailIcon"
            href="mailto:2czyltd@gmail.com?subject = Feedback&body = Message"
          >
            <MailOutlineIcon />
          </a>
        </div>
      </div>
      <Footer x={x} y={y} />
    </>
  );
}

export default Contact;
