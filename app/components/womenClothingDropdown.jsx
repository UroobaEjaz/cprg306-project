"use client";
import React, { useState } from 'react';
import LadyItems1 from '../ladyItem/LadyItems1';
import LadyItems2 from '../ladyItem/LadyItems2';


const WomenClothingDropdown = () => {
  const [selectedItem, setSelectedItem] = useState(''); // State to track selected item
  const [selectedItems, setSelectedItems] = useState([]); // State to store selected items
  const [inputValue, setInputValue] = useState(''); // State to store input value

  // Function to handle item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };



  // Function to handle removing an item
  const handleRemoveItem = (index) => {
    const updatedItems = [...selectedItems]; // Copy selected items array
    updatedItems.splice(index, 1); // Remove item at index
    setSelectedItems(updatedItems); // Update selected items state
  };

  // Function to handle adding an item to the cart
  const addToCart = (item) => {
    // Here you can implement your addToCart logic
    console.log('Adding to cart:', item);
   
      setSelectedItems([...selectedItems, item.description]); // Add the item description to selectedItems
    
    
  };

  return (
    <div className="flex">
     
{/* Side pane */}
<div className="w-1/4 bg-grey p-4 h-screen overflow-y-auto">
  <h2 className="text-lg font-semibold mb-4">Selected Items</h2>
  <ul>
    {selectedItems.map((item, index) => (
      <li key={index} className="mb-2 flex items-center justify-between">
        <span>{item}</span>
        <button onClick={() => handleRemoveItem(index)} className="text-red-500">Remove</button>
      </li>
    ))}
  </ul>
</div>







      {/* Main content */}
      <div className=" ">
        <div className="w-3/4 p-4">
        <label htmlFor="item" >Select Item:</label>
        <select id="item" value={selectedItem} onChange={(e) => handleItemClick(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">Select Item</option>
          <option value="pants">Pants</option>
          <option value="shirts">Shirts</option>
        </select>
        </div>
       
        <div className="my-4 p-5">
          {/* Render Items based on selectedItem */}
          {selectedItem === 'pants' && (
            <LadyItems1 addToCart={addToCart} />
          )}
          {selectedItem === 'shirts' && (
            <LadyItems2 addToCart={addToCart} />
          )}
        </div>
      </div>
    </div>
  );
};

export default WomenClothingDropdown;
