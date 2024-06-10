<h1 align="center" id="top"> Exclusive  </h1>

<img src="https://github.com/brunowzz/hiring-front-end/blob/bruno-vinicius-barreiras-de-oliveira/.github/gifs/app.gif" width='100%' alt="Imagem 1"/>
 

> 🔎 Sistema de e-commerce, <a href="https://exclusive-ecommerce-hiring.netlify.app"> Link do projeto </a>

## :page_facing_up: Desafio Técnico: E-commerce

**Visão Geral**:
Este desafio tem como objetivo testar as minhas habilidades com React, Styled-Components, TypeScript, Context API e muito mais para a vaga de Desenvolvedor Front-end Jr 3 no Studio Vai na Web.

**Requisitos Funcionais**:
• Ao acessar a home, trazer a listagem de produtos vinda da API de referência.
• Ao digitar no campo de busca, deve-se trazer somente os resultados digitados.
• Ao clicar no botão "Adicionar ao carrinho", deve-se inserir o produto ao carrinho de compras.
• No carrinho de compras, pode-se remover os produtos.
• No carrinho de compras, deve-se informar o total da compra.
  
## 📁 Pages

- **Home:** página principal do projeto, que mostra um banner com algumas informações, depois ela lista produtos, mostra algumas tendências e as garantias da loja Exlusive.
- **About:** página que conta um pouco da minha história e também algumas de minhas redes sociais.
- **All:** lista todos os produtos da aplicação e os produtos vindos da pesquisa, ela conta com filtros de mais recentes/antigos, ordem alfabética a-z e z-a.
- **Products:**: mostra de fato o produto e seus detalhes, nela consegue se ver informações como a imagem do produto, nome, preço, descrição. Ainda consegue-se adicionar produto ao carrinho e visualizar 4 diferentes produtos.
- **Cart**: página de carrinho onde exibe todos os produtos que foram adicionados ao carrinho, permite excluir itens do carrinho, aumentar a quantidade de produtos por item selecionado e finalizar compra.
- **Not Found:** página de erro da aplicação.

## 🎯 Steps

**Configuração Inicial**:

- Inicializei o projeto utilizando React.js, TypeScript para uma base sólida e eficiente.
- Configurei o projeto com prettier, husky, eslint, axios, react router dom, criei as minhas pastas de componentes, pages e layout juntamente com seus respectivos arquivos para o setup inicial.

**Estrutura :**

- Criei uma estrutura organizada para facilitar a manutenção e escalabilidade do projeto.
  Dividi as pastas principais em **.github, components, contexts, hook, interfaces, layout, pages, routes, services, styles.**.

Este é um breve guia sobre a estrutura de pastas do projeto. Aqui está uma visão geral das pastas principais:

- **.github**: Esta pasta armazena recursos relacionados à documentação, como prints e informações adicionais sobre o funcionamento do projeto.

- **components**: Aqui estão localizados os componentes reutilizáveis do React, que são unidades independentes de interface do usuário. OBS: algumas páginas possui uma pasta components com o fim de repartir o código em pedaços e reaproveitá-los.

- **contexts**: Utilizamos a Context API do React para gerenciar o estado global da aplicação. Este diretório é o hub central para o compartilhamento de dados entre componentes.

- **hook**: Nesta pasta, encontram-se os custom hooks do React, que são utilizados para reutilizar lógicas de estado e efeitos entre componentes.

- **interfaces**: Este diretório contém as definições de tipos, promovendo consistência nas interfaces usadas em todo o projeto.

- **layout**: Aqui estão os componentes de layout compartilhados entre várias páginas ou componentes do aplicativo.

- **pages**: Esta pasta contém o núcleo da aplicação, onde são definidas as páginas principais.

- **routes**: Neste diretório são definidas e organizadas as rotas da aplicação.

- **services**: Este diretório agrupa partes relacionadas à integração com a API, como a criação de baseUrl.

- **styles**: Aqui ficam os arquivos de estilos, como CSS, SASS ou módulos de estilos do React.

**Implementação Inicial:**

- Na raiz do projeto, construi um aplicação funcional, para que depois eu pudesse refatorar.
- Minha ideia nesse projeto foi usar o mínimo de bibliotecas possíveis, tive como objetivo fazer a maioria das coisas na mão.
- Organizei as operações iniciais e a estrutura funcional.

**Refatoração e Organização:**

- Refatorei o código inicial, utilizando dos Custom Hooks e também adicionando componentes reutilizáveis.
- Refatorei o acesso a api utilizando Custom Hooks.

**Contexto:**

- Criei um contexto nas pasta contexts para gerenciar o carrinho da aplicação.

**Estilização Responsiva:**

- Utilizando o styled-components, criei breakpoints para me auxiliar na responsividade.

**Aprimoramentos Adicionais:**

- Adicionei recursos como um componente de loading para indicar carregamento de dados.
- Implementei página de erro.

## 📁 Screens Mobile

<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/brunowzz/hiring-front-end/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/8.png" alt="Imagem" width="200"/>
    <img src="https://github.com/brunowzz/hiring-front-end/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/9.png" alt="Imagem" width="200"/>
    <img src="https://github.com/brunowzz/hiring-front-end/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/10.png" alt="Imagem" width="200"/>
    <img src="https://github.com/brunowzz/hiring-front-end/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/11.png" alt="Imagem" width="200"/>
</div>

## 📁 Screens Desktop
<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/brunowzz/hiring-front-end/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/1.png" alt="Imagem" width="500"/>
    <img src="https://github.com/brunowzz/hiring-front-end/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/2.png" alt="Imagem" width="500"/>
    <img src="https://github.com/brunowzz/hiring-front-end/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/3.png" alt="Imagem" width="500"/>
    <img src="https://github.com/brunowzz/hiring-front-end/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/4.png" alt="Imagem" width="500"/>
    <img src="https://github.com/brunowzz/hiring-front-end/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/5.png" alt="Imagem" width="500"/>
    <img src="https://github.com/brunowzz/hiring-front-end/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/6.png" alt="Imagem" width="500"/>
    <img src="https://github.com/brunowzz/hiring-front-end/blob/bruno-vinicius-barreiras-de-oliveira/.github/screens/7.png" alt="Imagem" width="500"/>
</div>

## 🚀 Tecnologias

- [React](https://react.dev)
- [Axios](https://axios-http.com/docs/intro)
- [Typescript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com)
- [React Router](https://reactrouter.com/en/main)
- [Swiper](https://swiperjs.com)

## 🔗 Links
| Ambiente     |  URL                             |
| ---          |  ---                             |
| Local        |  http://localhost:5173/         |                 |
| Producão     |  https://exclusive-ecommerce-hiring.netlify.app

## :white_check_mark: Requerimentos

Antes de iniciar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e o [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Iniciar

```
#  Clone este projeto
$ git clone https://github.com/brunowzz/hiring-front-end/

# Acessar
$ cd hiring-front-end
$ git checkout bruno-vinicius-barreiras-de-oliveira

# Instalar dependências
$ npm i

# Execute o projeto
$ npm run dev
# O servidor será inicializado em <http://localhost:5173>
```


## 🤝 Colaborador

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/brunowzz">
        <img src="https://avatars.githubusercontent.com/u/94939630?v=4" width="160px;" alt="Foto do Kayke Fujinaka no GitHub"/><br>
        <sub>
          <b>Bruno Vinícius</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 Licença

Este projeto está sob licença. Consulte o arquivo [LICENSE](LICENSE.md) para obter mais detalhes.
