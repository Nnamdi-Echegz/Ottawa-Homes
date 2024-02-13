import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              The Most Amazing <br />
              Properties
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety of properties that suite you very easliy</span>
            <span className="secondaryText">Zero hassle in finding your perfect choice of residence</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={5700} end={8200} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Premium Properties </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={530} end={1200} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Delighted Customers </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={15} />
                <span>+</span>
              </span>
              <span className="secondaryText"> National Recognitions </span>
            </div>
          </div>
        </div>
        {/* right side*/}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image2.png" alt="web hero image, a house" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
