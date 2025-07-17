import React, { useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import newMenu_icon from '../assets/newMenu_icon.png';  
import newCloseMenu_icon from '../assets/newCloseMenu_icon.png';

function Navbar() {
  const menuRef = useRef();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
          src={newMenu_icon}
          alt="Open Menu"
          style={{ display: menuOpen ? 'none' : 'block' }}
        />
      </div>
      <div ref={menuRef} className={`navbar-right${menuOpen ? ' open' : ''}`}>
        <img
          className="menu-close-icon"
          onClick={closeMenu}
          src={newCloseMenu_icon}
          alt="Close Menu"
          style={{ display: menuOpen ? 'block' : 'none' }}
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