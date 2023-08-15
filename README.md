<p align="center"> <img src="https://imgur.com/GUdgxDe.png" alt="React com JavaScript: lidando com arquivos estáticos"> </p>
<p>Projeto desenvolvido durante o curso "React: desenvolvendo em React Router com JavaScript" da Alura.</p>

<hr>

## Índice

- [Descrição](Descrição)
- [Funcionalidades e Recursos](#hammer-funcionalidades-e-recursos)
   - [Páginas Principais](#páginas-principais)
   - [Navegação e Roteamento](#navegação-e-roteamento)
   - [Componentes e Hooks](#componentes-e-hooks)
   - [Responsividade](#responsividade)
- [Ferramentas utilizadas](#computer-ferramentas-utilizadas)
- [Acesso ao projeto](#open_file_folder-acesso-ao-projeto)
- [Instruções](#clipboard-instruções)
- [Demonstração Visual](#demonstração-visual)

<h1 align="center" id="Descrição">React Blog</h1>
<p align="center">O React Blog é uma aplicação construída em React utilizando o React Router para gerenciar as rotas da aplicação. Tem como objetivo criar um blog onde o usuário pode navegar por diferentes páginas, ler artigos sobre diversos tópicos e conhecer mais sobre o autor.</p>

## :hammer: Funcionalidades e Recursos

### Páginas Principais

- `Início`: A página inicial apresenta um cabeçalho com o nome da aplicação e uma breve descrição sobre o autor. Abaixo do cabeçalho, são exibidos vários cards de posts. Cada card representa um tópico, como "Python: Origem do nome", "O que é Node?", etc. Os usuários podem clicar nos cards para ler os artigos completos.

- `Sobre Mim`: A página "Sobre Mim" contém informações sobre a pessoa responsável pelo blog, incluindo uma foto e detalhes relevantes.

### Navegação e Roteamento

- `Rotas`: Utiliza o React Router para criar um sistema de navegação com várias páginas. Ele inclui rotas para a página inicial, página "Sobre Mim" e páginas de artigos individuais.

- `Rotas Aninhadas`: As páginas "Início" e "Sobre Mim" são roteadas como filhas da página "Página Padrão", permitindo a reutilização da estrutura da página. A página de erro 404 é tratada de forma separada, sem mostrar o banner.

- `Rotas Dinâmicas`: Utiliza rotas dinâmicas para exibir artigos individuais. Cada card na página inicial redireciona para uma rota única, onde o conteúdo do artigo é renderizado com base no ID do artigo.

- `Tratamento de Rota não Encontrada`: Uma rota com o caminho '*' é configurada para renderizar uma página de erro 404 quando a URL não corresponde a nenhuma outra rota.

### Componentes e Hooks

- `BrowserRouter, Routes e Route`: Usa os componentes fornecidos pelo pacote `react-router-dom` para criar e renderizar rotas. O `BrowserRouter` envolve todo o aplicativo, o `Routes` gerencia as diferentes rotas e o `Route` renderiza componentes em caminhos específicos.

- `Link e NavLink`: Usa o componente `Link` para criar links de navegação internos, mantendo o comportamento de uma Single Page Application (SPA). O componente `NavLink` é usado para realçar links ativos.

- `useLocation`: O hook `useLocation` é usado para obter informações sobre a rota atual, permitindo que o aplicativo reaja às mudanças na URL.

- `useParams`: O hook `useParams` é utilizado para acessar os parâmetros passados em rotas dinâmicas, como o ID de um artigo específico.

- `useNavigate`: O hook `useNavigate` é empregado para realizar navegações mais complexas, como voltar para a página anterior no navegador.

### Responsividade

- `Media queries`: Implementa `Media Queries` com o intuito de aplicar responsividade à aplicação, adaptando-se a diferentes tamanhos de tela. Ele mantém uma experiência de usuário agradável em dispositivos móveis, tablets e desktops.

## :computer: Ferramentas utilizadas

<img height="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"> | <img height="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"> | <img width="50px" src="https://github.com/GabrielVeroneze/react-blog/assets/95183901/e4274260-9415-408e-9757-5f2277c42a29">
| -------------------------- | -------------------------- | ------------------------ |

## :open_file_folder: Acesso ao projeto
Você pode baixar o projeto diretamente:  
[Baixar código fonte](https://github.com/GabrielVeroneze/react-blog/archive/refs/heads/master.zip)

Também é possível clonar o repositório usando o seguinte comando:
```
git clone https://github.com/GabrielVeroneze/react-blog.git
```

## :clipboard: Instruções
Para usar este projeto em seu computador localmente, você precisará seguir estas etapas:

1. Certifique-se de que você tem o Node.js instalado em seu computador. Se não tiver, faça o download e a instalação a partir do [site oficial](https://nodejs.org/).

2. Abra o terminal e navegue até a pasta raiz do projeto usando o comando `cd` no terminal. Por exemplo:
   ```
   cd meu-projeto
   ```
3. Antes de iniciar a aplicação, instale as dependências necessárias executando o seguinte comando:
   ```
   npm install
   ```
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Isso irá instalar todas as dependências listadas no arquivo package.json.

4. Após a instalação das dependências, inicie o servidor de desenvolvimento executando o seguinte comando:
   ```
   npm start
   ```
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Isso abrirá automaticamente a aplicação no seu navegador. Se não abrir, acesse o endereço http://localhost:3000.
<br>

## Demonstração Visual
`Página inicial`
![React Blog](https://imgur.com/PIWRr4d.png)

`Filtrando imagens`
![React Blog](https://github.com/GabrielVeroneze/alura-space/assets/95183901/c46ed158-9a29-4836-8169-5b4e8429bfcc)

`Página inicial`
![React Blog](https://imgur.com/vNuOpzj.png)
