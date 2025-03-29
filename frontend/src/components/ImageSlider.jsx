import React, { useState, useEffect } from 'react';
import '../CSS/ImageSlider.css';

const images = [
  { src: '/Images/Slider1.jpg', text: 'Push Your Limits, Achieve the Impossible - FitnessFusion' },
  { src: '/Images/Slider2.jpg', text: 'Strong Body, Strong Mind, Strong Life - FitnessFusion' },
  { src: '/Images/Slider4.jpg', text: 'Consistency is the Key to Your Transformation - FitnessFusion' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false); // Start text hide animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setShowText(true); // Show text on new image
      }, 1000); // Match this with the text hide animation time
    }, 10000); // Image display duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-slider">
      <div className="slider-slides" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={`slider-slide ${index === currentIndex ? 'slider-active' : ''}`}>
            <img src={image.src} alt={image.text} />
            <div className={`slider-text ${showText ? 'slider-show' : 'slider-hide'}`}>
              <span className="slider-text-content">{image.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${index === currentIndex ? 'slider-active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
