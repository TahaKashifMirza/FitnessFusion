import React, { useEffect } from 'react';
import '../CSS/WhyChooseUs.css'; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';

const WhyChooseUs = () => {
  const content = [
    {
      number: "01",
      heading: "Legacy",
      description: "Over the last 46 years, our iconic gym brand has set the standard for all others to follow. Legends have been made here since 1976. Now it’s your turn."
    },
    {
      number: "02",
      heading: "Environment",
      description: "We provide a safe, secure and comfortable environment to train in no matter what your experience or fitness level is. We boast a strong community of like-minded people supporting and encouraging one another to achieve legendary greatness."
    },
    {
      number: "03",
      heading: "Results",
      description: "If you’re serious about achieving a goal- no matter what that is- then we are your gym. From the best equipment, technology and programs to the best fitness professionals around, we are serious about getting you results."
    },
    {
      number: "04",
      heading: "Experience",
      description: "Remarkable customer service, a safe, clean, comfortable environment and the best training floor around await you at your local World Gym."
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll('.globe-container');

    // Create an observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-in-view');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Observe each globe container
    elements.forEach((el) => observer.observe(el));

    // Cleanup on component unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="why-choose-us">
      <h1 className="main-heading">WHY FitnessFusion GYM?</h1>
      <div className="globe-section">
        {content.map((item, index) => (
          <div key={index} className="globe-container">
            <div className="globe-icon">
              <span className="number">{item.number}</span>
              <i className="fa fa-globe" aria-hidden="true"></i>
            </div>
            <h2 className="globe-heading">{item.heading}</h2>
            <p className="globe-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
