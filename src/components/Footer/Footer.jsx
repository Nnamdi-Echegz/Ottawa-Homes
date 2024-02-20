import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="padddings innerWidth flexCenter f-container">
        {/** left side */}
        <div className="flexColStart f-left">
          <img
            src="./logo4.png"
            alt="company logo"
            width={120}
            className="footerlogo"
          />

          <span>
            Our Vision is to make sure that all customers feel
            <br /> satisfied after aquiring a property.
          </span>
        </div>
        {/**Right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryTextTwo">
            187 Strandherd Fraserfields, Ottawa, Canada
          </span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
