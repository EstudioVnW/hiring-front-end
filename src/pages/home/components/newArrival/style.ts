import styled from 'styled-components';

import devices from '../../../../styles/devices';
import theme from '../../../../styles/theme';
import { CardArrivalValues } from './interface';

export const ContainerNewArrivalContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    margin-top: 40px;

    @media (${devices.mobileL}) {
        gap: 20px;
    }

    @media (${devices.laptop}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (${devices.mobileL}) {
        grid-template-columns: 1fr;
        margin-top: 20px;
    }
`;

export const CardArrival = styled.div<CardArrivalValues>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
    height: 100%;
    min-height: 284px;
    padding: 24px;
    grid-column: span ${({ column }) => column || 1};
    grid-row: span ${({ row }) => row || 1};

    @media (${devices.laptop}) {
        grid-column: span 1;
        grid-row: span 1;
    }
`;

export const CardImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CardArrivalTitle = styled.h4`
    z-index: 50;
    font-size: 24px;
    font-weight: ${theme.fonts.weight.semiBold};
    line-height: 24px;
    letter-spacing: 0.72px;
    color: ${theme.lightForegroud};
`;

export const CardArrivalParagraph = styled.p`
    z-index: 50;
    max-width: 242px;
    font-size: 14px;
    line-height: 21px;
    color: ${theme.lightForegroud};
`;
