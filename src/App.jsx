import Footer from "./components/footer/footer"
import {BrowserRouter} from 'react-router-dom' 
import Header from "./components/header/header"
import Rotas from "./routes/routes"
import { GlobalStyle } from '../src/styles/GlobalStyle.jsx'
import { useState } from "react"

function App() {

  // Estado com o objetivo de lidar com a pesquisa feitar da header
  const [pesquisa, setPesquisa] = useState('')
  
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Header 
        setPesquisa={setPesquisa}
      />
      <Rotas 
        pesquisa={pesquisa}
      />
      <Footer />
    </BrowserRouter>

        
    </>
  )
}

export default App
