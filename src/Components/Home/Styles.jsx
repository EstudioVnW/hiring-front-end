// Styles.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.25rem;
  height: 78vh;
  position: relative;
  background-image: url("/banner.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 1rem;
`;

export const Title = styled.h1`
  color: #ffffff;
  margin: 0;
  font-size: 4rem;
  font-weight: 500;
  max-width: 60%;
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: transparent;
  color: black;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 2px solid #000;
  font-size: 1em;
  font-family: Sora, sans-serif;
  font-weight: 600;

  &:hover {
    background-color: #f0f0f0;
    transition: all 0.3s ease-in-out;
  }
`;
