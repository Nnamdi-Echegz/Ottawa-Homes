import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/** LEFT CONTAINER */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Get in touch with Ottawa Homes!</span>
          <span className="secondaryTextTwo">
            Experience unparalleled value with our commitment to securing the
            best of your real estate properties in Ottawa.
          </span>

          <div className="flexColStart contactModes">
            {/** first contact column */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+1 343-576-2301</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/** second contact mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+1 343-576-2301</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Up</div>
              </div>
            </div>

            {/** SECOND contact column */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+1 343-576-2301</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>

              {/** fourth contact mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">+1 343-576-2301</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/** RIGHT CONTAINER */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact2.jpg" alt="contact section hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
