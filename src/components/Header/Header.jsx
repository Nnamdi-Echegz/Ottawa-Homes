import React, { useState } from "react";
import "./Header.css";
import "../Residencies/Residencies"
import "../Value/Value"
import "../Contact/Contact"
import "../GetStarted/GetStarted"
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  {/** if screen width less than 800, then check if the menu is not opened, then push our menu to the -100%(which means out of view) */}
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo4.png" alt="logo" width={100} />

        <OutsideClickHandler onOutsideClick={()=> {setMenuOpened(false)}}>
        <div className="flexCenter h-menu"
        style={getMenuStyles(menuOpened)}
        >
          <a href="#residenciesSec"> Residencies </a>
          <a href="#valuesSec"> Our Values </a>
          <a href="#contactSec"> Contact Us </a>
          <a href="#getstartedSec"> Get Started </a>
          <button className="button">
            <a href=""> Contact </a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick = {()=>setMenuOpened((prev)=>!prev)}> {/**when use state is true it will be converted to false & viseversa */}
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
