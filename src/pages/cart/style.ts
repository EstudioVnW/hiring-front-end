import styled from 'styled-components';

import theme from '../../styles/theme';

export const ContainerContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const BoxContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 20px;
    flex: 1;
`;

export const TextCart = styled.p`
    font-size: 16px;
    line-height: 24px;
`;

export const ProductImageCart = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 4px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
`;

export const CartTitle = styled.h1`
    font-size: 20px;
    font-weight: ${theme.fonts.weight.medium};
    line-height: 20px;
    text-align: center;
`;

export const BoxCartTotal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: fit-content;
    padding: 24px;
    margin: 0 auto;
    border-radius: 4px;
    border: 1.5px solid #000;
`;
