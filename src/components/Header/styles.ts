import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  box-sizing: border-box;
  background-color: #131A22;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  padding: 20px 15px 20px 15px;

  .cart-button {
    border: none;
    /* background-color: rgba(0, 0, 0, 30%); */
    outline: none;
    &:hover {
      background-color: rgba(0, 0, 0, 40%);
    }
  }

  .input-container {
    display: flex;
    flex-direction: row;
    height: 50px;
    gap: 30px;
  }
`