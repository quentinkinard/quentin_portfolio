import React from "react";
import "./Portfolio.css";
import testimg1 from "../assets/testimg1.jpg";
import testimg2 from "../assets/testimg2.jpg";
import testimg3 from "../assets/testimg3.jpg";
import testimg4 from "../assets/testimg4.jpg";
import testimg5 from "../assets/testimg5.jpg";
import testimg6 from "../assets/testimg6.jpg";

const data = [
  {
    id: 1,
    image: testimg1,
    title: "Queflix",
    github: "https://github.com/quentinkinard/queflix",
  },
  {
    id: 2,
    image: testimg2,
    title: "Arrowverse",
    github: "https://github.com/quentinkinard/arrowverse",
  },
  {
    id: 3,
    image: testimg3,
    title: "The Great Linkerator",
    github: "https://github.com/quentinkinard/The_Great_Linkerator",
  },
  {
    id: 4,
    image: testimg4,
    title: "Dogs List",
    github: "https://github.com/quentinkinard/Dogs_List",
  },
  {
    id: 5,
    image: testimg5,
    title: "Anime List",
    github: "https://github.com/quentinkinard/anime_list",
  },
  {
    id: 6,
    image: testimg6,
    title: "Harvard Art Project",
    github: "https://github.com/quentinkinard/Harvard_Art_Project",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href="" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
