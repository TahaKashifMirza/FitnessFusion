import React, { useEffect } from "react";
import "../CSS/Facilities.css"; // Import the CSS file for styling

const facilityData = [
  {
    image: '/Images/Shower.jpg',
    text: "SHOWER",
  },
  {
    image: '/Images/WIFI.jpg',
    text: "WIFI",
  },
  {
    image: '/Images/Steam1.jpg',
    text: "STEAM",
  },
  {
    image: '/Images/NUTRITIONIST.jpg',
    text: "NUTRITIONIST",
  },
  {
    image: '/Images/Changingroom.jpg',
    text: "CHANGING ROOM",
  },
  {
    image: '/Images/test1.jpg',
    text: "BCA TEST (IN BODY)",
  },
  {
    image: '/Images/locker.jpg',
    text: "LOCKER",
  },
  {
    image: '/Images/dr.jpg',
    text: "PHYSIO",
  },
];

const Facilities = () => {
  useEffect(() => {
    const handleScroll = () => {
      const facilityCards = document.querySelectorAll('.facility-card');
      facilityCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="facilities-page">
      <h1 className="facilities-heading">FACILITIES IN FitnessFusion</h1>
      <p className="facilities-description">
        Explore our state-of-the-art facilities that provide a perfect environment for your fitness journey.
      </p>

      <div className="facilities-container">
        {facilityData.map((facility, index) => (
          <div key={index} className="facility-card">
            <div className="facility-image">
              <img src={facility.image} alt={facility.text} />
              <div className="facility-text">{facility.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
