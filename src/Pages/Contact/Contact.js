import React from "react";
import useMousePosition from "../../Hooks/useMouse";
import "./Contact.css";

import UseAnimations from "react-useanimations";
import instagram from "react-useanimations/lib/instagram";
import twitter from "react-useanimations/lib/twitter";

// Component imports
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Contact() {
  const { x, y } = useMousePosition();
  return (
    <>
      <Navbar />
      <div className="contactContainer">
        <div className="contactFormContainer">
          <h1>GET IN TOUCH</h1>
          <form action="https://formspree.io/f/xqkwyvbz" method="POST">
            <div className="formInputWrapper">
              <input type="text" placeholder="Full Name" name="name" />
              <input type="email" placeholder="Email" name="_replyto" />
              <textarea placeholder="Message" name="message" />
              <button className="glow-on-hover" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="contact-IconContainer">
          <a
            href="https://www.instagram.com/2czy__ltd/"
            target="_blank"
            className="instagramIconContainer"
          >
            <UseAnimations
              animation={instagram}
              strokeColor="#fff"
              size="50"
              className="instagramIcon"
            />
          </a>
          <a
            href="https://twitter.com/aaron_2czy"
            target="_blank"
            className="instagramIconContainer"
          >
            <UseAnimations
              animation={twitter}
              strokeColor="#fff"
              size="50"
              className="instagramIcon"
            />
          </a>
        </div>
      </div>
      <Footer x={x} y={y} showArrow={false} />
    </>
  );
}

export default Contact;

{
  /* <div className="contact-IconContainer">
  <a
    href="https://www.instagram.com/2czy__ltd/"
    target="_blank"
    className="instagramIconContainer"
  >
    <UseAnimations
      animation={instagram}
      strokeColor="#fff"
      size="150"
      className="instagramIcon"
    />
  </a>
  <a
    className="emailIconContainer"
    href="mailto:2czyltd@gmail.com?subject = Feedback&body = Message"
    target="_blank"
  >
    <MailOutlineIcon className="emailIcon" />
  </a>
</div>; */
}
