import React from "react";
import "./Footer.css";
import CiteLogo from "./Img/Logos/Logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="CiteLogo">
          <img src={CiteLogo} alt="" />
        </div>
        <div className="AboutUs_Contact_Term">
          <p>About Us</p>
          <p>Contact</p>
          <p>Term & Conditions</p>
        </div>
        <div className="Social_Links">
          <p>
            <FaFacebookF /> Facebook
          </p>
          <p>
            <FaTwitter /> Twitter
          </p>
          <p>
            <FaInstagram /> Instagram
          </p>
        </div>
        <div className="Subcribe">
          <div className="sub-text">
            <p>Subcribe to our newsletter</p>
          </div>
          <div className="sub-input">
            <input type="email" placeholder="Email Address ..." />
            <button>OK</button>
          </div>
        </div>
        <div className="Address">
          <p>497 Evergreen Rd. Roseville, CA 95673</p>
          <p>+44 345 678 903</p>
          <p>adobexd@mail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
