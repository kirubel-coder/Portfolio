import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProjectPage.css';
import closet1 from '../assets/closet1.png';
import closet2 from '../assets/closet2.png';
import closet3 from '../assets/closet3.png';
import closet4 from '../assets/closet4.png';

function Project2Page() {
  return (
    <div className='project2-page'>
      <div className="first">
        <img className='first-img' src={closet1} alt="Clothing Store 1" />
      </div>
      <div className="second">
        <h1>Description</h1>
        <p>
          Another key project in my portfolio is a shopping web application focused on selling clothing items. The goal of this project was to create a seamless and user-friendly online shopping experience. The platform allows customers to browse a curated selection of clothing, view product details, and make purchases efficiently.
          Designed with a sleek and modern interface, the web app ensures smooth navigation and an intuitive shopping process. Additionally, only the store owner has the ability to add or remove products.
          From a technical perspective, the application is built ensuring high performance and scalability. This project showcases my ability with integrated functionalities.
        </p>
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
            <li>✅Styled Components</li>
          </ul>
        </div>
        <div className="third-right">
          <h1>Project Duration</h1>
          <ul>
            <li>✅3 weeks</li>
          </ul>
        </div>
      </div>
      <div className="fourth">
        <img src={closet2} alt="Clothing Store 2" />
        <img src={closet3} alt="Clothing Store 3" />
        <img src={closet4} alt="Clothing Store 4" />
      </div>
    </div>
  );
}

export default Project2Page;