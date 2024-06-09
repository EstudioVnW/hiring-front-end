import styled from "styled-components"

export const CartContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: silver;
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