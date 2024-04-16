"use client";   
import React from 'react';

const LadyItemShirts = {
    list: [
         {
             "id": "1",
             "color": "Black",
             "description": "Black is all the rage this season.",
             "image": "	https://www.bigw.com.au/medias/sys_master/images/images/h29/h7b/45149264019486.jpg"

            }
            ,
            {
             "id": "2",
             "color": "Red",
             "description": "Red is for love <3",
             "image": "	https://5.imimg.com/data5/VC/SM/RZ/SELLER-50655871/ladies-plain-red-shirt-500x500.jpg"
            }
            ,
            {
                "id": "3",
                "color": "White",
                "description": "White is for peace.",
                "image": "	https://i.pinimg.com/474x/05/f5/b5/05f5b578f5eb731f33d09d8641613457.jpg"
            }
            ,
            {
                "id": "4",
                "color": "Blue",
                "description": "Blue is for calm.",
                "image": "https://i.ebayimg.com/images/g/9~cAAOSw4A5YpaoA/s-l1200.webp"
            }
    ]}


         
const LadyItems2 = ({addToCart}) => {
   return (
     <div className='w-full'>
       <ul className="p-4">
         {LadyItemShirts.list.map(item => (
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

 export default LadyItems2;