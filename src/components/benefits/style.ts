import styled from 'styled-components';

import devices from '../../styles/devices';
import theme from '../../styles/theme';

export const ContainerBenefits = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 88px;
    text-align: center;

    @media (${devices.laptop}) {
        gap: 24px;
    }
`;

export const CardBenefits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 250px;
`;

export const CardBoxIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    border-radius: 100%;
    background: ${theme.dark};
`;

export const CardBenefitsTitle = styled.h4`
    font-size: 16px;
    font-weight: ${theme.fonts.weight.semiBold};
    color: ${theme.dark};
`;

export const CardBenefitsText = styled.p`
    font-size: 14px;
    line-height: 21px;
    color: ${theme.dark};
`;
