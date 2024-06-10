import React, { useState, useEffect } from "react";
import { getItem, setItem } from "../utils/localStorege";

import { TfiShoppingCart, TfiShoppingCartFull } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";
import "@smastrom/react-rating/style.css";

import { myStyles } from "./styled";
import * as S from "./styled";
import axios from "axios";

export default function ECommerce() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterValue, setFilterValue] = useState("");
  const [rating, setRating] = useState(0);

  const fetchProducts = () => {
    axios
      .get("https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos")
      .then((item) => {
        setProducts(item.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
    if (cart) setCart(getItem("itemInCart"));
  }, [cart]);

  const productsFiltred = products.filter((item) =>
    item.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
  );

  const addedProductToCart = (id, products) => {
    const hasElementInCart = cart.find((item) => item.id === id);
    const removedElementInCart = cart.filter((item) => item.id !== id);

    if (hasElementInCart) {
      setCart([...removedElementInCart]);
      setItem("itemInCart", removedElementInCart);
    } else {
      setCart([...cart, products]);
      setItem("itemInCart", [...cart, products]);
    }
  };

  const verifyItemSeach = productsFiltred.length !== 0;
  const verifyItemSelecById = (product) =>
    cart.some((itemCart) => itemCart.id === product.id);

  return (
    <section>
      <S.HeaderCommerce>
        <S.HeaderCommerceH2>E-COMMERCE</S.HeaderCommerceH2>
        <S.HeaderCommerceP>
          At YourWeb, you can find a little bit of everything! Our mission is to
          bring variety and convenience to your online shopping experience,
          offering a vast selection of high-quality products for all your daily
          needs.
        </S.HeaderCommerceP>
      </S.HeaderCommerce>
      <S.Child>
        <S.ChildTitleProducts>PRODUCTS</S.ChildTitleProducts>

        <S.FilterContainer>
          <S.IconWrapper>
            <FaSearch />
          </S.IconWrapper>
          <S.Input
            type="search"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            placeholder="Search for your item..."
          />
        </S.FilterContainer>
      </S.Child>

      <S.Container>
        <S.Child>
          {!isLoading ? (
            <S.CardContainer>
              {verifyItemSeach ? (
                productsFiltred.map((product) => {
                  return (
                    <S.Card key={product.id}>
                      <S.CardImage src={product.avatar} alt={product.name} />
                      <S.CardContentDescription>
                        <S.CardContainerTitle>
                          <S.CardTitle>{product.name}</S.CardTitle>
                          <S.CardRatingIcon
                            value={rating}
                            onChange={setRating}
                            itemStyles={myStyles}
                          />
                        </S.CardContainerTitle>
                        <S.CardDescription>
                          {product.desciption}
                        </S.CardDescription>
                        <S.CardPriceContainer>
                          <S.CardPrice>
                            <S.CardPriceSpan>R$</S.CardPriceSpan>
                            {product.price}
                          </S.CardPrice>
                          <S.CardButton
                            onClick={() => {
                              addedProductToCart(product.id, product);
                            }}
                          >
                            {verifyItemSelecById(product) ? (
                              <TfiShoppingCartFull size={24} color="red" />
                            ) : (
                              <TfiShoppingCart size={24} />
                            )}
                          </S.CardButton>
                        </S.CardPriceContainer>
                      </S.CardContentDescription>
                    </S.Card>
                  );
                })
              ) : (
                <S.NotFoundContainer>
                  <S.Icon size={64} />
                  <div>
                    <S.Message>Sorry, No items found... </S.Message>
                    <S.Label>
                      Try adjusting your search criteria, checking for possible
                      typos, or resetting the applied filters. If the problem
                      persists, please contact support for assistance.
                    </S.Label>
                  </div>
                </S.NotFoundContainer>
              )}
            </S.CardContainer>
          ) : (
            <div>Carregando...</div>
          )}
        </S.Child>
      </S.Container>

      <S.Foot>
        <S.Brand>YourWeb</S.Brand>
        <S.List>
          <li>
            <S.LinkList to="/">Home</S.LinkList>
          </li>
        </S.List>
      </S.Foot>
    </section>
  );
}
