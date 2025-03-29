import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2
import '../CSS/ContactPage.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('');  // Clear previous messages
    setError('');

    try {
      const response = await axios.post('http://localhost:5001/api/form/contact', {
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
      if (response.status === 200) {
        // Show success toast
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Message Sent Successfully!",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
        
        // Clear form after successful submission
        setFormData({
          username: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        // Show error toast
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: `Error: ${errorData.message}`,
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
      }
    } catch (error) {
      // Show error toast
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: 'Error Sending Message',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
      console.log(error);
    }
  };

  return (
    <div className="contact-page">
      {/* Full-Screen Image Section */}
      <div className="contact-header">
        <div className="contact-header-text">
          <h1>CONTACT FitnessFusion</h1>
          <p>Strength in Every Movement, Power in Every Breath!</p>
        </div>
      </div>

      {/* Main Heading */}
      <h2 className="main-heading">KEEP IN TOUCH!</h2>

      {/* Contact Form and Info Section */}
      <div className="contact-form-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1 className='form-h1'>Contact Now FitnessFusion!</h1>
          <p className='form-p'>We would Love to hear from you</p>

          <input 
            type="text" 
            name="username"
            placeholder="Enter Your Full Name..." 
            className="input-field" 
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email"
            placeholder="Enter Your Valid Email..." 
            className="input-field" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input 
            type="text" 
            name="phone"
            placeholder="Enter Your Phone Number..." 
            className="input-field" 
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea 
            rows="4" 
            name="message"
            placeholder="Type Your Message Here..." 
            className="input-field" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-button">
            <strong>SUBMIT</strong> <FaPaperPlane />
          </button>

          {/* Display Response Messages */}
          {responseMessage && <p className="success-message">{responseMessage}</p>}
          {error && <p className="error-message">{error}</p>}
        </form>

        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Street no 05, Gulshan Block 10, Karachi</span>
          </div>
          <div className="info-item">
            <FaPhone />
            <span>+92 123456789</span>
          </div>
          <div className="info-item">
            <FaEnvelope />
            <span>info@fitnessfusion.com</span>
          </div>
        </div>
      </div>

      {/* Full-Screen Location Section */}
      <div className="location-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1726114910042!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="FitnessFusion Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
