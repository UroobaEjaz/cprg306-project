"use client";
import React, { useState } from 'react';
import ImageGallery from '../menItemPants/ImageGallery'; // Import the ImageGallery component
import ImageGallery2 from '../menItemPants/ImageGallery2';


const MenClothingDropdown = () => {
  const [selectedItem, setSelectedItem] = useState('');
  

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };


  return (
    <div className="max-w-md mx-auto p-4">
      <label htmlFor="item" className="block">Select Item:</label>
      <select id="item" value={selectedItem} onChange={(e) => handleItemClick(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
        <option value="">Select Item</option>
        <option value="pants">Pants</option>
        <option value="shirts">Shirts</option>
      </select>
      <div className="mt-2">
        {selectedItem === 'pants' && (
          <div>
            {/* Render pants */}
            <ImageGallery  />
          </div>
        )}
        {selectedItem === 'shirts' && (
          <div>
            {/* Render shirts */}
            <ImageGallery2 />
          </div>
        )}
      </div>
  
    </div>
  );
};

export default MenClothingDropdown;
