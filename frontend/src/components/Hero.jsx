import React from 'react';
import '../CSS/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">FitnessFusion</h1>
        <p className="hero-slogan">Strength in Every Movement, Power in Every Breath!</p>
        <button className="hero-btn"><strong>Join Now</strong></button>
      </div>
    </div>
  );
};

export default Hero;
