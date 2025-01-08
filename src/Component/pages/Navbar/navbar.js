import React, { useState } from 'react';
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  
  };
  




  

  

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <h2 className="navbar__name">Dawit Kindea</h2>

      <div className="hamburger" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>

      <div className={`navbar__menu ${menuOpen ? 'active' : ''}`}>
      <ul className="navbar__list">
          <a href="#home" className="navbar__link" onClick={closeMenu}><li>HOME</li></a>
          <a href="#about" className="navbar__link" onClick={closeMenu}><li>ABOUT</li></a>
          <a href="#services" className="navbar__link" onClick={closeMenu}><li>SERVICES</li></a>
          <a href="#portfolio" className="navbar__link" onClick={closeMenu}><li>PORTFOLIO</li></a>
          <a href="#certificates" className="navbar__link" onClick={closeMenu}><li>CERTIFICATES</li></a>
          <a href="#contacts" className="navbar__link" onClick={closeMenu}><li>CONTACTS</li></a>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
