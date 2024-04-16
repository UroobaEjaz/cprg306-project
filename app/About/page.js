import React from 'react';
import Link from 'next/link';
import Header from '../components/header';


const Page = () => {
  return (
    <div>
        <Header/>
    <div className="bg-green-200 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Shoppers-in-palace</h1>
        <p className="text-lg mb-4">
          Welcome to our website! We are dedicated to providing you with the best shopping experience possible. 
          Our mission is to offer a wide range of high-quality products, delivered with 
          exceptional customer service.
        </p>
        <p className="text-lg mb-4">
          At our website, you'll find a diverse selection of products ranging from clothing and jewelry to 
          electronics and accessories. Whether you're shopping for yourself or searching for the perfect gift, 
          we've got you covered.
        </p>
        <p className="text-lg mb-4">
          Our team is passionate about curating the latest trends and must-have items to ensure that you have 
          access to the best products on the market. We're constantly updating our inventory to bring you new 
          and exciting products, so be sure to check back often!
        </p>
        <p className="text-lg mb-4">
          Thank you for choosing our website for your shopping needs. We appreciate your support and look forward 
          to serving you. Happy shopping!
        </p>
      </div>
    </div>
   
    </div>
  );
};

export default Page;
