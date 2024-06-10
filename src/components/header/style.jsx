import styled from "styled-components";

export const Header = styled.header `
    border-bottom: 2px solid rgba(206, 206, 206, 0.459);
    display: grid;
    grid-template-columns: 1fr 5fr 7fr 4fr 1fr;
    align-items: center;
    gap: 1rem;
    padding: .6125rem 0;
    position: sticky;
    background-color: #fff;
    z-index: +2;
    top: 0;
`

export const LogoArea = styled.figure `
    display: flex;
    grid-column: 2 / 3;

    img {
        width: 10rem;
        cursor: pointer;
        &:hover {
            opacity: .9;
        }
    }

    @media (max-width: 700px) {
        img {
            width: 8rem;
        }   
    }
`

export const SearchBar = styled.section `
    display: flex;
    height: fit-content;
    grid-column: 3 / 4;

    input {
        border-radius: 25px 0 0 25px;
        width: 100%;
        background-color: #f7f7f7;
        border: 1px solid #ffe4af;
        font-size: .9rem;
        padding: 0 1rem;
        transition: border .1s ease;

        &:focus {
            outline: none;
            border: 1px solid #f9b42d;
        }
    }
        
    button {
        border-radius: 0 25px 25px 0;
        border: none;
        padding: .45rem .75rem;
        background-color: #f9b42d;
        cursor: pointer;
        transition: opacity .2s ease;

        &:hover {
            opacity: .9;
        }
    }
    button img {
        width: 22px;
    }
    @media (max-width: 700px) {
        & {
            grid-row: 2 / 3;
            grid-column: 2 / 5;
        }
}
`

export const Cart = styled.section `
    padding: 0 .5rem;
    display: flex;
    justify-content: end;

    figure {
        display: flex;
    }
    figure img {
        display: flex;
        width: 28px;
        transition: opacity .2s ease;
        &:hover {
            opacity: .7;
        }
    }

    @media (max-width: 700px) {
        & {
            grid-column: 4 / 5;
        }
    }
`