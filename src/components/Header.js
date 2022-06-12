import React from "react";
import DarkIcon from "../images/icon-moon.svg";
import LightIcon from "../images/icon-sun.svg";


const Header = ({ themeLight, setThemeLight }) => {
    const switchThemeIcon = themeLight ? DarkIcon : LightIcon;
  
    const changeTheme = () => {
      setThemeLight(!themeLight);
    };
  
  return (
    <header>
      <h1>TODO</h1>
      <button className="btnThemeSwitch" onClick={changeTheme}>
        <img src={switchThemeIcon} alt="Dark Theme" />
      </button>
    </header>
  );
};
export default Header;
