import React from "react";
import "./contact.css";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8u22q17",
        "template_p7iukjc",
        form.current,
        "ux3Zo24c-3DD70qpA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur"
            style={{ background: "#abf1ff94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="Send" className="button" />
          <div
            className="blur c-blur"
            style={{ background: "var(--purple)" }}
          ></div>
          <span>{done && "Merci d'avoir me contacter"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
