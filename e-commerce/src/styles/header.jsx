import styled from "styled-components";

export const Inicio = styled.header `

display: flex;
align-items: center;
justify-content: space-around;
height: 20vh;
background-color: #232F3E;
box-shadow: 4px 4px 2px 2px;
li{
    cursor: pointer;
    list-style: none;
}
  img{
    cursor: pointer;
}
h1{
    color: white;
    box-shadow: 2px 2px #FEBD69;
}
figcaption{
    color: white;
}
`

export const Navegacao = styled.nav `
display: flex;
align-items: center;
justify-content: space-around;
width: 20vw;

`

export const Buscador = styled.input `
width: 50vw;
height: 4vh;
border-radius:2%;
`

export const FiguraCarrinho = styled.figure `
display: flex;
flex-direction: column;
align-items: center;

`

export const SessaoCompras = styled.section `
display: flex;
flex-direction: column;
border: solid;
box-shadow: 1px 1px;
position: absolute;
top: 18%;
right: 5%;
width: 20vw;
height: 50vh;
overflow-y:auto;
z-index: 1;
background-color: aliceblue;

p{
    font-weight: 600;
}
div{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
button{
    
    padding: 0.2em 1em;
    background: none;
    border: 2px solid #fff;
    font-size: 15px;
    color: #131313;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
    border-radius: 12px;
    background-color: #FEBD69;
    font-weight: bolder;
    box-shadow: 0 2px 0 2px #000;
   }
   
   button:before {
    content: "";
    position: absolute;
    width: 100px;
    height: 120%;
    background-color: #ff6700;
    top: 50%;
    transform: skewX(30deg) translate(-150%, -50%);
    transition: all 0.5s;
   }
   
   button:hover {
    background-color: #232F3E;
    color: #fff;
    box-shadow: 0 2px 0 2px #0d3b66;
   }
   
   button:hover::before {
    transform: skewX(30deg) translate(150%, -50%);
    transition-delay: 0.1s;
   }
   
   button:active {
    transform: scale(0.9);
   }

`

export const SessaoItens = styled.div`
border-bottom: solid 1px;
img{
    cursor: pointer;
}
`

export const MeusItens = styled.article `
display: flex;
align-items: center;
justify-content: space-between;
font-weight: 800;
font-size: 1.3rem;
`

export const SessaoBuscador = styled.section `
display: flex;
align-items: center;
justify-content: center;
gap: 20px;

img{
    width: 30px;
}
`

