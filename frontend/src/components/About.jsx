import React, { useEffect, useRef } from 'react';
import '../CSS/About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutElement = aboutRef.current;
    if (aboutElement) {
      observer.observe(aboutElement);
      // Observing each animated element
      aboutElement.querySelectorAll('.animated').forEach((el) => observer.observe(el));
    }

    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
        aboutElement.querySelectorAll('.animated').forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div ref={aboutRef} className="about-container">
      {/* Main Heading */}
      <h1 className="about-main-heading animated-heading animated"> 
        <span className="highlight">ABOUT</span> FitnessFusion
      </h1>
      <p className="about-slogan animated-slogan animated">Strength in Every Movement, Power in Every Breath!</p>

      {/* Welcome Section */}
      <h2 className="sub-heading animated-subheading animated">Welcome to the Fit Family</h2>
      <p className="description animated-description animated">
        Welcome to FitnessFusion, where your journey to strength, wellness, and empowerment begins! We are committed to providing a unique fitness experience tailored to your individual goals, with world-class trainers, state-of-the-art equipment, and a supportive community.
      </p>

      {/* Vision Section */}
      <div className="section animated-section animated">
        <img src="../Images/ourvision.jpeg" alt="Our Vision" className="about-image animated-image animated" />
        <div className="text-content animated-text animated">
          <h3>Our Vision:</h3>
          <p>
            At FitnessFusion, our vision is to create a community that inspires, supports, and encourages people to achieve their personal best. We believe in strength from within and aim to empower everyone with the tools and motivation to build a healthy lifestyle.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="section animated-section animated">
        <img src="../Images/ourmission.jpeg" alt="Our Mission" className="about-image animated-image animated" />
        <div className="text-content animated-text animated">
          <h3>Our Mission:</h3>
          <p>
            Our mission is to provide a welcoming and inclusive environment where everyone, regardless of their fitness level, can challenge themselves, achieve new milestones, and feel the joy of movement. We are committed to guiding each member with personalized programs, motivation, and care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
