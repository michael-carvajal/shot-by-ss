// src/components/Gallery.js
import React, { useState } from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { imagePaths, imagePaths2 } from '../utils/importImages';
import Modal from './Modal';

const Gallery = ({ scrollPosition }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [pathsAmount, setPathsAmount] = useState(4);

  const openModal = (imagePath) => {
    setSelectedImage(imagePath);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const showAllImages = () => {
    setPathsAmount(imagePaths.length);
  };

  return (
    <div className="gallery-container mt-2">
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
            threshold={50}
            onClick={() => openModal(path)}
          />
        ))}
        {imagePaths.slice(0, pathsAmount).map((path, index) => (
          <LazyLoadImage
            key={index}
            src={path}
            alt={`Image ${index + 1}`}
            width="100%"
            height="100%"
            className="gallery-image"
            effect="blur"
            scrollPosition={scrollPosition}
            threshold={50}
            onClick={() => openModal(path)}
          />
        ))}
      </div>
      {pathsAmount < imagePaths.length && (
        <button onClick={showAllImages}  className='linkTag text-xs md:text-lg mb-5 mt-2'>
        <span className="gradient-text">Load more...</span>
        </button>
      )}
      <Modal isOpen={modalOpen} onClose={closeModal} imagePath={selectedImage} />
    </div>
  );
};

export default trackWindowScroll(Gallery);
