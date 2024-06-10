import styled from 'styled-components';

import devices from '../../../../styles/devices';
import theme from '../../../../styles/theme';

export const ContainerCategoryName = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const BorderBox = styled.div`
    width: 20px;
    height: 40px;
    border-radius: 4px;
    background: ${theme.accent};

    @media (${devices.tablet}) {
        width: 15px;
        height: 30px;
    }

    @media (${devices.mobileL}) {
        width: 12px;
        height: 25px;
    }
`;

export const CategoryName = styled.h2`
    font-size: 16px;
    font-weight: ${theme.fonts.weight.semiBold};
    line-height: 20px;
    color: ${theme.accent};

    @media (${devices.tablet}) {
        font-size: 14px;
    }

    @media (${devices.mobileL}) {
        font-size: 12px;
    }
`;
