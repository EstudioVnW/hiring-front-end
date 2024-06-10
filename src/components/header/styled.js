import styled, { createGlobalStyle } from "styled-components";

import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";

const Header = styled.header`
  width: 100%;
  padding: 3vh 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid #bebebe 2px;
`;

const HeaderNav = styled.nav`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 300;

  @media (max-width: 890px) {
    width: 90%;
  }
`;
const HeaderNavMenu = styled.button`
  background-color: transparent;
  border: none;
  display: none;
  @media (max-width: 580px) {
    display: grid;
  }
`;

const NavContent = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 580px) {
    width: 80%;
  }
  @media (max-width: 450px) {
    width: 60%;
  }
`;

const Nav = styled.div`
  width: 100%;
  & ul {
    width: 100%;
    margin: 0 2%;

    display: flex;
    justify-content: space-around;
    list-style: none;
  }

  @media (max-width: 580px) {
    display: none;
  }
`;

const NavItem = styled.li`
  width: 40%;
  position: relative;
  text-align: center;
  font-size: 1.2vw;

  &::before {
    content: "";
    width: 0%;
    height: 0.5vh;
    position: absolute;
    top: 3vh;
    left: 35%;
    background-color: #ff0000;
  }

  &:hover::before {
    width: 30%;
    transition: 0.5s;
  }

  @media (max-width: 1100px) {
    width: 50%;
    font-size: 1.6vw;
  }
  @media (max-width: 890px) {
    width: 50%;
    font-size: 2.5vw;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Brand = styled.div`
  width: 100%;
  text-align: center;

  font-size: 3vw;
  font-weight: bold;
  font-family: "League Spartan", sans-serif;
  font-optical-sizing: auto;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }

  @media (max-width: 890px) {
    width: 50%;
    font-size: 4.5vw;
  }
  @media (max-width: 650px) {
    width: 30%;
    font-size: 5vw;
  }
  @media (max-width: 450px) {
    font-size: 6vw;
    width: 100%;
  }
`;

const Icons = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
`;

const IconUser = styled(FaUserAlt)`
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
  margin-left: 70%;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 890px) {
    margin-left: 30%;
  }
  @media (max-width: 650px) {
    margin-left: 20%;
  }
`;
const BagCartIcon = styled(BsBagHeartFill)`
  &:hover {
    transform: scale(1.2);
  }
`;

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #00000052;
  z-index: 2;
`;
const ModalCard = styled.div`
  width: 60%;
  height: 100vh;
  background-color: white;
  z-index: 3;
`;
const ModalCardClose = styled.button`
  width: 100%;
  margin-top: 5vh;
  background-color: transparent;
  border: none;
  z-index: 4;
`;
const NavModal = styled.nav`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  aling-items: center;
  flex-direction: column;
`;
const NavModalList = styled.ul`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  aling-items: center;
  flex-direction: column;
`;
const NavModalLi = styled.li`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    background-color: black;
    transition: 0.2s;
    a {
      color: white;
    }
  }
`;

const NavModalLink = styled(Link)`
  text-decoration: none;
  backgorund-color: red;
  color: black;
`;

export {
  Header,
  HeaderNav,
  HeaderNavMenu,
  NavContent,
  Nav,
  NavItem,
  NavLink,
  Brand,
  Icons,
  IconUser,
  BagCart,
  BagCartIcon,
  Modal,
  ModalCard,
  NavModal,
  ModalCardClose,
  NavModalList,
  NavModalLi,
  NavModalLink,
};
