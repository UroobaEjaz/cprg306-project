"use client";
import React from 'react';
const LadyItemPants = {
   list: [
      {
         "id": "1",
         "color": "Black",
         "description": "Black is all the rage this season.",
         "image": "https://fcity.in/images/products/301621878/lyejt_512.jpg"
      },
      {
         "id": "2",
         "color": "Brown",
         "description": "Brown pants is perfect for outdoor activities.",
         "image": "https://pantproject.com/cdn/shop/products/womenswear0193.jpg?v=1668690197"}
      ,{
         "id": "3",
         "color": "Grey",
         "description": "grey pants are gives you a smart casual look.",
         "image": "	https://www.shutterstock.com/image-photo/stylish-girl-gray-pants-white-260nw-1369332764.jpg"
      },
      {
         "id": "4",
         "color": "Blue",
         "description": "Blue pants are perfect for casual wear.",
         "image": "https://img.freepik.com/free-photo/full-length-portrait-smiling-casual-woman-standing-gray-wall_231208-9862.jpg?t=st=1713281854~exp=1713282454~hmac=549cad9b50545a938a736383773c13f0820553bfbd67244b5014477c24f752b1"

      }
   ]}

   
const LadyItems1 = ({addToCart}) => {
   return (
     <div className='w-full'>
       <ul className="p-4">
         {LadyItemPants.list.map(item => (
        <div key={item.id} className="image-item bg-white rounded-lg overflow-hidden shadow-md mb-4" >
          <img src={item.image} alt={item.description} className="w-32 h-auto" />
          <p className="text-gray-700 text-base p-4">{item.description}</p>
          <button onClick={() => addToCart(item)}className="mb-2 bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 mx-auto block">Add to Cart</button>
         
        </div>
      ))}
       </ul>
     </div>
   );
 };


 


// Items.jsx




 export default LadyItems1;