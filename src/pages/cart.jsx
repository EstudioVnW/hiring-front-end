import React, { useState } from "react";
import { TfiShoppingCart, TfiShoppingCartFull } from "react-icons/tfi";
import { getItem, setItem } from "../utils/localStorege";
import { myStyles } from "./styled";
import * as S from "./styled";

import img from "../image/image.png";

const Cart = () => {
  const [cartElement, setCartElement] = useState(getItem("itemInCart") || null);
  const [rating, setRating] = useState(0);

  const removedElementInCart = (id) => {
    const removedElement = cartElement.filter((item) => item.id !== id);
    setCartElement(removedElement);
    setItem("itemInCart", removedElement);
  };
  const sumPriceValue = cartElement.reduce(
    (acc, cur) => Number(acc) + Number(cur.price),
    0
  );
  return (
    <S.Cart>
      <S.CartContainer>
        <S.CardProductCart>
          <S.CardProductCartTitle>
            PRODUCTS IN YOUR CART:
          </S.CardProductCartTitle>

          <S.CardProductCartDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, Mollitia et
            fuga facere repellat tempore fugit dolorem nihil odio.
          </S.CardProductCartDescription>
        </S.CardProductCart>
        {cartElement.length >= 1 && (
          <S.CardCartContainer>
            {cartElement.map((item) => {
              return (
                <S.CardCart key={item.id}>
                  <S.CardCartImage src={item.avatar} alt={item.name} />

                  <S.CardContentDescription>
                    <S.CardContainerTitle>
                      <S.CardTitle>{item.name}</S.CardTitle>

                      <S.CardRatingIcon
                        value={rating}
                        onChange={setRating}
                        itemStyles={myStyles}
                      />
                    </S.CardContainerTitle>

                    <S.CardDescription>{item.desciption}</S.CardDescription>

                    <S.CardPriceContainer>
                      <S.CardPrice>
                        <S.CardPriceSpan>R$</S.CardPriceSpan>
                        {item.price}
                      </S.CardPrice>
                      <S.CardButton
                        onClick={() => {
                          removedElementInCart(item.id);
                        }}
                      >
                        <TfiShoppingCartFull size={24} color="red" />
                      </S.CardButton>
                    </S.CardPriceContainer>
                  </S.CardContentDescription>
                </S.CardCart>
              );
            })}
          </S.CardCartContainer>
        )}
      </S.CartContainer>
      <S.CardCartPaymentBox>
        <S.CardCartPayment>
          <S.CardProductCart>
            <S.CardProductCartTitle>FORM OF PAYMENT</S.CardProductCartTitle>
            <S.CardProductCartDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, Mollitia
              et fuga facere repellat tempore fugit dolorem nihil odio.
            </S.CardProductCartDescription>
          </S.CardProductCart>
          <S.CardCartPaymentPicture>
            {cartElement.length >= 1 && (
              <div>
                <img src={img} alt="" />
              </div>
            )}
          </S.CardCartPaymentPicture>
          <S.CardProductCart>
            <S.CartPaymentButton>Pay R$ {sumPriceValue}</S.CartPaymentButton>
          </S.CardProductCart>
        </S.CardCartPayment>
      </S.CardCartPaymentBox>
    </S.Cart>
  );
};

export default Cart;
