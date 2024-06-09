import styled, { createGlobalStyle } from "styled-components";
import img from "../../image/store.png";

import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Header = styled.header`
  width: 100%;
  padding: 3vh 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HeaderNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
`;

const NavContent = styled.div`
  width: 90%;
  padding-left: 5%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Nav = styled.div`
  & ul {
    width: 20vw;
    display: flex;
    justify-content: space-around;
    list-style: none;
    font-size: 1.3vw;
  }
`;

const NavItem = styled.li`
  width: 40%;
  position: relative;
  text-align: center;

  &::before {
    content: "";
    width: 0%;
    height: 0.5vh;
    position: absolute;
    top: 100%;
    left: 35%;
    background-color: #ff0000;
  }

  &:hover::before {
    width: 30%;
    transition: 0.5s;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Brand = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

const Icons = styled.div`
  width: 5%;
  padding-left: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconUser = styled(FaUserAlt)`
  width: 100%;
  color: black;

  &:hover,
  .icon-cart:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const BagCart = styled(Link)`
  text-decoration: none;
  color: red;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

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

export {
  Header,
  HeaderNav,
  NavContent,
  Nav,
  NavItem,
  NavLink,
  Brand,
  Icons,
  IconUser,
  BagCart,
  HeaderCommerce,
  HeaderCommerceH2,
  HeaderCommerceP,
};
