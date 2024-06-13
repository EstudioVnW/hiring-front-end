import React, { useEffect, useState, useContext } from "react";
import * as S from "./Styles";
import { CartContext } from "../../contexts/CartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { FiShoppingCart } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";

export default function Shop({ search }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const { addToFavorites, favoriteItems, removeFromFavorites } =
    useContext(FavoritesContext);

  useEffect(() => {
    fetch("https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos")
      .then((response) => response.json())
      .then((data) => {
        const productsWithUniqueImages = data.map((product) => {
          const randomSeed = Math.random().toString(36).substr(2, 9);
          return {
            ...product,
            avatar: `https://picsum.photos/seed/${randomSeed}/640/480`,
          };
        });
        setProducts(productsWithUniqueImages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );

  if (loading) {
    return (
      <S.Container>
        <h1>Carregando...</h1>
      </S.Container>
    );
  }

  if (error) {
    return (
      <S.Container>
        <h1>Erro ao carregar produtos</h1>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.ProductList>
        {filteredProducts.map((product) => (
          <S.ProductCard key={product.id}>
            <S.ProductImage
              src={product.avatar}
              alt={product.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/150";
              }}
            />
            <S.ProductContent>
              <S.ProductHeader>
                <S.ProductName>{product.name}</S.ProductName>
                <S.ProductPrice>${product.price}</S.ProductPrice>
              </S.ProductHeader>
              <S.IconContainer
                favorite={
                  favoriteItems.filter((item) => item.id === product.id)
                    .length > 0
                }
                isInCart={
                  cartItems.filter((item) => item.id === product.id).length > 0
                }
              >
                {favoriteItems.filter((item) => item.id === product.id).length >
                0 ? (
                  <LuHeart
                    className="Icon HeartIcon"
                    alt="Favoritos"
                    size={36}
                    onClick={() => removeFromFavorites(product)}
                  />
                ) : (
                  <LuHeart
                    className="Icon HeartIcon"
                    alt="Favoritos"
                    size={36}
                    onClick={() => addToFavorites(product)}
                  />
                )}

                {cartItems.filter((item) => item.id === product.id).length >
                0 ? (
                  <FiShoppingCart
                    className="Icon cartIcon"
                    alt="Ícone do carrinho"
                    size={36}
                    onClick={() => removeFromCart(product)}
                  />
                ) : (
                  <FiShoppingCart
                    className="Icon cartIcon"
                    alt="Ícone do carrinho"
                    size={36}
                    onClick={() => addToCart(product)}
                  />
                )}
              </S.IconContainer>
            </S.ProductContent>
          </S.ProductCard>
        ))}
      </S.ProductList>
    </S.Container>
  );
}
