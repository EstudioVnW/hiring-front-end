import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorites = (item) => {
    setFavoriteItems((prevItems) => [...prevItems, item]);
  };

  const removeFromFavorites = (item) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((favoriteItem) => favoriteItem.id !== item.id)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteItems, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
