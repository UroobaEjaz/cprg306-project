import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg p-4 shadow-md">
          <img src={product.image} alt={product.title} className="w-full h-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-gray-900 font-semibold mb-2">${product.price}</p>
          <p className="text-gray-600">{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
