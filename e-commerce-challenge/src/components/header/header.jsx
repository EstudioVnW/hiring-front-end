import Logo from "../../assets/logo.png"
import Seach from "../../assets/icons/search.svg"
import Cart from "../../assets/icons/cart.svg"
import * as S from "./style.jsx"

import { Link } from "react-router-dom"

export default function Header({setPesquisa}) {


    return (
        <S.Header>
            <S.LogoArea>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </S.LogoArea>
            <S.SearchBar>
                <input type="text" onChange={e => setPesquisa(e.target.value)}/>
                <button id="botao-pesquisa">
                    <img src={Seach} alt=""/>
                </button>
            </S.SearchBar>
            <S.Cart>
                <figure>
                    <Link to="/carrinho">
                        <img src={Cart} alt="" />
                    </Link>
                </figure>
            </S.Cart>
        </S.Header>
    )
}