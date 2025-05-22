import React from "react";
import "./About.css";
import me from "../../assets/me.png";
import { TbAwardFilled } from "react-icons/tb";
import { ImUsers } from "react-icons/im";
import { FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <TbAwardFilled className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Year Working Experience</small>
            </article>
            <article className="about_card">
              <ImUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about_card">
              <FaFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Laboris mollit nostrud reprehenderit mollit mollit deserunt ullamco.
            Ex ullamco id aliquip esse duis laboris duis duis. Do consequat elit
            amet cupidatat aliquip do pariatur est officia. Veniam qui commodo
            ipsum eu commodo cupidatat in deserunt non cupidatat ex adipisicing.
            Cillum aliquip commodo enim irure minim Lorem sunt fugiat ullamco
            est sint exercitation cupidatat. Officia Lorem in sint enim do
            pariatur.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
