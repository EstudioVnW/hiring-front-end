import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";


const Cart = ({ cartItems }) => {
  const totalItems = cartItems.length

  return (
    <div className="cart">
      
        <Link to="/cart" state={{ cartItems }} className="cart-link">
        <FaShoppingCart className="cart-icon" />
        {totalItems > 0 && (
          <span className="cart-count">{totalItems}</span>
        )}
      </Link>
    </div>
  );
};

export default Cart;
