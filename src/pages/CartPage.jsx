import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const location = useLocation();
  const { cartItems: initialCartItems, handleRemoveFromCart } = location.state || { cartItems: [], handleRemoveFromCart: null };
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleRemove = (indexToRemove) => {
    const updatedCartItems = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    if (handleRemoveFromCart) handleRemoveFromCart(cartItems[indexToRemove].id);
  };

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <div className="cart-page">
      <Link to="/">
        <button className='btCardPage'>Voltar</button>
      </Link>
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Carrinho está vazio</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => handleRemove(index)}>Delete</button>
          </div>
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default CartPage;
