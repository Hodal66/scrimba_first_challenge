import React from "react";

function MainContent(props) {
  return (
    <div className={props.darkMode ? "main__content-container" : "right"}>
      <h1>Fan Facts About React </h1>
      <div>
        <ul>
          <li>Was Orginaly Created by jon walkey</li>
          <li>Has Well 1000k Stars in gitHub</li>
          <li>Is Maintained by faceBook</li>
          <li>Power thousand apps including mobile apps </li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;
