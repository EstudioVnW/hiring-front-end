import styled from 'styled-components';

import devices from '../../styles/devices';
import theme from '../../styles/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 103px - 41px);
    background-color: ${theme.background};
    color: ${theme.dark};
    text-align: center;
`;

export const Title = styled.h1`
    font-weight: ${theme.fonts.weight.bold};
    font-size: 40px;
    margin-bottom: 20px;

    @media (${devices.tablet}) {
        font-size: 32px;
    }
`;

export const Description = styled.p`
    font-weight: ${theme.fonts.weight.normal};
    font-size: 24px;
    text-align: center;
    margin-bottom: 40px;

    @media (${devices.tablet}) {
        font-size: 18px;
    }
`;
