import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-flex">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <h1>Vinay Yadav</h1>
          </Link>
        </div>
        <div className={`menu-btn${isMenuOpen ? ' open' : ''}`} onClick={toggleMenu}>
          <div className="menu-btn__lines"></div>
        </div>
        <div className={`navbar-right${isMenuOpen ? ' active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
            <li><Link to="/education" onClick={() => setIsMenuOpen(false)}>Education</Link></li>
            <li><Link to="/experience" onClick={() => setIsMenuOpen(false)}>Experience</Link></li>
            <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;