// Navbar.jsx
import React, { useState, useEffect } from 'react';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    setIsOpen(false); // Close the menu when a link is clicked
  };

  useEffect(() => {
    // Update the active link color on page scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
          setActiveLink(`#${id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isOpen ? 'navbar--open' : ''}`}>
      <div className="navbar-logo">
        <img src="/Images/logo.png" alt="FitnessFusion Logo" />
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="#home" className={`navbar-link ${activeLink === '#home' ? 'active' : ''}`} onClick={() => handleLinkClick('#home')}>HOME</a>
        <a href="#about" className={`navbar-link ${activeLink === '#about' ? 'active' : ''}`} onClick={() => handleLinkClick('#about')}>ABOUT</a>
        <a href="#trainers" className={`navbar-link ${activeLink === '#trainers' ? 'active' : ''}`} onClick={() => handleLinkClick('#trainers')}>TRAINERS</a>
        <a href="#facilities" className={`navbar-link ${activeLink === '#facilities' ? 'active' : ''}`} onClick={() => handleLinkClick('#facilities')}>FACILITIES</a>
        <a href="#membership" className={`navbar-link ${activeLink === '#membership' ? 'active' : ''}`} onClick={() => handleLinkClick('#membership')}>MEMBERSHIP</a>
        <a href="#testimonials" className={`navbar-link ${activeLink === '#testimonials' ? 'active' : ''}`} onClick={() => handleLinkClick('#testimonials')}>TESTIMONIALS</a>
        <a href="#contact" className={`navbar-link ${activeLink === '#contact' ? 'active' : ''}`} onClick={() => handleLinkClick('#contact')}>CONTACT</a>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </div>
    </nav>
  );
};

export default Navbar;
