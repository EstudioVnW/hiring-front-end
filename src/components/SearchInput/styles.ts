import styled from 'styled-components'

export const InputContainer = styled.input`
  min-width: 500px;
  border-radius: 5px;
  padding: 0 10px;
  background-color: #fff;
  height: auto;
  width: max-content;
  color: #4A4A4A;
  font-size: 1rem;
  margin: 5px 0;
  border: 1px solid gray;
  
  &:focus {
    outline: rgb(255, 164, 28) solid 2px;
  }
`