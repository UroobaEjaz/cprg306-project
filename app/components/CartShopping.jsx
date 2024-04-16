import React, { useState } from 'react';
import Items from '../menItemPants/items';
import Items2 from '../menItemPants/items2';

const CartShopping = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  /*    /* <Items items={Items.list} onClick addToCart={addToCart} />
        <Items2 items={Items2.list} addToCart={addToCart} /> */

  return (
    <h1>
         <Items items = {Items.list} addToCart={addToCart} />
         <Items2 item = {Items2.list} addToCart={addToCart} />
    </h1>
  );
};

export default CartShopping;
