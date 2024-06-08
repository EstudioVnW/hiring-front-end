import styled from 'styled-components';

import devices from '../../styles/devices';
import theme from '../../styles/theme';

export const Subtitle = styled.h3`
    font-size: 36px;
    font-weight: ${theme.fonts.weight.semiBold};
    line-height: 48px;
    letter-spacing: 1.44px;
    color: ${theme.dark};

    @media (${devices.laptop}) {
        font-size: 30px;
        line-height: normal;
    }

    @media (${devices.tablet}) {
        font-size: 24px;
    }
`;
