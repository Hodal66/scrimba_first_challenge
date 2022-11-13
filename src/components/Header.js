import React from "react";
import reactLogo from "../assets/logos_react.png";
import { FiToggleRight, FiToggleLeft } from "react-icons/fi";
function Header(props) {
  return (
    <div>
      <header className={props.darkMode ? "navDarkMode" : ""}>
        <nav className="nav-container">
          <img src={reactLogo} alt="react Logo" />
          <h1>Rearn React</h1>
        </nav>
        <h2>React Course project 1</h2>
        <div onClick={props.toggleToDarkMode} className="toggle">
          {props.darkMode ? <FiToggleLeft /> : <FiToggleRight />}
        </div>
      </header>
    </div>
  );
}

export default Header;
