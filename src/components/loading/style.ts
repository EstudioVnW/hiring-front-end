import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 103px);
    background-color: ${({ theme }) => theme.background};
`;

export const Spinner = styled.div`
    border: 4px solid ${({ theme }) => theme.lightForegroud};
    border-top: 4px solid ${({ theme }) => theme.accent};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spin} 1s linear infinite;
`;
