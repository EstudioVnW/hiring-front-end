import * as S from "./style"
import ProductsArea from "../../components/products-area/products-area"
import { useState } from "react"

export default function MainPage({pesquisa, setPaginaInformacao, carrinho, setCarrinho}) {
    /*
        Recebendo, respectivamente:
        - Valor da pesquisa
        - Função para definir o valor específico de certo item
        - Estado com a lista dos items do carrinho
        - Função para modificar a lista dos items do carrinho

        Todos estes item irão para o componente ProductsArea
     */

    
    // Estado para definir a ordem dos items apresentados
    const [ordem, setOrdem] = useState('')

    return (
        <S.Main>
            <S.Titulo>
                <h1>
                    Encontre os melhores descontos e ofertas do mercado AQUI!
                </h1>
            </S.Titulo>
            <S.MainContainer className="main-container">
                <article className="buy-area">
                    <header>
                        <S.Ordernar>
                            <label htmlFor="ordenar">
                                Ordernar:
                                <select name="ordenar" id="ordenar" onChange={(e) => setOrdem(e.target.value)}>
                                    <option value="default">Selecionar</option>
                                    <option value="alf-down">Alfabéticamente A-Z</option>
                                    <option value="alf-up">Alfabéticamente Z-A</option>
                                    <option value="pri-up">Preço de menor para maior</option>
                                    <option value="pri-down">Preço de maior para menor</option>
                                </select>
                            </label>
                        </S.Ordernar>
                        <figure>
                            <img src="" alt="" /><img src="" alt="" />
                        </figure>
                    </header>
                </article>
                {/* Chamando o componente e passando seus valores através de Props */}
                <ProductsArea 
                    ordem={ordem} 
                    pesquisa={pesquisa}
                    setPaginaInformacao={setPaginaInformacao}
                    carrinho={carrinho}
                    setCarrinho={setCarrinho}
                />
            </S.MainContainer>
        </S.Main>
    )
}