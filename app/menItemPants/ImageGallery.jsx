// ImageGallery.jsx
import React from 'react';
import items from './items'; // Assuming the JSON file is in the same directory as this component

const ImageGallery = () => {


  return (
    <div className="image-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.list.map(item => (
        <div key={item.id} className="image-item bg-white rounded-lg overflow-hidden shadow-md">
          <img src={item.image} alt={item.description} className="w-full h-auto"/>
          <p className="text-gray-700 text-base p-4">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
