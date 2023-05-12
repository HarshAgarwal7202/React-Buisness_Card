import React from "react";
import Image from "./Image";
import Info from "./Info";
import Button from "./Button";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";
import linkedin from "../images/linkedin.png";
import mail from "../images/mail.png";
const DigitalBuisnessCard = () => {
  return (
    <div className="Container">
      <div className="ImagePart">
        <Image />
      </div>
      <div className="MainPart">
        <Info />
        <div className="ButtonPart">
          <Button
            bgcolor="white"
            imgshow={mail}
            textcolor="black"
            text=" Email"
          />
          <Button
            bgcolor="#5093E2"
            imgshow={linkedin}
            textcolor="white"
            text=" Linkedin"
          />
        </div>
        <About />
        <Interest />
      </div>
      <Footer />
    </div>
  );
};
export default DigitalBuisnessCard;
