import React from "react";
import "./style.module.css";
import success from "../img/success.svg";
import car from "../img/car.svg";
import archive from "../img/archive.svg";
import like from "../img/like.svg";

const RightBar = () => {
  return (
    <div className="main">
      <div>
        <div class="like">
          <div class="header1">Flowers Pions</div>
          <img src={like} />
        </div>
        <div class="colorText">50$</div>
        <div style={{ paddingTop: "17px" }} class="greyText">
          Super cool flowers
        </div>
      </div>
      <div style={{ paddingTop: "35px" }} class="boldText">
        Colors
      </div>
      <div>
        <div
          style={{ backgroundColor: "red", marginLeft: "0px" }}
          class="circle"
        ></div>
        <div style={{ backgroundColor: "blue" }} class="circle"></div>
        <div style={{ backgroundColor: "green" }} class="circle"></div>
        <div style={{ backgroundColor: "black" }} class="circle"></div>
        <div style={{ backgroundColor: "yellow" }} class="circle"></div>
      </div>
      <div style={{ paddingTop: "20px" }} class="boldText">
        Size
      </div>
      <div>
        <div style={{ marginLeft: "0px" }} class="roundedCircle">
          5pc.
        </div>
        <div class="roundedCircle">5pc.</div>
        <div class="roundedCircle">5pc.</div>
        <div class="roundedCircle">5pc.</div>
      </div>
      <div class="border" />
      <div class="button">Add</div>
      <div className="flexIcons">
        <img class="img" src={success} />
        <div class="boldText">In Stock</div>
      </div>
      <div className="flexIcons">
        <img class="img" src={archive} />
        <div style={{ display: "flex" }} class="boldText">
          You can take from
          <div
            style={{ fontSize: "17px", paddingLeft: "4px" }}
            class="colorText"
          >
            shop
          </div>
        </div>
      </div>
      <div class="greyText">tomorrow</div>
      <div className="flexIcons">
        <img class="img" src={car} />
        <div class="boldText">Delivery, 15$</div>
      </div>
      <div class="greyText">tomorrow</div>
    </div>
  );
};

export default RightBar;
