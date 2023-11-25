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
      <ScrollToTop smooth color='white' component={<Arrow />}  className='!fixed bottom-5 right-5 rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg'/>
          </div>
  )
}

export default MainComponent
