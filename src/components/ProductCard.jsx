import React from 'react';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    <h3>{product.name}</h3>
    <img src={product.avatar} alt={product.name} />
    
    <p className='description'>{product.desciption}</p>
    <div>
      <p>${product.price}</p>
      <button 
        className='add-button' 
        onClick={() => onAddToCart(product)}>
            Adicionar
      </button>
    </div>
  </div>
);

export default ProductCard;
