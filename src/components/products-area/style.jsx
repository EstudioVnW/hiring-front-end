import styled from "styled-components";

export const ProductsArea = styled.section `
    display: grid;
    gap: 2rem 1.25rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
export const Product = styled.div `

    max-width: 300px;
    justify-self: center;

    h2 {
        font-size: 1.25rem;
        font-weight: 600;
        padding-bottom: .25rem;
        border-bottom: 1px solid Tomato;
    }
    h3 {
        font-weight: 600;
        font-size: 1.35rem;
        color: Tomato;
        text-align: end;
        align-self: end;
    }
    img:not(button img) {
        width: 100%;
        border-radius: 6px;
        transition: opacity .2s ease;

        &:hover {
            opacity: .9;
        }
    }
    `
export const ProductText = styled.div `
    
    & > * {
        padding: .75rem 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: .5rem;
    }
    
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    button {
        padding: .5rem;
        font-weight: 700;
        width: 100%;
        display: flex;
        justify-content: center;
        border: none;
        background-color: #f9b42d;
        grid-column: 1 / 3;
        border-radius: 3px;
        cursor: pointer;
        transition: opacity .2s ease;

        &:hover {
            opacity: .9;
        }
    }
    img {
        width: 16px;        
    }
    p {
        grid-column: 1 / 3;
        max-height: 1.7rem;
        color: rgb(148, 148, 148);
        font-size: .9rem;
        overflow: hidden;
        white-space: nowrap;
        position: relative;
            
        span {
            position: absolute;
            bottom: 0;
            right: 0;
            background-color: white;
            padding: 0 .25rem;
        }
    }
`
         
export const ErrorMessage = styled.h4 `
    text-align: center;
    padding: 6rem 1rem;
    letter-spacing: 1px;
    color: gray;
`
