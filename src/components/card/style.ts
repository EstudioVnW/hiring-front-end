import styled from 'styled-components';

import devices from '../../styles/devices';
import theme from '../../styles/theme';
import { TextsProps } from './interface';

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 270px;

    @media (${devices.laptopL}) {
        width: 220px;
    }

    @media (${devices.laptop}) {
        width: 150px;
        gap: 8px;
    }

    @media (${devices.mobileS}) {
        width: 120px;
    }
`;

export const CardImage = styled.img`
    width: 270px;
    height: 270px;
    border-radius: 4px;
    aspect-ratio: 1 / 1;
    object-fit: cover;

    @media (${devices.laptopL}) {
        width: 220px;
        height: 220px;
    }

    @media (${devices.laptop}) {
        width: 150px;
        height: 150px;
    }

    @media (${devices.mobileS}) {
        width: 120px;
        height: 120px;
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
