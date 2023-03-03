import React from "react";
import upWork from '../../image/Upwork.png'
import Fiver from '../../image/fiverr.png'
import Amazon from '../../image/amazon.png'
import Shopify from '../../image/Shopify.png'
import Facebook from '../../image/Facebook.png'

import "./works.css";

const works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Work for all these</span>
        <span>Brands & clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio libero
          maiores Hic, beatae nobis?
          <br />
          ispum is simpley dummy text of printing sjhdjshjdhsjd sdlskjj sdjhuhzu
          sqkj
          <br />
          ispum is simpley dummy text of printing sjhdjshjdhsjd sdlskjj sdjhuhzu
          sqkj
          <br />
          ispum is simpley dummy text of printing sjhdjshjdhsjd sdlskjj sdjhuhzu
          sqkj
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
                <img src={upWork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiver} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
        </div>
        {/* background circle*/}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default works;
