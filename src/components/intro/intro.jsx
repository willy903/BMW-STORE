import React from "react";
import "./intro.css";
import FloatingDiv from "../FloatingDiv/floatingDiv";
import GitHub from "../../image/github.png";
import Instagram from "../../image/instagram.png";
import Linkedin from "../../image/linkedin.png";
import vector1 from "../../image/Vector1.png";
import vector2 from "../../image/Vector2.png";
import boy from "../../image/boy.png";
import crown from "../../image/crown.png";
import thumbsup from "../../image/thumbup.png";
import glassesimoji from "../../image/glassesimoji.png";

const intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Willy JH</span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
            pariatur eius dolore cupiditate amet hic sequi.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icon">
          <img src={GitHub} alt="GitHub" />
          <img src={Linkedin} alt="Linkedin" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" srcset="" />
        <div style={{top: '-4%',left: '68%'}}>
            <FloatingDiv image={crown} text1="Web" text2="Developper"/>
        </div>
        <div style={{top: '18rem', left: '0rem'}}>
            <FloatingDiv image={thumbsup} text1="Best design" text2="Award"/>
        </div>
        <div className="blur" style={{background : "rgb(238 210 255)"}}></div>
        <div className="blur" style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem'
        }}></div>
      </div>
    </div>
  );
};

export default intro;
