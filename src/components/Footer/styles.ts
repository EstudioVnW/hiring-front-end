import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: 250px;
  width: 100%;
  background-color: #131a222b;
  color: #4A4A4A;

  .back-to-init {
    width: 100%;
    background-color: #4A4A4A;
    padding: 10px 0;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: calc(100% - 38px);
  }

  .free-shipping-img {
    width: 200px;
    cursor: pointer;
  }
`

export const Button = styled.button`
  outline: none;
  border: none;
  width: 100%;
  padding: 0;

  &:focus {
    outline: none;
    border: none;
  }
`