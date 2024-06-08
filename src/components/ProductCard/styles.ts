import styled from "styled-components";

export const ProductContainer = styled.section`
  box-sizing: border-box;
  width: 200px;
  min-height: 200px;
  border-radius: 10px;
  background-color: #fff;


  .avatar {
    width: 100%;
  }

  .name {
    font-size: 1rem;
    color: #4A4A4A;
  }

  .description {
    color: #4F4F4F;
  }

  .price {
    font-size: 1rem;
    color: #33907C;
    font-weight: 600;
  }
`

export const InfoContent = styled.div`
  padding: 5px;
  width: 100%;
  height: 100%;
`