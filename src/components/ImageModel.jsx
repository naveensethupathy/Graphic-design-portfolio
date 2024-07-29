// src/components/ImageViewModal.js

import React from 'react';

const ImageModel = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur">
      <div className="relative rounded-lg overflow-hidden shadow-lg max-w-xl w-full h-auto">
        <button
          
          onClick={onClose}
          className="absolute top-2 right-2 text-white-600 hover:text-gray-900 cw "
        >
          &times;
        </button>
        <img src={imageSrc} alt="View" className="w-auto h-auto" onClick={onClose} />
      </div>
    </div>
  );
};

export default ImageModel;
