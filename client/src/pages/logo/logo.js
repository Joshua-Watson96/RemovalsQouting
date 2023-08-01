import React from "react";
import logoImage from "./images/wmlogo.PNG";
import "./logo.css"

export const Logo = () => {
  return (
    <body className="logoBody">
      <div>
        <img src={logoImage} alt="WhatsMoving" />
      </div>
    </body>
  );
};
