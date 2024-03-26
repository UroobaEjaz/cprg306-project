// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 absolute bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Shoppers-in-palace. All rights reserved.</p>
        <ul className="flex">
          <li className="mr-4"><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
          <li className="mr-4"><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
