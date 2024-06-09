import styled from 'styled-components';

import devices from '../../../../styles/devices';

export const ContainerOurProducts = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (${devices.mobileL}) {
        gap: 20px;
    }
`;

export const BoxSubtitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 40px;

    @media (${devices.laptop}) {
        gap: 20px;
    }

    @media (${devices.tablet}) {
        gap: 8px;
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
`;
