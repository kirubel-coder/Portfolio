import React from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import Survice from '../components/Survice.jsx';
import Project from '../components/Project.jsx';
import Contact from '../components/Contact.jsx';
import upworkPfpCropped3 from "../assets/upworkPfpCropped3.jpg";
import ppforAbout from "../assets/ppforAbout.jpg";
import newFullstack from "../assets/newFullstack.png";
import frontend_iconnew from "../assets/frontend_iconnew.png";
import newBackendorg from "../assets/newBackendorg.png"; 
import webdesignnew from "../assets/webdesignnew.png";
import movierating1 from "../assets/movierating1.png";
import closet1 from "../assets/closet1.png";
import danat1 from "../assets/danat1.png";

function Home() {
  return (
    <div>
      <Element name="home" className="hero-section">
        <div className="hero-left">
          <img className="top-profile" src={upworkPfpCropped3} alt="profile picture" />
        </div>
        <div className="hero-right">
          <h1>Hey, I'm Kirubel Addis</h1>
          <h2>Fullstack web developer</h2>
          <a href="#contact">
            <button>Contact me</button>
          </a>
        </div>
      </Element>

      <Element name="about" className="about-section">
        <h1>About me</h1>
        <div className="about-content">
          <div className="about-left">
            <img src={ppforAbout} alt="About me" />
          </div>
          <div className="about-right block">
            <p>
              I am a passionate software developer with few years of experience in the tech industry. I thrive on solving real-world problems through code, transforming ideas into functional and visually appealing digital solutions. With strong skills in both designing and building websites, I create seamless and engaging user experiences while ensuring optimal performance. Whether it’s crafting intuitive interfaces or tackling complex software challenges, I am always eager to push the boundaries of innovation and deliver impactful solutions.⚡
            </p>
          </div>
        </div>
        <h1>Skills</h1>
        <div className="skill-content block">
          <div className="skill-left">
            <div className="skill">
              <p>NEXT.js</p>
              <hr />
            </div>
            <div className="skill">
              <p>React.js</p>
              <hr />
            </div>
            <div className="skill">
              <p>UX|UI design</p>
              <hr />
            </div>
          </div>
          <div className="skill-right">
            <div className="skill">
              <p>Node.js</p>
              <hr />
            </div>
            <div className="skill">
              <p>Express.js</p>
              <hr />
            </div>
            <div className="skill">
              <p>Mongodb</p>
              <hr />
            </div>
          </div>
        </div>
        <h1>Survices</h1>
        <div className="survice-container block">
          <Survice
            img={newFullstack}
            title="Fullstack development"
            detail=" I’m a full-stack developer who builds seamless, functional, and user-friendly web applications. From front-end design to back-end logic, I create scalable solutions that solve real-world problems💻🚀."
          />
          <Survice
            img={frontend_iconnew}
            title="Frontend development"
            detail="I specialize in frontend development, crafting intuitive and visually appealing user interfaces. I focus on creating seamless, responsive designs that enhance user experience🎨."
          />
          <Survice
            img={newBackendorg}
            title="Backend development"
            detail=" I have expertise in backend development, building robust server-side solutions and managing databases to ensure seamless functionality and performance⚙️."
          />
          <Survice
            img={webdesignnew}
            title="UX|UI designing"
            detail="I create intuitive and engaging UX/UI designs, focusing on delivering user-friendly interfaces that provide an exceptional experience. 🎨"
          />
        </div>
      </Element>

      <Element name="portfolio" className="project-section">
        <h1>Recent Works</h1>
        <div className="project-container">
          <Link to="/project1">
            <Project img={movierating1} title="Movie rating Website for Amharic movies" />
          </Link>
          <Link to="/project2">
            <Project img={closet1} title="Shopping WebApp" />
          </Link>
          <Link to="/project3">
            <Project img={danat1} title="Landing page" />
          </Link>
        </div>
        <h1 className="get-in">Get in touch</h1>
      </Element>

      <Element name="contact" id='contact' className="contact-section">
        <Contact />
      </Element>
    </div>
  );
}

export default Home;