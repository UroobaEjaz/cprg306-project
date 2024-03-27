"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import lady from "../src/assets/lady.png";
import man from "../src/assets/man.jpg";
import { useRouter } from "next/navigation";



export default function MaleFemale() {

  const router = useRouter();

  const handleClick = () => {
    router.push("./menItem");
  }

  const handleTheClick = () => {
    router.push("./ladyItem");
  }

 
 


  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between bg-slate-400">
          <div className="flex flex-col">
            <div className="relative" style={{ height: "500px", width: "300px" }}>
              <Image src={man} alt="man" layout="fill" objectFit="cover" />
            </div>
           
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4" onClick={handleClick
            }>Men's wardrobe</button>
            
            
          </div>
          <div className="text-white flex items-center">
            <p className="text-2xl font-bold italic text-black px-4">The shoppers-in-place is one stop shopping place for those who are looking to upgrade their wardrobes. </p>
          </div>
          <div className="flex flex-col">
            <div className="relative" style={{ height: "500px", width: "300px" }}>
              <Image src={lady} alt="lady" layout="fill" objectFit="cover" />
            </div>
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4" onClick ={handleTheClick}>Women's wardrobe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
