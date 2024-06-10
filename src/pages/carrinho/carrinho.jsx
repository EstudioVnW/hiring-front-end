import { useState } from "react";
import * as S from "./style.jsx"
import { Link } from "react-router-dom";

export default function Carrinho({carrinho}) {

    let total = 0;
    carrinho.forEach((e) => {
        total += (+e[2] * +e[5]);
    })

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
                Excluir Item
            </button>
            </div>
        </S.CarrinhoItem>
    )))

    const excluir = (item) => {
        console.log("cu")
        carrinho.shift(item)
        console.log(carrinho)

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
                        Excluir Item
                    </button>
                    </div>
                </S.CarrinhoItem>)))
        }, 100) 
    }

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