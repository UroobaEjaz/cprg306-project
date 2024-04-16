import { list } from "postcss";
import React from 'react';
const items = {
   list: [
 {
    "id": "1",
    "color": "Black",
    "description": "Black pants are  perfect for casual wear. ",
    "image": "https://cdn.shoplightspeed.com/shops/631983/files/50418886/650x750x2/modern-fit-black-5-pocket-pants.jpg"
   },
{
    "id": "2",
    "color": "Brown",
    "description": "Brown pants is perfect for outdoor activities.",
    "image": "https://img.freepik.com/free-photo/man-wearing-brown-pants-close-up_53876-102239.jpg?t=st=1713200569~exp=1713204169~hmac=599c52d2334588340a8b0500ed34b52a3e374fcce64665e0da1409baf34e46c3&w=360"
   },
{
    "id": "3",
    "color": "Grey",
    "description": "grey pants are gives you a smart casual look.",
    "image": "https://media.istockphoto.com/id/1131989210/photo/happy-young-smart-casual-man-with-hands-on-waist.jpg?s=612x612&w=is&k=20&c=Itu8gNqG3L6gFVjN5pSghAViFKsQZdBKF8XgbEr2ql0="
   },
{
    "id": "4",
    "color": "Blue",
    "description": "Blue pants are perfect for casual wear.",
    "image": "https://img.freepik.com/free-photo/businessman-wearing-black-pants-with-white-shirt_53876-102237.jpg?w=360&t=st=1713201840~exp=1713202440~hmac=05a216f3f6f10387451692f337d715c1be581d3cfcb27af9cc2af853982ea6b6"
}

]}
  


const Items = ({addToCart}) => {
   return (
     <div className='w-full'>
       <ul className="p-4">
         {items.list.map(item => (
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




 export default Items;