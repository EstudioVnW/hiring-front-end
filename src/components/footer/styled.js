import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const Foot = styled.div`
  width: 100%;
  padding: 3vh 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #343434;
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

export { Foot, Brand, List, LinkList };
