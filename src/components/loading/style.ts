import styled, { keyframes } from 'styled-components';

import theme from '../../styles/theme';

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
    background: ${theme.background};
`;

export const Spinner = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid ${theme.lightForegroud};
    border-top: 4px solid ${theme.accent};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;
