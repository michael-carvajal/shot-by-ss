// src/App.js
import React, { useRef } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import NavBar from './components/NavBar';
import Home from './components/Home'; // Create components for other sections
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';

const App = () => {
  const galleryRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const socialMediaRef = useRef(null);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Gallery', ref: galleryRef },
    { id: 'about', label: 'About', ref: aboutRef },
    { id: 'contact', label: 'Contact', ref: contactRef },
    { id: 'social-media', label: 'Social Media', ref: socialMediaRef },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar sections={sections} />
        <div id="home">
          <Home />
        </div>
        <div id="gallery" ref={galleryRef}>
          <Gallery />
        </div>
        <div id="about" ref={aboutRef}>
          <About />
        </div>
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
        <div id="social-media" ref={socialMediaRef}>
          <SocialMedia />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
