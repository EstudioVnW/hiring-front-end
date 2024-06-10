import styled from "styled-components"

export const ShoppingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  column-gap: 20px;
  row-gap: 40px;
  justify-content: center;
  margin: 20px auto auto;
  width: 100%;
  background-color: #fff;
  margin: 0;
  position: relative;

  .banner {
    width: 100px;
    @media (max-width: 720px) {
      display: none;
    }
  }

  .limit-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 20px;
    row-gap: 40px;
    max-width: 1280px;
    margin-bottom: 40px;
    margin-top: 100px;
    min-height: 100vh;

    @media (min-width: 720px) {
      position: relative;
      top: -200px;
      margin-top: none;
    }
  }
`