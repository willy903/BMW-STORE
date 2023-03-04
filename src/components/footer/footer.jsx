import React from 'react'
import './footer.css'
import Wave from '../../image/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import GithHub from '@iconscout/react-unicons/icons/uil-github'

const footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: "100%"}} />
        <div className="footer-content">
            <span>willyjacquino@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <Facebook color='white' size='3rem'/>
                <GithHub color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default footer