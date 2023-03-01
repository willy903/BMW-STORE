import React from "react";
import './navbar.css';

const navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Willy</div>
        <span>Toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
            <li>Home</li>
            <li>services</li>
            <li>Experience</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button n-button">
            Contact us
        </button>
      </div>
    </div>
  );
};

export default navbar;
