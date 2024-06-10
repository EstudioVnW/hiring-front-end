import styled from "styled-components"

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  margin: 0;
  position: relative;
  margin-top: 40px;
  padding: 0 20px 40px ;
  color: silver;

  .list-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 40px;
    height: min-content;
  }

  .cart-title {
    font-size: 2rem;
    color: #4A4A4A;
    margin-bottom: 10px;
  }

  .cart-sum {
    margin-bottom: 40px;
    color: #33907C;
    font-size: 1.5rem;
  }

  .button-finalize {
    padding: 20px;
    max-width: 200px;
    background-color: #33907C;
  }

  .button-keep-buying {
    padding: 20px;
    max-width: 200px;
    background-color: silver;
  }


  .buttons-row {
    display: flex;
    justify-content: center;
    margin: 100px 0;
    column-gap: 20px;
    width: 100%;
  }
`

export const Modal = styled.div`
  display: flex;
  width: 300px;
  min-height: 300px;
  background-color: silver;
`

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  background-color: #428bca;
`