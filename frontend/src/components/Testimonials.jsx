import React, { useState, useEffect } from 'react';
import '../CSS/Testimonial.css';

const testimonials = [
  {
    text: "FitnessFusion has completely changed my perspective on working out. The trainers are incredibly motivating, and the atmosphere is electric! I've never felt stronger and more confident.",
    name: "Jane Doe",
    company: "Member since 2020",
  },
  {
    text: "Joining FitnessFusion was the best decision I made for my health. The facilities are top-notch, and the community is welcoming and supportive. I look forward to every workout!",
    name: "John Smith",
    company: "Member since 2022",
  },
  {
    text: "FitnessFusion provides an exceptional environment to achieve your fitness goals. The trainers are knowledgeable and create a personalized experience for everyone.",
    name: "Emily Brown",
    company: "Member since 2019",
  },
  {
    text: "The group classes are fantastic, and I love the variety. Whether it's strength training or yoga, there is something for everyone at FitnessFusion. Highly recommended!",
    name: "Michael Johnson",
    company: "Member since 2021",
  },
  {
    text: "I never knew working out could be so enjoyable. FitnessFusion is more than a gym; it's a community that empowers you to push your limits and reach new heights.",
    name: "Sarah Wilson",
    company: "Member since 2018",
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning) {
        handleNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, transitioning]);

  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTransitioning(false);
    }, 500);  // Transition time matches CSS duration
  };

  const handleDotClick = (index) => {
    if (index !== currentIndex && !transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setTransitioning(false);
      }, 500);  // Transition time matches CSS duration
    }
  };

  return (
    <div className="testimonial-container">
      <h1 className="testimonial-main-heading">FitnessFusion TESTIMONIALS</h1>
      <p className="testimonial-slogan">Strength in Every Movement, Power in Every Breath!</p>
      
      <div className="testimonial-card-container">
        <div
          className={`testimonial-card ${transitioning ? 'fading-out' : 'fading-in'}`}
        >
          <p className="testimonial-text">{testimonials[currentIndex].text}</p>
          <h2 className="testimonial-name">{testimonials[currentIndex].name}</h2>
          <h3 className="testimonial-company">{testimonials[currentIndex].company}</h3>
        </div>
      </div>
      
      <div className="dots-container">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
