import styled, { css } from 'styled-components';

import devices from '../../styles/devices';
import theme from '../../styles/theme';

export const ContainerProduct = styled.div`
    display: flex;
    gap: 40px;
    color: ${theme.dark};

    @media (${devices.tabletS}) {
        flex-direction: column;
        gap: 20px;
    }

    @media (${devices.mobileL}) {
        gap: 8px;
    }
`;

export const ProductFigure = styled.figure`
    flex: 1;
`;

export const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
`;

export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;

    @media (${devices.tabletS}) {
        gap: 8px;
    }
`;

export const ProductName = styled.h2`
    font-size: 24px;
    font-weight: ${theme.fonts.weight.semiBold};
    letter-spacing: 0.72px;

    @media (${devices.tabletS}) {
        font-size: 18px;
    }
`;

export const ProductPrice = styled.h3`
    font-size: 32px;
    font-weight: ${theme.fonts.weight.light};
    letter-spacing: 0.72px;

    @media (${devices.tabletS}) {
        font-size: 20px;
    }
`;

export const ProductText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    @media (${devices.tabletS}) {
        font-size: 14px;
    }
`;

export const InlineContent = styled.span<{ border?: boolean }>`
    display: flex;
    align-items: center;
    gap: 16px;
    ${({ border }) =>
        border &&
        css`
            padding-bottom: 16px;
            border-bottom: 1px solid ${theme.dark};
        `}
`;

export const BoxInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px 16px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.5);
`;

export const ContainerOtherProducts = styled.section`
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
`;
