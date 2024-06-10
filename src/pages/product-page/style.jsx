import styled from "styled-components";

export const ProductPage = styled.main `

    display: grid;
    padding-top: 4rem;
    grid-template-columns: 1fr 3fr 3fr 3fr 1fr;

    @media (max-width: 500px) {
        & {
            padding: 0;
        }
    }
`
export const ProductPageContainer = styled.article  `
    grid-column: 2 / 5;
    gap: 2rem;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    
    figure {
        display: flex;
        align-items: center;
        justify-content: center;
        
        img {
            width: 100%;
            max-width: 28rem;
        }
    }
    @media (max-width: 500px) {
        & {
            grid-column: 1 / 6;
        }
    }
`
    

export const ProductPageDescription = styled.section `
    display: flex;
    padding: 0 1.5rem;
    flex-direction: column;
    gap: .5rem;
    justify-self: center;

    h1 {
        font-size: 2rem;
        font-weight: 600;
    }
    p {
        font-size: 1rem;
        max-width: 25rem;
        color: gray;
    }
    h2 {
        color: tomato;
        font-size: 1.4125rem;
        font-weight: 600;
    }
`
export const buyArea = styled.div `
    margin-top: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`
export const addRemove = styled.div `
    display: grid;
    border-radius: 6px;
    overflow: hidden;
    grid-template-columns: 1fr 4fr 1fr;

    div {
        background-color: #f8f0e4;
        text-align: center;
        padding: .5rem;
        font-size: 1.125rem;
        color: tomato;
        font-weight: 700;
        cursor: pointer;
        opacity: .8;
        user-select: none;

        &:hover {
            opacity: 1;
        }
    }
    input {
        width: 100%;
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        background-color: #f8f0e4;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        border: none;

        .num-add-sub input:focus {
            outline: none;
        }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`
export const addToCart = styled.button `
    background-color: #f9b42d;
    border: none;
    padding: .5rem 0;
    font-weight: 600;
    color: #4b3200;
    border-radius: 6px;
    cursor: pointer;
    transition: opacity .2s ease;

    &:hover {
        opacity: .9;
    }
`

export const MsgError = styled.h1 `
    text-align: center;
    padding: 2rem 1rem;
`
