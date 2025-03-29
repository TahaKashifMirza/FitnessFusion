import React from 'react';
import '../CSS/Membership.css'; // Import the CSS file

const Membership = () => {
  const membershipPlans = [
    {
      id: 1,
      name: 'Basic Plan',
      price: '$49/month',
      features: ['1) Access to gym equipment', '2) Access to gym equipment', '3) Free locker', '4) 1 personal training session'],
    },
    {
      id: 2,
      name: 'Standard Plan',
      price: '$75/month',
      features: ['1) Everything in Basic', '2) Unlimited classes', '3) 2 personal training sessions', '4) Sauna access'],
    },
    {
      id: 3,
      name: 'Premium Plan',
      price: '$99/month',
      features: ['1) Everything in Standard', '2) Unlimited personal training', '3) Free merchandise', '4) Nutrition plan'],
    },
  ];

  return (
    <div className="membership-page">
      <h1 className="membership-heading">MEMBERSHIP IN FitnessFusion</h1>
      <p className="membership-description">
        Buy now! and become a part of FitnessFusion family.
      </p>
      <div className="membership-container">
        {membershipPlans.map((plan) => (
          <div key={plan.id} className="membership-card">
            <h2 className="plan-name">{plan.name}</h2>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="membership-button"><strong>Buy Now</strong></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
