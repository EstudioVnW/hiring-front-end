import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const addUniqueParamToImageUrl = (url, productId) => {
    const uniqueParam = productId; 
    return `${url}?${uniqueParam}`;
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img src={addUniqueParamToImageUrl(product.avatar, product.id)} alt={product.name} />
      <p className='description'>{product.description}</p>
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
};

export default ProductCard;
