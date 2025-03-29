import React, { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import '../CSS/Footer.css';

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer ${isVisible ? 'footer-visible' : ''}`}
    >
      {/* Column 1: Logo */}
      <div className="footer-column">
        <img src="/Images/logo.png" alt="FitnessFusion Logo" className="footer-logo" />
      </div>

      {/* Column 2: Useful Links */}
      <div className="footer-column">
        <h2 className="footer-heading">Useful Links:</h2>
        <ul className="footer-links">
          <li><a href="#home"><strong>HOME</strong></a></li>
          <li><a href="#about"><strong>ABOUT</strong></a></li>
          <li><a href="#trainers"><strong>TRAINERS</strong></a></li>
          <li><a href="#facilities"><strong>FACILITIES</strong></a></li>
          <li><a href="#membership"><strong>MEMBERSHIP</strong></a></li>
          <li><a href="#testimonials"><strong>TESTIMONIALS</strong></a></li>
          <li><a href="#contact"><strong>CONTACT</strong></a></li>
        </ul>
      </div>

      {/* Column 3: FitnessFusion Info */}
      <div className="footer-column">
        <h2 className="footer-heading">FitnessFusion:</h2>
        <p className="footer-slogan"><strong>Strength in Every Movement, Power in Every Breath!</strong></p>
        <p className="footer-description">
          Join us to experience a unique and professional fitness journey that empowers you to achieve your best self. Our team of certified trainers is here to guide you at every step!
        </p>
        <h3 className="follow-us-heading">Follow Us:</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="footer-bottom">
        <p><strong>© Copyright 2024 | FitnessFusion All Right Reserved</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
