import styled from 'styled-components';

import devices from '../../styles/devices';
import theme from '../../styles/theme';
import { TextsProps } from './interface';

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    cursor: pointer;
`;

export const CardContainerImage = styled.figure`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

export const CardBoxInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (${devices.mobileL}) {
        gap: 4px;
    }
`;

export const CardBoxPrice = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
`;

export const CardText = styled.p<TextsProps>`
    font-size: ${({ size }) => size || '16px'};
    font-weight: ${theme.fonts.weight.medium};
    line-height: 24px;
    color: ${({ color }) => color || `${theme.dark}`};
    opacity: ${({ opacity }) => opacity || '1'};

    @media (${devices.mobileL}) {
        font-size: 14px;
        line-height: 16px;
    }
`;
