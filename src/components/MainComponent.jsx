import React, { useRef } from 'react'
import NavBar from './NavBar';
import Home from './Home'; // Create for other sections
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import SocialMedia from './SocialMedia';


const MainComponent = () => {
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
  )
}

export default MainComponent
