import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section id="getstartedSec" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Ottawa Homes</span>
          <span className="secondaryText">
            Subscribe and find super attractive prices with access to our weekly
            news letters <br /> Find that perfect house today!
          </span>
          <button className="button">
            <a href="mailto:nnamdiechegini@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
