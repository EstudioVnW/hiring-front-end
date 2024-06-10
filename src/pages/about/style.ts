import styled from 'styled-components';

import devices from '../../styles/devices';

export const ContainerContent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Title = styled.h1`
    font-size: 40px;
    line-height: 64px;
    letter-spacing: 3.24px;

    @media (${devices.tablet}) {
        font-size: 32px;
    }

    @media (${devices.mobileL}) {
        font-size: 24px;
    }
`;

export const Paragraph = styled.p`
    font-size: 16px;
    line-height: 140%;

    @media (${devices.tablet}) {
        font-size: 14px;
    }
`;

export const Subtitle = styled.h2`
    font-size: 24px;

    @media (${devices.tablet}) {
        font-size: 20px;
    }

    @media (${devices.mobileL}) {
        font-size: 16px;
    }
`;

export const List = styled.li`
    font-size: 16px;
    line-height: 140%;

    @media (${devices.tablet}) {
        font-size: 14px;
    }
`;
