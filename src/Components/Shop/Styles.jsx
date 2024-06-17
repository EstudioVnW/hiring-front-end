// Styles.js
import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ProductCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductName = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 10px;
`;
export const SearchIcon = styled.img`
  width: 20px;
  margin-left: 5px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;

  .Icon {
    cursor: pointer;
    border: none;
    border-radius: 100%;
    padding: 0.5rem;

    &:hover {
      background-color: #8a449d;
      color: #ffffff;
      transition: all 0.3s ease-in-out;
    }
  }

  .HeartIcon {
    ${({ favorite }) =>
      favorite &&
      css`
        color: #ff0000;
      `}
  }

  .cartIcon {
    ${({ isInCart }) =>
      isInCart &&
      css`
        color: #8a449d;
      `}
  }
`;

export const ProductContent = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
`;

export const ProductHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.25rem;
`;
