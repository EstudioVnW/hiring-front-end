import {Routes, Route} from 'react-router-dom'
import Carrinho from '../pages/carrinho/carrinho.jsx'
import MainPage from '../pages/main-page/mainPage.jsx'
import ProductPage from '../pages/product-page/productPage.jsx'
import { useState } from 'react'

export default function Rotas({pesquisa}) {

    const [paginaInformacao, setPaginaInformacao] = useState('')
    const [carrinho, setCarrinho] = useState([])

    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage 
                                            pesquisa={pesquisa}
                                            setPaginaInformacao={setPaginaInformacao}
                                            setCarrinho={setCarrinho}  
                                            carrinho={carrinho} 
                                        />}/>
                <Route path='/carrinho' element={<Carrinho
                                                    carrinho={carrinho}/>}/>
                <Route path='/produto' element={<ProductPage
                                                    paginaInformacao={paginaInformacao}
                                                    setCarrinho={setCarrinho}  
                                                    carrinho={carrinho} 
                                                />}/>
            </Routes>
        </>
    )
}