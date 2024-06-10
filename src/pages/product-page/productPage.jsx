import { useState } from "react"
import * as S from "./style.jsx"
import { Link } from "react-router-dom"

export default function ProductPage({paginaInformacao, setCarrinho, carrinho}) {

    const [quantidade, setQuantidade] = useState(1)

    let jaAdcionado = false;
    let posicao;
    
    carrinho.forEach((e, i) => {
        if (e[4] == paginaInformacao[4]) {
            jaAdcionado = true;
            posicao = i;
        }
    })

    const addToCart = () => {

        if (carrinho.includes(paginaInformacao)) {
            setCarrinho(carrinho, carrinho[0][5] = +carrinho[0][5] + quantidade)
        } 
        else if (jaAdcionado) {
            setCarrinho(carrinho, carrinho[posicao][5] = +carrinho[posicao][5] + quantidade)
        }
        else {
            paginaInformacao.push(quantidade)
            setCarrinho(carrinho, carrinho.unshift(paginaInformacao))
        }
        console.log(carrinho)
    }

    return(
        <S.ProductPage>
            <S.ProductPageContainer>
                <figure>
                    <img src={paginaInformacao[3]} alt="" />
                </figure>
                {paginaInformacao[0] ?
                <S.ProductPageDescription>
                    <h1>
                        {paginaInformacao[0]}
                    </h1>
                    <p>
                        {paginaInformacao[1]}
                    </p>
                    <h2>
                        ${paginaInformacao[2]}
                    </h2>
                        <S.buyArea>
                            <S.addRemove className="num-add-sub">
                                <div className="num-add-sub-button" onClick={() => setQuantidade(+quantidade > 1 ? +quantidade - 1 : 1)}>
                                    -
                                </div>
                                <input type="number" name="" id="" onChange={e => setQuantidade(+e.target.value)} value={quantidade}/>
                                <div className="num-add-sub-button" onClick={() => setQuantidade(+quantidade + 1)}>
                                    +
                                </div>
                            </S.addRemove>
                            <S.addToCart onClick={() => addToCart()}>
                                Add to Cart
                            </S.addToCart>
                        </S.buyArea>
                </S.ProductPageDescription>
                : <Link to="/"><S.MsgError>Volte para a página inícial</S.MsgError></Link>}
            </S.ProductPageContainer>
        </S.ProductPage>
    )
}