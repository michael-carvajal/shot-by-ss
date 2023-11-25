import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { imagePaths, imagePaths2 } from '../utils/importImages';

const Gallery = ({ scrollPosition }) => {
  // Example image paths

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>

      <div className="image-grid">
        {imagePaths2.map((path, index) => (
  <LazyLoadImage
    key={index}
    src={path}
    alt={`Image ${index + 1}`}
    width="100%"
    height="100%"
    className="gallery-image"
    effect="blur"
    scrollPosition={scrollPosition}
    threshold={100} // Adjust the threshold as needed
  />
))}
        {imagePaths.map((path, index) => (
          <LazyLoadImage
            key={index}
            src={path}
            alt={`Image ${index + 1}`}
            width="100%"
            height="100%"
            className="gallery-image"
            effect="blur"
            scrollPosition={scrollPosition}
            threshold={25} // Adjust the threshold as needed
          />
        ))}
      </div>
    </div>
  );
};

export default trackWindowScroll(Gallery);
