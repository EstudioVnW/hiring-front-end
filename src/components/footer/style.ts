import styled from 'styled-components';

import theme from '../../styles/theme';

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    background: ${theme.dark};
`;

export const Paragraph = styled.p`
    font-size: 16px;
    color: ${theme.light};
`;
