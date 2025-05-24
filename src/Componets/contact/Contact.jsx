import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BiLogoMessenger } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>COntact Me</h2>

      <div className="container contact_conatiner">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>quentinskinard@gmail.com</h5>
            <a href="mailto:quentinskinard@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BiLogoMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Quentin Kinard</h5>
            <a href="https://m.me/quentin.kinard" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <FaLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5></h5>
            <a href="https://linkedin.com/in/quentinkinard">Send a Message</a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Full Name"
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
