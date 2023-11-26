import React, { useRef } from 'react'
import NavBar from './NavBar';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import SocialMedia from './SocialMedia';
import ScrollToTop from "react-scroll-to-top"
import { ReactComponent as Arrow} from '../utils/scrollToTopArrow.svg'
const MainComponent = () => {
  const galleryRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const socialMediaRef = useRef(null);



  const sections = [
    { id: 'gallery', label: 'Gallery', ref: galleryRef },
    { id: 'about', label: 'About', ref: aboutRef },
    { id: 'contact', label: 'Contact', ref: contactRef },
    { id: 'social-media', label: 'Social Media', ref: socialMediaRef },
  ];
  return (
        <div>
            <NavBar sections={sections} />
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
      <ScrollToTop
  smooth
  color='white'
  component={<Arrow style={{ height: '75%' }} />}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
    position: 'fixed',
    bottom: '25px',
    right: '25px',
    borderRadius: '25%',
    backgroundColor: '#FF4500',  // Use your preferred orange color
    padding: '8px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, box-shadow 0.3s',
  }}
  // other props...
/>

          </div>
  )
}

export default MainComponent
