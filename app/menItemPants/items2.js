import { list } from "postcss";
import React from 'react'
const items2 = {
   list: [
    { "id": "1",
     "color": "Black is all the rage this season.",
     "description": "Black",
     "image": "https://www.aclassfabrication.ca/wp-content/uploads/2023/12/black-shirt-men-930qob-1-600x800.jpg"
    }
    ,
    {
     "id": "2",
     "color": "Brown",
     "description": "Brown shirt is perfect for outdoor activities.",
     "image": "https://media.gettyimages.com/id/1408834045/photo/portrait-of-a-handsome-young-man-standing-on-city-street.jpg?s=1024x1024&w=gi&k=20&c=V3DaQxzEZXJAiBUx0FeGEd_sPKWWvlaikPdmo-vRpII="
    }
    ,
    {
     "id": "3",
     "color": "Grey",
     "description": "grey shirts makes you a smart casual person.",
     "image": "https://media.istockphoto.com/id/175691383/photo/handsome-young-african-american-man-smiling.jpg?s=612x612&w=is&k=20&c=wxgv_Uf9fdx2lVsMlCAXmqMP2qPmvq6VtooqeHQ_viI="
    }
    ,
    {
     "id": "4",
     "color": "Blue",
     "description": "Blues are perfect for casual wear.",
     "image": "https://media.istockphoto.com/id/825834802/photo/man-in-blank-dark-blue-polo-shirt-from-front-and-rear.jpg?s=612x612&w=is&k=20&c=T3bMb2C76QXIlZa0wI2oo7fVjdC7D5W1C7IL9kKVBgA="
    }
]}



const Items2 = ({addToCart}) => {
  return (
    <div className='w-full'>
      <ul className="p-4">
        {items2.list.map(item => (
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






export default Items2;