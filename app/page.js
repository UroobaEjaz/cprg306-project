"use client";
import shoppings from "./src/assets/shop2.jpg"
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function Page() {

  return (
    <div className="n">
    <div className="shop1 h-0 text-center">
      <h1 className="text-6xl font-bold text-white bg-black p-4 rounded-lg">Shoppers-in-palace</h1>
      <Link href="../mainPages">  
      <Image src={shoppings} alt="profile pic" className="w-full h-45"></Image>
      </Link>
      <Link href="./Api">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            50% off items
          </button>
        </Link>
    </div>
  </div>
);
    

}