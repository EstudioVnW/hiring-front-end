import { useState } from "react";
import * as S from "./style.jsx"
import Trash from "../../assets/icons/trash.svg"

export default function Carrinho({carrinho}) { // Recebendo a lista de items do carrinho

    // Calculo para o preço total dos items
    let total = 0;
    carrinho.forEach((e) => {
        total += (+e[2] * +e[5]);
    })

    // Criação do map de items do carrinho
    const [map, setMap] = useState(
    carrinho.map((item) => (
        <S.CarrinhoItem key={item[4]}>
            <figure>
                <img src={item[3]} alt="" />
            </figure>
            <div>
                <h2>
                    {item[0]}
                </h2>
                <h3>
                    ${item[2]}
                </h3>
                <h4>
                    {item[5]} Unidade(s)
                </h4>
            <button onClick={() => excluir(item)}>
                <img src={Trash} alt="" />
            </button>
            </div>
        </S.CarrinhoItem>
    )))

    // Função para excluir item do carrinho
    const excluir = (item) => {
        carrinho.shift(item)

        // Set timout para atualizar a lista de items do carrinho após a exclusão
        setTimeout(() => {
            setMap(carrinho.map((item) => (
                <S.CarrinhoItem key={item[4]}>
                    <figure>
                        <img src={item[3]} alt="" />
                    </figure>
                    <div>
                        <h2>
                            {item[0]}
                        </h2>
                        <h3>
                            ${item[2]}
                        </h3>
                        <h4>
                            {item[5]} Unidade(s)
                        </h4>
                    <button onClick={() => excluir(item)}>
                        <img src={Trash} alt="" />
                    </button>
                    </div>
                </S.CarrinhoItem>)))
        }, 100) 
    }

    // Função para finalizar a compra
    const finalizarCompra = () => {
        alert("Compra finalizada")
        location.reload()
    }
    return (
        <S.Carrinho>
            <h1>
                Carrinho
            </h1>
            <S.CarrinhoContainer>
                {map} 
            </S.CarrinhoContainer>
            <S.FinalizarCompra>
                <section>
                    <div>
                        <h2>
                            Total
                        </h2>
                        <h3>
                            ${total}
                        </h3>
                    </div>
                    <button onClick={() => finalizarCompra()}>
                            Finalizar Compra
                    </button>
                </section>
            </S.FinalizarCompra>
        </S.Carrinho>
    )
}