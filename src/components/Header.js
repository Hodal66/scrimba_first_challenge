import React from "react";
import reactLogo from "../assets/logos_react.png";
function Header() {
  return (
    <div>
      <header>
        <nav className="nav-container">
          <img src={reactLogo} alt="react Logo" />
          <h1>Rearn React</h1>
        </nav>

        <h2>React Course project 1</h2>
      </header>
    </div>
  );
}

export default Header;
