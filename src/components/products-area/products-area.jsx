import Cart from "../../assets/icons/cart.svg"
import * as S from "./style.jsx"

import { Link } from "react-router-dom"

import axios from "axios"

import { useEffect, useState } from "react"


export default function ProductsArea({ordem, pesquisa, setPaginaInformacao, carrinho, setCarrinho}) {
    /* Recebendo, respectivamente: 
        - A ordem de organização dos items
        - O estado com o valor da pesquisa feita na headder
        - Função para informar outros components os dados do Item específico acessado
        - Estado com a lista dos items do carrinho
        - Função para modificar a lista dos items do carrinho
    */


    // Declaração de Estados para o armazenamento dos dados da API
    const [produtos, setProdutos] = useState([])
    const [produtosFiltrados, setProdutosFiltrados] = useState([])
    const pegarDados = async () => {
        
        // Consumo dos dados utilizando de axios
        try {
            const Dados = await axios.get("https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos");
            setProdutos(Dados.data)
            setProdutosFiltrados(Dados.data)
            setErrorDisplay("none")
        } catch {
            setErrorDisplay("block")
        }
    }
    useEffect(() => {
        pegarDados()
    }, [])

    // Função para organizar os itens de formas diferentes 
    useEffect(() => {
        if (ordem === "pri-down") {
            produtosFiltrados.sort((a, b) => b.price - a.price)
        } 
        else if (ordem === "pri-up") {
            produtosFiltrados.sort((a, b) => a.price - b.price)
        } 
        else if (ordem === "alf-up") {        
            produtosFiltrados.sort((a, b) => b.name.localeCompare(a.name))
        }
        else if (ordem === "alf-down") {
            produtosFiltrados.sort((a, b) => a.name.localeCompare(b.name))
        }
    }, [ordem])
    

    // Função que recebe a pesquisa feita na header e filtra a lista de itens a partir dela
    const filtrar = () => {
        const listaFiltrada = produtos.filter(f => f.name.toLowerCase().includes(pesquisa.toLowerCase()))

        setErrorDisplay("none")
        if(pesquisa !== '' && listaFiltrada.length >= 1) {
            setProdutosFiltrados(listaFiltrada)
        } 
        else if(pesquisa == '') {
            setProdutosFiltrados(produtos)
        }
        else {
            setProdutosFiltrados([])
            setErrorDisplay("block")
        }
    }

    // Função para fazer a pesquisa funcionar, e apenas uma vês por clique, com
    // a tecla Enter
    const [errorDisplay, setErrorDisplay] = useState("none")
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        
        document.querySelector("#botao-pesquisa").addEventListener("click", () => {
            filtrar()
        })

        const handleKeyUp = (e) => {
            if (e.key === 'Enter' && !clicked) {
                filtrar();
                setClicked(true);
            } 
            setTimeout(() => {
                setClicked(false)
            }, 2000);
        }; 
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [clicked, pesquisa]);


    /* Função para adcionar items ao carrinho com as seguintes funções:
        - Na primeira vês irá adcionar o item  ao carrinho adjunto de um novo valor que representa a quantidade   
        - Se um item ja foi adcionado, ele irá apenas aumentar a quantidade deste item
        - Caso adcione outros items, e volte para adcionar este, ele irá adcionar no item correto
    */
    let jaAdcionado = false;
    let posicao;
    const addToCart = (item) => {
        const items = [item.name, item.desciption, item.price, item.avatar, item.id];

        carrinho.forEach((e, i) => {
            if (e[4] == items[4]) {
                jaAdcionado = true;
                posicao = i;
            }
        })
        
        if (jaAdcionado) {
            setCarrinho(carrinho, carrinho[posicao][5] = +carrinho[posicao][5] + 1)
        }
        else {
            items.push(1)
            setCarrinho(carrinho, carrinho.unshift(items))
        }
    }

    return (
        <S.ProductsArea>
            {produtosFiltrados.map((item) => (
                <S.Product key={item.id} onClick={() => setPaginaInformacao([item.name, item.desciption, item.price, item.avatar, item.id])}>
                    <figure>
                        <Link to="/produto">
                            <img src={item.avatar} alt={item.name} />
                        </Link>
                    </figure>
                    <S.ProductText>
                        <Link to="/produto">
                            <h2>
                                {item.name}
                            </h2>
                            <h3>
                                ${item.price}
                            </h3>
                            <p>
                                {item.desciption} <span>...</span>
                            </p>
                        </Link>
                        <button onClick={() => addToCart(item)}>
                            <img src={Cart} alt="Adcionar ao Carrinho" title="Adcionar ao Carrinho" />
                        </button>
                    </S.ProductText>
                </S.Product>
            ))}
            <S.ErrorMessage style={{display:errorDisplay}}>
                Infelizmente não foi possível achar produtos. :&#40;
            </S.ErrorMessage>
        </S.ProductsArea>
    )
}