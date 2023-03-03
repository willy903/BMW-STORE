import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur"
                    style={{background: "#abf1ff94"}}
                ></div>
            </div>
        </div>
        <div className="c-right">
            <form action="">
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='email_name' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="submit" value="Send" className='button'/>
                <div
                    className='blur c-blur'
                    style={{background: "var(--purple)"}}
                ></div>

            </form>
        </div>
    </div>
  )
}

export default contact