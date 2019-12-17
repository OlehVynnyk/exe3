import React from "react";
import "./style.module.css";

const Header = () => {
  return (
    <div class="header boldText">
      <div style={{ paddingRight: "15px" }}>Main Page</div>
      <div>/</div>
      <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>Pions</div>
      <div>/</div>
      <div style={{ paddingRight: "15px", paddingLeft: "15px" }}>Holland</div>
      <div>/</div>
      <div style={{ paddingLeft: "15px" }} class="greyText">
        Pions Rose
      </div>
    </div>
  );
};

export default Header;
