import React from "react";
import "./services.css";
import Cards from "../cards/cards";
import HeartEmoji from "../../image/heartemoji.png";
import Glasses from "../../image/glasses.png";
import Humble from "../../image/humble.png";
import cv from "../../image/cv.pdf";

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio libero
          maiores Hic, beatae nobis?
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a href={cv} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "19rem" }}>
          <Cards
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Cards
            emoji={Glasses}
            heading={"Developper"}
            detail={"Html, Css, Javascript, React"}
          />
        </div>
        <div style={{ top: "19rem", left: "13rem" }}>
          <Cards
            emoji={Humble}
            heading={"UX/UI"}
            detail={
              "Lorem ispun dummy text are usually use in section where you are lazy"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
