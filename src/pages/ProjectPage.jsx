import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../css/ProjectPage.css';

function ProjectPage() {
  return (
    <div className='project-page'>
        <div className="first">
            <img className='first-img'  src="../src/assets/movierating1.png" />
        </div>
        <div className="second">
           <h1>Description</h1>
           <div>
              <p>One of my standout projects is this movie rating web application, designed specifically for Amharic movies. Growing up in Ethiopia, I noticed a significant gap in the film industry—there was no dedicated platform for audiences to share their opinions on movies. As a programmer, my goal is to leverage technology to solve real-world problems, and this project is a direct response to that challenge.

The platform requires users to be authenticated before they can rate a movie. Once authenticated, their information is securely stored in a MongoDB database, ensuring they can log in and access their ratings anytime. Additionally, the website features an admin panel, where only administrators have the ability to add or remove movies. User ratings are stored in the database, calculated on the backend, and displayed as an average rating alongside each movie, providing a comprehensive and structured feedback system.</p></div>
            </div>
            <div className="third">
        <div className="third-left">
            <h1>Programming Languages</h1>
              <ul>
                <li>✅JavaScript</li>
                <li>✅HTML</li>
                <li>✅CSS</li>
                <li>✅NoSQL</li>
              </ul>
            </div>
            <div className="third-middle">
              <h1>Frameworks</h1>
              <ul>
                <li>✅React.js</li>
                <li>✅Node.js</li>
                <li>✅MongoDB</li>
                <li>✅Express.js</li>
              </ul>
            </div>
            <div className="third-right">
                <h1>Project Duration</h1>
                <ul>
                    <li>✅1 month</li>
                </ul>
            </div>
            
            </div>
            <div className="fourth">
                <img src="../src/assets/movierating2.png" />
                <img src="../src/assets/movierating3.png" />
                <img src="../src/assets/movieadmin4.png" />
                <img src="../src/assets/movieadmin5.png" />
            </div>
    </div>
  )
}

export default ProjectPage