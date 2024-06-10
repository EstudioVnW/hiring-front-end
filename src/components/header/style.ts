import styled, { css } from 'styled-components';

import devices from '../../styles/devices';
import theme from '../../styles/theme';

export const Header = styled.header`
    border-bottom: 1px solid ${theme.dark};
`;

export const WinterPromoSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 0 32px;
    background: ${theme.dark};

    @media (${devices.tablet}) {
        display: none;
    }
`;

export const PromoText = styled.p`
    text-align: center;
    font-size: 14px;
    line-height: 21px;
    color: ${theme.lightForegroud};

    @media (${devices.tablet}) {
        font-size: 12px;
    }
`;

export const HeaderSection = styled.section`
    position: relative;
    max-width: 1366px;
    margin: 0 auto;
    padding: 0 32px;
`;

export const BoxLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    min-height: 60px;
    padding: 12px 0;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: ${theme.fonts.weight.bold};
    line-height: 1.5;
    letter-spacing: 0.72px;
    color: ${theme.dark};
`;

export const HeaderNav = styled.nav<{ menuOpen: boolean }>`
    display: flex;
    gap: 48px;
    transition: all 0.3s ease-in-out;

    a {
        font-size: 16px;
        line-height: 24px;
        color: ${theme.dark};
        transition: color 0.3s ease-in-out;

        &:hover {
            opacity: 0.8;
        }
    }

    @media (${devices.laptop}) {
        gap: 12px;
    }

    @media (${devices.tablet}) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        flex-direction: column;
        background: ${theme.lightForegroud};
        padding: 100px 20px 20px 20px;
        transform: ${({ menuOpen }) =>
            menuOpen ? 'translateY(0)' : 'translateY(-100%)'};
        opacity: ${({ menuOpen }) => (menuOpen ? '1' : '0')};
        visibility: ${({ menuOpen }) => (menuOpen ? 'visible' : 'hidden')};

        a {
            font-size: 18px;
        }
    }
`;

export const MenuButton = styled.button`
    z-index: 999;
    display: none;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    @media (${devices.tablet}) {
        display: block;
    }
`;

export const HeaderBoxSearch = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    @media (${devices.laptop}) {
        gap: 12px;
    }

    @media (${devices.tablet}) {
        width: 100%;
    }
`;

export const SearchBar = styled.form`
    position: relative;
    width: 250px;

    @media (${devices.tablet}) {
        width: 100%;
    }
`;

export const InputSearch = styled.input`
    width: 100%;
    height: 38px;
    padding: 12px 32px 12px 12px;
    border: none;
    outline: none;
    border-radius: 4px;
    background: ${theme.lightForegroud};
`;

export const BtnTransparent = styled.button<{ search?: boolean }>`
    position: relative;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    ${({ search }) =>
        search &&
        css`
            position: absolute;
            right: 8px;
            height: 40px;
        `}
`;

export const Badge = styled.span`
    position: absolute;
    top: -5px;
    right: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: ${theme.accent};
    font-size: 12px;
    color: ${theme.light};
`;
