import styled from "styled-components";

export const Main = styled.main `
    display: grid;
    grid-template-columns: 1fr 4fr 4fr 4fr 1fr;

    article {
        padding: 1rem 0;
    }
    header {
        display: flex;
        padding: 1rem 0;
        align-items: center;
        justify-content: space-between;
    }
`

export const MainContainer = styled.div `
    grid-column: 2 / 5;
`

export const Titulo = styled.div `
    text-align: center;
    grid-column: 1 / 6;
    display: grid;
    gap: .5rem;
    padding: 3rem 1rem;
    background-image: url(./src/assets/icons/cart.svg);
    box-shadow: inset 0 240px 0px rgba(255, 255, 255, 0.911);
    background-size: 16px;

    h1 {
        font-size: 1.75rem;
        color: #583a00;
        font-weight: 500;
    }
`


export const Ordernar = styled.nav `

    label {
        display: flex;
        color: #eba822;
        gap: 1rem;
        font-size: 1.25rem;
        font-weight: 600;
        align-items: center;
    }
    select {
        width: 100%;
        padding: .5rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        border-radius: 6px;
        color: #583a00;
        letter-spacing: 1px;
        cursor: pointer;
    }
`