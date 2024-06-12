import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";


const Cart = ({ cartItems }) => {
  const totalItems = cartItems.length

  return (
    <div className="cart">
      

      <p>Total de Itens: {totalItems}</p>
      <div>
        <FaShoppingCart />
        <Link to="/cart" state={{ cartItems }}>
          <button className='btCart'>Ver Carrinho</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
