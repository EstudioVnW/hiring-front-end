import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);

    setTotalPrice((prevPrice) => prevPrice + Number(item.price));
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    );

    setTotalPrice((prevPrice) => prevPrice - item.price);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
