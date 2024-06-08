import styled from 'styled-components';

import devices from '../../styles/devices';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    gap: 80px;
    max-width: 1366px;
    margin: 0 auto;
    padding: 40px 32px;

    @media (${devices.tablet}) {
        gap: 40px;
    }
`;
