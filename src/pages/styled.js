import styled from "styled-components";
import img from "../image/store.png";

import { Rating, RoundedStar } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { MdSearchOff } from "react-icons/md";
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

  @media (max-width: 890px) {
    font-size: 8vw;
  }
  @media (max-width: 450px) {
    font-size: 10vw;
  }
`;

const HeaderCommerceP = styled.p`
  width: 50%;
  font-size: 1.3vw;
  text-align: center;
  font-weight: lighter;

  @media (max-width: 1100px) {
    font-size: 1.7vw;
  }
  @media (max-width: 890px) {
    width: 80%;
    font-size: 3vw;
  }

  @media (max-width: 450px) {
    font-size: 5vw;
  }
`;

const Child = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5vh 0vw;

  @media (max-width: 890px) {
    flex-direction: column;
  }
`;

const ChildTitleProducts = styled.h1`
  font-size: 2vw;
  font-weight: bold;
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;

  @media (max-width: 890px) {
    font-size: 4vw;
  }
  @media (max-width: 450px) {
    font-size: 8vw;
    margin-bottom: 2vh;
  }
`;

const FilterContainer = styled.label`
  display: flex;
  align-items: center;
  padding: 0.5vw;
  width: 30%;
  border: 1px solid;
  border-radius: 2vw;

  @media (max-width: 890px) {
    width: 40%;
  }
  @media (max-width: 450px) {
    width: 90%;
    padding: 3vw;
  }
`;

const IconWrapper = styled.div`
  padding-left: 0.5vw;
  @media (max-width: 890px) {
    font-size: 2.5vw;
  }
  @media (max-width: 450px) {
    font-size: 5vw;
  }
`;

const Input = styled.input`
  width: 98%;
  padding-left: 0.5vw;
  border: none;
  outline: none;
  font-size: 1rem;
  @media (max-width: 890px) {
    padding-left: 1vw;
    font-size: 2.5vw;
  }
  @media (max-width: 450px) {
    padding-left: 3vw;
    font-size: 3.5vw;
  }
`;

const Container = styled.div`
  width: auto;
  height: auto;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  width: 100%;
  margin: 0% 8%;
  padding: 16px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 890px) {
    margin: 0%;
  }
`;

const Products = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 2%;
  width: 16vw;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  background-color: whitesmoke;

  &:hover {
    transition: 0.3s;
    transform: translateY(-1vh);
  }
  @media (max-width: 1100px) {
    width: 29%;
  }
  @media (max-width: 890px) {
    width: 40%;
    marign: 0%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

const CardContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5vh 2vw 2vh 2vw;
  @media (max-width: 1100px) {
    padding: 2vh 2vw;
  }
  @media (max-width: 890px) {
    padding: 2vh;
  }
  @media (max-width: 450px) {
    padding: 5vw;
  }
`;
const CardContentDescription = styled.div`
  width: 100%;
  position: relative;
`;

const CardRatingIcon = styled(Rating)`
  width: 100px;
  @media (max-width: 1100px) {
    width: 130px;
  }
  @media (max-width: 890px) {
    width: 170px;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5vw;
  font-weight: bold;
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;
  @media (max-width: 1100px) {
    font-size: 2vw;
  }
  @media (max-width: 890px) {
    font-size: 4vw;
  }
  @media (max-width: 450px) {
    font-size: 8vw;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardDescription = styled.p`
  width: 100%;
  height: auto;
  font-size: 1.1vw;
  padding: 0 2vw;
  text-align: left;
  font-weight: 300;
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;
  @media (max-width: 1100px) {
    font-size: 1.5vw;
  }
  @media (max-width: 890px) {
    font-size: 2.5vw;
  }
  @media (max-width: 450px) {
    font-size: 5vw;
    padding: 0 5vw;
  }
`;

const CardPriceContainer = styled.div`
  width: 100%;
  padding: 0 2vw;
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    padding: 0 6vw;
  }
`;

const CardPrice = styled.p`
  font-size: 1.2vw;
  font-weight: normal;
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;
  color: black;
  @media (max-width: 1100px) {
    font-size: 1.5vw;
  }
  @media (max-width: 890px) {
    font-size: 2.5vw;
  }
  @media (max-width: 450px) {
    font-size: 5vw;
  }
`;
const CardPriceSpan = styled.span`
  font-size: 1.2vw;
  font-weight: bolder;
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;

  color: #03a800;
  padding-right: 0.5vw;

  @media (max-width: 1100px) {
    font-size: 1.5vw;
  }

  @media (max-width: 890px) {
    font-size: 2.5vw;
  }
  @media (max-width: 450px) {
    font-size: 5vw;
  }
`;

const CardButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 2px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
const Cart = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5%;
  position: relative;

  @media (max-width: 890px) {
    flex-direction: column;
    justify-content: center;
  }
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

  @media (max-width: 890px) {
    width: 85vw;
  }
`;

const CardProductCart = styled.div`
  margin: 0% 0 4% 0;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const CardProductCartTitle = styled.h2`
  padding-bottom: 2vh;
  font-size: 2vw;
  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;

  @media (max-width: 890px) {
    padding: 5vh 0 2vh 0;
    font-size: 3vw;
  }
  @media (max-width: 450px) {
    width: 100%;
    font-size: 6vw;
  }
`;
const CardProductCartDescription = styled.p`
  width: 80%;
  font-size: 1vw;
  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;

  @media (max-width: 890px) {
    width: 100%;
    font-size: 2vw;
  }

  @media (max-width: 450px) {
    width: 100%;
    font-size: 3vw;
    padding-bottom: 3vh;
  }
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

  @media (max-width: 890px) {
    font-size: 2vw;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;
const CardCartImage = styled.img`
  width: 45%;
  height: auto;

  @media (max-width: 650px) {
    width: 100%;
    marign: 0%;
  }
`;
const CartContainer = styled.div`
  width: 70%;
`;
const CardCartPaymentBox = styled.div`
  width: 40%;
  height: auto;

  @media (max-width: 890px) {
    width: 100%;
  }
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

    @media (max-width: 890px) {
      width: 40%;
      padding-bottom: 5vh;
    }
    @media (max-width: 450px) {
      width: 60%;
      padding-bottom: 5vh;
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

  @media (max-width: 890px) {
    font-size: 2vw;
  }

  @media (max-width: 890px) {
    font-size: 3vw;
  }
`;
const CartRenderContainer = styled.div`
  width: 100%;
  padding: 3% 0;

  display: flex;
  justify-content: center;

  @media (max-width: 890px) {
    font-size: 2vw;
  }

  @media (max-width: 890px) {
    font-size: 3vw;
  }
`;
const CartRenderButton = styled.button`
  width: 20%;
  padding: 1% 0;

  border: none;
  border-radius: 0.5vw;

  background-color: black;
  color: white;

  font-size: 1vw;
  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;

  @media (max-width: 890px) {
    font-size: 2vw;
  }

  @media (max-width: 890px) {
    font-size: 3vw;
  }
`;

const Foot = styled.div`
  width: 100%;
  padding: 3vh 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  color: whitesmoke;
`;
const Brand = styled.div`
  width: 40%;
  font-size: 40px;
  font-weight: bold;
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;
`;
const List = styled.div`
  width: 30%;
  display: flex;
  list-style: none;
  justify-content: space-around;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  li {
    &:hover {
      transform: scale(1.1);
    }
  }
  a {
    text-decoration: none;
  }
`;
const LinkList = styled(Link)`
  color: whitesmoke;
`;

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;

  padding: 4%;
  border-radius: 2vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Icon = styled(MdSearchOff)`
  color: black;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Message = styled.h1`
  font-size: 24px;
  color: #495057;
  margin-bottom: 10px;
`;

const Label = styled.p`
  font-size: 16px;
  color: #868e96;
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
  Foot,
  Brand,
  List,
  LinkList,
  NotFoundContainer,
  Icon,
  Message,
  Label,
  CartRenderContainer,
  CartRenderButton,
};
