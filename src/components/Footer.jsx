import React from "react";
import whatsapp from "../images/whatsapp.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
const Footer = () => {
  return (
    <div className="footerSection">
      <div className="mainImg">
        <img src={instagram} alt="" />
      </div>
      <div className="mainImg">
        <img src={facebook} alt="" />
      </div>
      <div className="mainImg">
        <img src={twitter} alt="" />
      </div>
      <div className="mainImg">
        <img src={whatsapp} alt="" />
      </div>
    </div>
  );
};
export default Footer;
