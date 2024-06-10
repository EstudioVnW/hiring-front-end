import styled from 'styled-components';

import devices from '../../styles/devices';

export const ContainerContent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (${devices.laptop}) {
        gap: 20px;
    }
`;

export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;

    @media (${devices.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
