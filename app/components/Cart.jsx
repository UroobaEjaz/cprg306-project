// Cart.jsx
import React from 'react';

const Cart = ({ cartItems, handleRemove }) => {
  return (
    <div className="fixed top-0 right-0 h-full w-1/3 bg-white shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <div>
              <span className="text-lg font-semibold">{item.description}</span>
              <span className="text-sm text-gray-500">{item.color}</span>
            </div>
            <button onClick={() => handleRemove(item.id)} className="text-red-500 font-semibold">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
