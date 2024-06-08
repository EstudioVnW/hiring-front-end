import styled from 'styled-components';

import devices from '../../styles/devices';
import theme from '../../styles/theme';
import { ButtonProps } from './interface';

export const Button = styled.button<ButtonProps>`
    padding: ${({ padding }) => padding || `48px 16px`};
    border: none;
    outline: none;
    border-radius: ${({ radius }) => radius || `4px`};
    background: ${({ background }) => background || `${theme.accent}`};
    font-size: ${({ size }) => size || '16px'};
    font-weight: 500;
    line-height: 24px;
    color: ${({ color }) => color || `${theme.dark}`};

    @media (${devices.tablet}) {
        padding: ${({ padding }) => padding || `24px 8px`};
        font-size: ${({ size }) => size || '14px'};
    }
`;
