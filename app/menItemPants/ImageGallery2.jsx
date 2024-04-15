// ImageGallery2.jsx
import React from 'react';
import items from './items2'; // Assuming the JSON file is in the same directory as this component
import items2 from './items2';

const ImageGallery2 = () => {
  

  return (
    <div className="image-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items2.list.map(item => (
        <div key={item.id} className="image-item bg-white rounded-lg overflow-hidden shadow-md">
          <img src={item.image} alt={item.description} className="w-full h-auto" />
          <p className="text-gray-700 text-base p-4">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery2;
