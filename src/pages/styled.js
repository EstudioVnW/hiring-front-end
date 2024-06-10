import styled from "styled-components";
import img from "../image/store.png";

import { Rating, RoundedStar } from "@smastrom/react-rating";

export const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#FFB700",
  inactiveFillColor: "#FBF1A9",
};

const HeaderCommerce = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: whitesmoke;
  background: linear-gradient(rgba(0, 0, 0, 0.511), rgba(0, 0, 0, 0.27)),
    url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const HeaderCommerceH2 = styled.h2`
  font-size: 5vw;
  font-weight: 100;
  padding-bottom: 8vh;
`;

const HeaderCommerceP = styled.p`
  width: 50%;
  font-size: 1.3vw;
  text-align: center;
  font-weight: lighter;
`;

const Child = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5vh 0vw;
`;

const ChildTitleProducts = styled.h1`
  font-size: 2vw;
  font-weight: bold;
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;
`;

const FilterContainer = styled.label`
  display: flex;
  align-items: center;
  padding: 0.5vw;
  width: 30%;
  border: 1px solid;
  border-radius: 2vw;
`;

const IconWrapper = styled.div`
  padding-left: 0.5vw;
`;

const Input = styled.input`
  width: 98%;
  padding-left: 0.5vw;
  border: none;
  outline: none;
  font-size: 1rem;
`;

const Container = styled.div`
  width: auto;
  height: auto;
`;

const CardContainer = styled.div`
  // background-color: red;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  margin: 0% 10%;
  justify-content: space-around;
`;

const Products = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  width: 23%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  background-color: whitesmoke;
  &:hover {
    transition: 0.3s;
    transform: translateY(-1vh);
  }
`;

const CardContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5vh 2vw 2vh 2vw;
`;
const CardContentDescription = styled.div`
  width: 100%;
  position: relative;
`;

const CardRatingIcon = styled(Rating)`
  width: 100px;
`;

const CardTitle = styled.h2`
  font-size: 1.5vw;
  font-weight: bold;
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  // margin: 16px 0;
`;

const CardDescription = styled.p`
  width: 100%;
  height: 13vh;
  font-size: 1.1vw;
  padding: 0 2vw;
  text-align: left;
  font-weight: 300;
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;
`;

const CardPriceContainer = styled.div`
  width: 100%;
  padding: 0 2vw;
  margin: 16px 0;
  // background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardPrice = styled.p`
  font-size: 1.2vw;
  font-weight: normal;
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;
  color: black;
`;
const CardPriceSpan = styled.span`
  font-size: 1.2vw;
  font-weight: bolder;
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;

  color: #03a800;
  padding-right: 0.5vw;
`;

const CardButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 2px;
  border-radius: 4px;
  cursor: pointer;
  // margin-top: 16px;

  &:hover {
    transform: scale(1.1);
  }
`;
const Cart = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 5%;
  position: relative;
`;

const CardCartContainer = styled.div`
  width: 80%;
  margin: 10px 0px;

  border: 1px solid #ddd;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:hover {
    transition: 0.3s;
    transform: translateY(-1vh);
  }
`;

const CardProductCart = styled.div`
  margin: 0% 0 4% 0;
`;

const CardProductCartTitle = styled.h2`
  padding-bottom: 2vh;
  font-size: 2vw;
  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
`;
const CardProductCartDescription = styled.p`
  width: 80%;
  font-size: 1vw;
  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
`;

const CardCart = styled.div`
  display: flex;
  width: 92%;

  border-radius: 8px;
  margin: 3% 0;
  text-align: center;
  overflow: hidden;
  position: relative;
  &:hover {
    transition: 0.3s;
    transform: scale(1.05);
  }
`;
const CardCartImage = styled.img`
  width: 45%;

  height: auto;
`;
const CartContainer = styled.div`
  width: 70%;
`;
const CardCartPaymentBox = styled.div`
  width: 40%;
  height: auto;
`;
const CardCartPayment = styled.div`
  width: 100%;
  height: auto;
  position: sticky;
  top: 5%;
`;
const CardCartPaymentPicture = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-item: center;
  position: sticky;
  top: 5%;

  div {
    width: 80%;
    img {
      width: 100%;
    }
  }
`;

const CartPaymentButton = styled.button`
  width: 100%;
  padding: 3% 0;

  border: none;
  border-radius: 0.5vw;

  background-color: black;
  color: white;

  font-size: 1vw;
  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
`;

export {
  HeaderCommerce,
  HeaderCommerceH2,
  HeaderCommerceP,
  Child,
  ChildTitleProducts,
  FilterContainer,
  IconWrapper,
  Input,
  Container,
  CardContainer,
  Products,
  Card,
  CartContainer,
  CardContentDescription,
  CardContainerTitle,
  CardTitle,
  CardRatingIcon,
  CardImage,
  CardDescription,
  CardPriceContainer,
  CardPrice,
  CardPriceSpan,
  CardButton,
  Cart,
  CardProductCart,
  CardProductCartTitle,
  CardProductCartDescription,
  CardCartPaymentPicture,
  CardCart,
  CardCartContainer,
  CardCartImage,
  CardCartPayment,
  CardCartPaymentBox,
  CartPaymentButton,
};
