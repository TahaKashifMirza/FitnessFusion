import React, { useEffect } from 'react';
import '../CSS/Trainers.css';

// Trainer data with different images and names
const trainers = [
  { id: 1, name: 'Alice Johnson', image: '/Images/T1.jpg' }, 
  { id: 2, name: 'Mark Smith', image: '/Images/T2.jpg' },
  { id: 3, name: 'Saram Lee', image: '/Images/T3.jpg' },
  { id: 4, name: 'James Brown', image: '/Images/T4.jpg' },
  { id: 5, name: 'Emily Davis', image: '/Images/T5.jpg' },
  { id: 6, name: 'Michael Wilson', image: '/Images/T6.jpg' },
];

const Trainers = () => {
  useEffect(() => {
    const handleScroll = () => {
      const trainerCards = document.querySelectorAll('.trainer-card');
      trainerCards.forEach((card) => {
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
    <div className="trainers-page">
      {/* Full-Screen Image with Headings */}
      <div className="full-screen-image">
        <h1 className="main-heading-trainer">Professional Expertise</h1>
        <h2 className="sub-heading-trainer">MEET STRUCTURE TEAM</h2>
      </div>

      {/* Dark Gray Section */}
      <section className="trainers-section">
        <h2 className="section-heading">MEET YOUR TRAINERS</h2>
        <p className="section-description">
          Our trainers are here to help you achieve your fitness goals with personalized coaching and extensive expertise.
        </p>

        {/* Trainer Containers */}
        <div className="trainers-container">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              {/* Different images for each trainer */}
              <div
                className="trainer-image"
                style={{ backgroundImage: `url(${trainer.image})` }}
              ></div>
              <hr className="separator-line" />
              <h3 className="trainer-name">{trainer.name}</h3>
              <h4 className="trainer-title">FITNESS TRAINER</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Trainers;
