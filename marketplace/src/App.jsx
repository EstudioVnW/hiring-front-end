import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from './components/Footer'
import { Inicio } from './styles/header'
import { Navegacao } from './styles/header'
import Carrinho from './assets/carrinho.png'
import Excluir from './assets/excluir.png'
import { Buscador } from './styles/header'
import Lupa from './assets/lupa.png'
import { FiguraCarrinho } from './styles/header'
import { SessaoCompras } from './styles/header'
import { SessaoItens } from './styles/header'
import { MeusItens } from './styles/header'
import { SessaoBuscador } from './styles/header'
import { Corpo } from './styles/middle'
import Home from './assets/home.png'
import User from './assets/user.png'
import About from './assets/about.png'
import Vento from './assets/vento.png'
//Imagens e estilos.
function App() {
  const [produto, setProduto] = useState([])
  const [buscar, setBuscar] = useState('')
  const [filtro, setFiltro] = useState('')
  const [carrinho, setCarrinho] = useState([])
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false)
  //Manipuladores de estado
  const ColetarItem = async () => {
    const Dados = await axios.get("https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos")
    setProduto(Dados.data)
  } // Função assincrona para consumo da API

  useEffect(() => {
    ColetarItem()
  }, []) // Hook para chamar a função que retorna a API quando a página for renderizada.

  const BuscarProduto = (event) => {
    setBuscar(event.target.value)
  } //Função com parâmetro event para "ler" o conteúdo do input de texto.
  const AcionarBusca = () => {
    setFiltro(buscar)
  } //Função de para filtrar a busca baseado na digitação do input.
  const FiltrarProdutos = produto.filter(item => item.name.toLowerCase().includes(filtro.toLowerCase()))
  //Função para filtrar o conteúdo do array. item é declarado como parâmetro para cada item do array. toLowerCase assegura a busca independente de letra maiuscula ou minuscula
  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item])
  } // Função que adiciona o produto ao carrinho.

  const totalCarrinho = carrinho.reduce((total, item) => total + Number(item.price), 0) //Soma os valores dos produtos agregados ao carrinho.

  const ModalCarrinho = () => {
    setMostrarCarrinho(!mostrarCarrinho)
  } //Garante o 'abrir e fechar' da tela do carrinho.

  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho]
    novoCarrinho.splice(index, 1)
    setCarrinho(novoCarrinho)
  } //Função para remover produto do carrinho.

  const Reset = () => {
    ColetarItem()
    setBuscar('')
    setFiltro('')
  } //Função de reset para retornar para todos os produtos da API. Essa função foi atrelada ao botão home.
  return (
    <>
      <Inicio>
        <h1>Marketplace</h1>
        <SessaoBuscador>
          <Buscador type="text" placeholder='shoes, shirt, salad, pizza,ball, chips, bike...' onChange={BuscarProduto} />
          <img src={Lupa} className='lupa' type="button" value="Search" onClick={AcionarBusca} />
        </SessaoBuscador>
        <Navegacao>
          <img src={Home} alt='Botão Home' onClick={Reset} />
          <img src={User} alt='Botão de Login' />
          <img src={About} alt=' Botão Sobre nós' />
          <FiguraCarrinho onClick={ModalCarrinho}>
            <img src={Carrinho} alt="Carrinho de compras" />
            <figcaption>{carrinho.length}</figcaption>
          </FiguraCarrinho>
        </Navegacao>
        {mostrarCarrinho && ( //Operador ternário para garantir que o modal possa ser aberto e fechado.
          <SessaoCompras>
            <h2>My Purchases </h2>
            {carrinho.map((item, index) => ( // aqui eu utilizei o map para listar os produtos que serão inseridos no carrinho.
              <SessaoItens key={index}>
                <MeusItens>{item.name}  </MeusItens>
                <p>${item.price}</p>
                <img src={Excluir} onClick={() => removerDoCarrinho(index)} />

              </SessaoItens>
            ))}
            <div>Total: ${totalCarrinho}
              <button>Buy Now</button>

            </div>

          </SessaoCompras>
        )}
      </Inicio>
      <Corpo>
        <section>
          {FiltrarProdutos.length > 0 ? ( //Operador ternário para garantir que sejam listados apenas os itens existentes na API. caso contrário, uma mensagem de produto não encontrado sera renderizada.
            FiltrarProdutos.map((item) => ( //Novamente o map para listar os produtos da API na página principal.
              <figure key={item.id}>
                <img src={`${item.avatar}?${item.id}`} alt={item.desciption} />
                <figcaption>{item.name}</figcaption>
                <p>{item.desciption}</p>
                <p>${item.price}</p>

                <button onClick={() => adicionarAoCarrinho(item)}>Purchase</button>
              </figure>
            ))
          ) : (<div className='SemProduto'>
            <img src={Vento} alt="imagem do vento" />
            <figcaption>Product not found...</figcaption>
          </div>)}
        </section>

      </Corpo>

      <Footer />
    </>
  )
}

export default App
