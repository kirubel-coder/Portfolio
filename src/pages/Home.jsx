import React from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import Survice from '../components/Survice.jsx';
import Project from '../components/Project.jsx';
import Contact from '../components/Contact.jsx';
import upworkPfpCropped1 from "../src/assets/upworkPfpCropped1.jpg";

function Home() {
  return (
    <div>
      <Element name="home" className="hero-section">
        <div className="hero-left">
          <img className="top-profile" src={upworkPfpCropped1.jpg} alt="profile picture" />
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
            <img src="../src/assets/ppforAbout.jpg" alt="About me" />
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
            img="../src/assets/newFullstack.png"
            title="Fullstack development"
            detail=" I’m a full-stack developer who builds seamless, functional, and user-friendly web applications. From front-end design to back-end logic, I create scalable solutions that solve real-world problems💻🚀."
          />
          <Survice
            img="../src/assets/frontend_iconnew.png"
            title="Frontend development"
            detail="I specialize in frontend development, crafting intuitive and visually appealing user interfaces. I focus on creating seamless, responsive designs that enhance user experience🎨."
          />
          <Survice
            img="../src/assets/newBackendorg.png"
            title="Backend development"
            detail=" I have expertise in backend development, building robust server-side solutions and managing databases to ensure seamless functionality and performance⚙️."
          />
          <Survice
            img="../src/assets/webdesignnew.png"
            title="UX|UI designing"
            detail="I create intuitive and engaging UX/UI designs, focusing on delivering user-friendly interfaces that provide an exceptional experience. 🎨"
          />
        </div>
      </Element>

      <Element name="portfolio" className="project-section">
        <h1>Recent Works</h1>
        <div className="project-container">
          <Link to="/project1">
            <Project img="../src/assets/movierating1.png" title="Movie rating Website for Amharic movies" />
          </Link>
          <Link to="/project2">
            <Project img="../src/assets/closet1.png" title="Shopping WebApp" />
          </Link>
          <Link to="/project3">
            <Project img="../src/assets/danat1.png" title="Landing page" />
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