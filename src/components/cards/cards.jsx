import React from 'react'
import './cards.css'
const cards = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default cards