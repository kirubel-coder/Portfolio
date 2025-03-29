import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProjectPage.css';

function Project3Page() {
  return (
    <div className='project3-page'>
        <div className="first">
            <img className='first-img' src="../src/assets/danat1.png" />
        </div>
        <div className="second">
           <h1>Description</h1>
              <p>Another exciting project in my portfolio is a landing page I built for a local company called Danat PLC. The purpose of this project was to create a visually appealing and highly functional web presence that effectively represents the company’s brand and services.

The landing page is designed with a clean and modern layout, ensuring a seamless user experience. It features well-structured sections highlighting the company’s mission, services, and contact information, making it easy for potential customers to learn about the business. Additionally, it is fully responsive, ensuring optimal performance across different devices.

This project allowed me to refine my front-end development skills, focusing on UI/UX design, responsiveness, and performance optimization. It also gave me experience in working with a real-world client, understanding their requirements, and delivering a tailored solution that meets their business needs.</p>
            </div>
            <div className="third">
        <div className="third-left">
            <h1>Programming Languages</h1>
              <ul>
                <li>✅JavaScript</li>
                <li>✅HTML</li>
                <li>✅CSS</li>
              </ul>
            </div>
            <div className="third-middle">
              <h1>Frameworks</h1>
              <ul>
                <li>✅React.js</li>
              </ul>
            </div>
            <div className="third-right">
                <h1>Project Duration</h1>
                <ul>
                    <li>✅2 weeks</li>
                </ul>
            </div>
            
            </div>
            <div className="fourth">
                <img src="../src/assets/danat2.png" />
                <img src="../src/assets/danat3.png" />
                <img src="../src/assets/danat4.png" />
            </div>
    </div>
  )
}

export default Project3Page