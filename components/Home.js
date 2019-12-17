import React from "react";
import RightBar from "./RightBar";
import LeftBar from "./LeftBar";
import Header from "./Header";
import "./style.module.css";

const Home = () => {
  return (
    <div class="home">
      <Header />
      <div className="flex">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
