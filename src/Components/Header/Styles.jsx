import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  background-color: white;
  position: sticky;
  top: 0;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  padding: 1rem;
  border-radius: 100%;
  color: #543555;
  box-shadow: 0 0 5px #b3a3d9, 0 0 10px #c2b7dd, 0 0 15px #b4acd3;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #1a2130;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  width: 40%;
  background-color: transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #8a449d;
  }

  .Icon {
    width: 20px;
    margin-left: 5px;
    color: #1a2130;
  }
`;

export const SearchBarInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px;
  background: none;
  font-family: "Sora", sans-serif;
  color: #1a2130;
  font-size: 1rem;
  &::placeholder {
    color: #1a2130;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 1rem;

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

  div {
    position: relative;
    sub {
      position: absolute;
      bottom: 5%;
      right: 5%;
      color: #000000;
      border-radius: 100%;
      font-size: 0.8rem;
      font-weight: 700;
    }
  }
`;

export const DropdownMenuContent = styled.div`
  position: fixed;
  top: 11%;
  right: 10px;
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  z-index: 10;
  max-width: 320px;
  width: 100%;
  max-height: 40dvh;
  overflow-y: auto;
  font-family: "Sora", sans-serif;
  transition: all 0.3s ease-in-out;
  animation: slideFadeIn 0.3s ease;

  h2 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  div.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #1a2130;
    padding: 0.5rem 0;

    div.description {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      p {
        font-size: 1rem;
        color: #1a2130;
      }
      span {
        font-size: 0.8rem;
        color: #1a2130;
      }
    }

    .RemoveItem {
      cursor: pointer;
      color: #1a2130;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #ff0000;
      }
    }
  }

  p.total {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 1rem;
    color: #1a2130;
  }

  @keyframes slideFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;
