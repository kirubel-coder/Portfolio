import React, { useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  const menuRef = useRef();
  const location = useLocation();

  const openMenu = () => {
    menuRef.current.style.right = '-60px';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  const isProjectPage = location.pathname.startsWith('/project');

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="back-to-home">
          <h2 id="home">Kirubel</h2>
        </Link>
        <img
          className="menu-icon"
          onClick={openMenu}
          src="../src/assets/newMenu_icon.png"
          alt="Open Menu"
        />
      </div>
      <div ref={menuRef} className="navbar-right">
        <img
          className="menu-close-icon"
          onClick={closeMenu}
          src="../src/assets/newCloseMenu_icon.png"
          alt="Close Menu"
        />
        {!isProjectPage && (
          <>
            <ScrollLink to="home" className='scroll' smooth={true} duration={500} onClick={closeMenu}>
              Home
            </ScrollLink>
            <ScrollLink to="about" className='scroll' smooth={true} duration={500} onClick={closeMenu}>
              About me
            </ScrollLink>
            <ScrollLink to="portfolio" className='scroll' smooth={true} duration={500} onClick={closeMenu}>
              Portfolio
            </ScrollLink>
            <ScrollLink to="contact" className='scroll' smooth={true} duration={500} onClick={closeMenu}>
              Contact
            </ScrollLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;