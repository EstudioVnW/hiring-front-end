import styled from 'styled-components';

import devices from '../../styles/devices';
import theme from '../../styles/theme';
import { ButtonProps } from './interface';

export const Button = styled.button<ButtonProps>`
    width: fit-content;
    padding: ${({ padding }) => padding || `16px 48px`};
    border: none;
    outline: none;
    border-radius: ${({ radius }) => radius || `4px`};
    background: ${({ background }) => background || `${theme.accent}`};
    font-size: ${({ size }) => size || '16px'};
    font-weight: 500;
    line-height: 24px;
    color: ${({ color }) => color || `${theme.light}`};
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;

    &:hover {
        opacity: 0.8;
    }

    @media (${devices.tablet}) {
        font-size: ${({ size }) => size || '14px'};
    }

    @media (${devices.mobileL}) {
        padding: 8px 24px;
        font-size: ${({ size }) => size || '14px'};
    }
`;
