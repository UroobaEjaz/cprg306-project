// Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white p-4 rounded-lg">Shoppers-in-palace</h1>
        <nav>
          <ul className="flex text-2xl">
            <li className='mr-8'><a href="#" className="hover:text-gray-300">Home</a></li>
            <li className='mr-8'><a href="#" className="hover:text-gray-300">About</a></li>
            <li className='mr-8'><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
