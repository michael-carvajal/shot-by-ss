import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import  {imagePaths}  from '../utils/importImages';
const Gallery = () => {
  // Example image paths



  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <LazyLoadImage
            src={''}
            alt={`Image sdv`}
            width="100%"
            height="100%"
            className="gallery-image"
            effect="blur"
          />
      <div className="image-grid">
        {imagePaths.map((path, index) => (
          <LazyLoadImage
            key={index}
            src={path}
            alt={`Image ${index + 1}`}
            width="100%"
            height="100%"
            className="gallery-image"
            effect="blur"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
