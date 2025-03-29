import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import ImageSlider from './components/ImageSlider';
import Trainers from './components/Trainers';
import WhyChooseUs from './components/WhyChooseUs';
import Facilities from './components/Facilities';
import Membership from './components/Membership';
import Testimonial from './components/Testimonials';
import Contact from './components/ContactPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <MainPage />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

const MainPage = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="imageslider">
        <ImageSlider />
      </section>
      <section id="trainers">
        <Trainers />
      </section>
      <section id="whychooseus">
        <WhyChooseUs />
      </section>
      <section id="facilities">
        <Facilities />
      </section>
      <section id="membership">
        <Membership />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
