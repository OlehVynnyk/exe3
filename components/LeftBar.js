import React from "react";
import "./style.module.css";
import picture from "../img/picture.jpg";

const LeftBar = () => {
  return (
    <div>
      <div class="flex">
        <div class="smallCard">
          <img style={{ marginTop: "40px" }} class="smallCard" src={picture} />
          <img class="smallCard" src={picture} />
          <img class="smallCard" src={picture} />
          <img class="smallCard" src={picture} />
        </div>
        <img class="bigCard" src={picture} />
      </div>
    </div>
  );
};

export default LeftBar;
