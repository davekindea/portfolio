import React, { useState } from 'react';
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  
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
          <a href="#home" className="navbar__link"><li>HOME</li></a>
          <a href="#about" className="navbar__link"><li>ABOUT</li></a>
          <a href="#services" className="navbar__link"><li>SERVICES</li></a>
          <a href="#portfolio" className="navbar__link"><li>PORTFOLIO</li></a>
          <a href="#certificates" className="navbar__link"><li>CERTIFICATES</li></a>
          <a href="#contacts" className="navbar__link"><li>CONTACTS</li></a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
