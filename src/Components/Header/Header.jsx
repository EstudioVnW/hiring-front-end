import React, { useContext, useState } from "react";
import * as S from "./Styles";
import { LuSearch } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { LuHeart, LuTrash } from "react-icons/lu";
import { CartContext } from "../../contexts/CartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";

const Header = ({ setSearch }) => {
  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const { cartItems, totalPrice, removeFromCart } = useContext(CartContext);
  const { favoriteItems, removeFromFavorites } = useContext(FavoritesContext);

  const [openFavorites, setOpenFavorites] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <S.Container>
        <S.Logo>JH</S.Logo>
        <S.SearchBarContainer>
          <S.SearchBarInput
            type="text"
            placeholder="Pesquisar..."
            onChange={handleSearchChange}
          />
          <LuSearch className="Icon" size={24} alt="Ícone de busca" />
        </S.SearchBarContainer>
        <S.IconContainer>
          <div>
            <LuHeart
              className="Icon"
              size={40}
              alt="Favoritos"
              onClick={() => setOpenFavorites(!openFavorites)}
            />
            {favoriteItems?.length > 0 && <sub>{favoriteItems?.length}</sub>}
          </div>
          <div>
            <FiShoppingCart
              className="Icon"
              size={40}
              alt="Ícone do carrinho"
              onClick={() => setOpenCart(!openCart)}
            />
            {cartItems?.length > 0 && <sub>{cartItems?.length}</sub>}
          </div>
        </S.IconContainer>
      </S.Container>

      {openFavorites && <S.Overlay onClick={() => setOpenFavorites(false)} />}
      {openFavorites && (
        <S.DropdownMenuContent>
          <h2>Favoritos</h2>
          {favoriteItems.map((item) => (
            <div key={item.id} className="item">
              <div className="description">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <LuTrash
                className="RemoveItem"
                size={24}
                onClick={() => removeFromFavorites(item)}
              />
            </div>
          ))}

          {favoriteItems.length === 0 && <p>Nenhum item adicionado</p>}
        </S.DropdownMenuContent>
      )}

      {openCart && <S.Overlay onClick={() => setOpenCart(false)} />}
      {openCart && (
        <S.DropdownMenuContent>
          <h2>Carrinho</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="item">
              <div className="description">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <LuTrash
                className="RemoveItem"
                size={24}
                onClick={() => removeFromCart(item)}
              />
            </div>
          ))}

          <p className="total">Total: ${totalPrice}</p>

          {cartItems.length === 0 && <p>Nenhum item adicionado</p>}
        </S.DropdownMenuContent>
      )}
    </>
  );
};

export default Header;
