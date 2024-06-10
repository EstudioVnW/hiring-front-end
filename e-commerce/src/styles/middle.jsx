import styled from "styled-components"

export const Corpo = styled.main`
min-height: 100vh;
section{
    display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 10px;
margin-top: 20px;
}
figure{
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0.2px 0.2px;
    width: 300px;
    height: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
    text-align: center;
    gap: 10px;
}
img{
    margin-top: 3%;
    width: 260px;
    border: solid grey 1px;
}

button{
    
 padding: 1.1em 2em;
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


.SemProduto{
    width: 96vw;
    height: 97vh;
   display: flex;
   align-items: center;
   justify-content: center;
   border: none;
   display: flex;
   align-items: center;
   flex-direction: column;
   img{
    border: none;
   }
   font-weight: 200;
   font-size: 3rem;
  
}
`