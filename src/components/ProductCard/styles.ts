import styled from "styled-components";

export const ProductContainer = styled.section`
  box-sizing: border-box;
  width: 300px;
  min-height: 200px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #d5d9d9;;
  cursor: pointer;
  overflow: auto;
  height: min-content;

  .avatar {
    width: 100%;
    margin: 0;
    min-height: 223px;
  }

  .name {
    font-size: 1.2rem;
    color: #4A4A4A;
    text-align: left;
  }

  .description {
    color: #565959;
    height: 75px;
    font-size: .8rem;
    text-align: left;
    margin-top: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -webkit-box-orient: vertical; 
  }

  .price {
    font-size: 1.5rem;
    color: #33907C;
    font-weight: 600;
    text-align: right;
  }

  .add-to-cart-button {
    margin-top: 20px;
    background-color: rgb(255, 164, 28);
    color: #4A4A4A;
  }
`

export const InfoContent = styled.div`
  padding: 10px;
`