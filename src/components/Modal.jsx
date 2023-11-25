// src/components/Modal.js
import React from 'react';
import '../styles/Modal.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Modal = ({ isOpen, onClose, imagePath }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <LazyLoadImage src={imagePath}  effect="blur" alt="Zoomed In" className="modal-image" />
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
