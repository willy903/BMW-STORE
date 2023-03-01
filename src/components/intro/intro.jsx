import React from 'react';
import './intro.css';
import GitHub from '../../image/GitHub.png';
import Instagram from '../../image/Instagram.png';
import Linkedin from '../../image/linkedin.png';
import boy from '../../image/boy.png';
import vector1 from '../../image/vector1.png';
import vector2 from '../../image/vector2.png';


const intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Willy JH</span>
                <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, pariatur eius dolore cupiditate amet hic sequi.
                </span>
            </div>
            <button className="button i-button">
                Hire me
            </button>
            <div className="i-icon">
                <img src={GitHub} alt="GitHub" />
                <img src={Linkedin} alt="Linkedin" />
                <img src={Instagram} alt="Instagram" />
            </div>
        </div>
        <div className="i-right">
            i'am right side
        </div>
    </div>
  )
}

export default intro