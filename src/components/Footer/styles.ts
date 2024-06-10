import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: 250px;
  width: 100%;
  background-color: #131a222b;

  .back-to-init {
    width: 100%;
    background-color: gray;
    padding: 10px 0;
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