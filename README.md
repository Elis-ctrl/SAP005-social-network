# Runners

Seja bem vindo (a) Runners

A Runners é uma rede social que te conecta com outros corredores pelo mundo.
Compartilhe suas corridas e metas alcançadas.

**[Acesse a Runners](https://rede-social-2c561.web.app/ "Acesse o site")** 
![](/src/img/favicons/favicon-16x16.png)

## :page_facing_up: Índice

* [1. Objetivos](#1-objetivos)
* [2. Usuários](#2-usuários)
    * [2.2 Pesquisas](#22-pesquisas)
    * [2.3 Histórias de Usuários](#23-histórias)
* [3. Planejamento](#3-planejamento)
* [4. Desenvolvimento](#4-desenvolvimento)
* [5. Funcionalidades](#5-funcionalidades)
* [5.2 Linguagens](#52-linguagens)
* [5.3 Ferramentas](#53-ferramentas)
* [6. Testes](#6-testes)
* [7. Requisitos](#7-requisitos)
     * [7.2 Softwares](#72-softwares)
     * [7.3 Execução](#73-execução)
* [8. Desenvolvedoras](#8-desenvolvedoras)

---

## 1. Objetivos
Ao iniciarmos o projeto nos preocupamos em entregar o seguinte:

* Conhecer o usuário e entender suas necessidades;
* Foco na experiência do usuário;
* Planejamento do projeto pelo GitHub Projects;
* Responsividade aplicando o conceito de Mobile First.
## 2. Planejamento

Para atendermos as necessidades dos usuários de forma plena, começamos nosso planejamento com uma pesquisa para identificar as prioridades.


### 2.2 Pesquisas
Os resultados da pesquisa foram cruciais para desenvolvermos a melhor aplicação, focada em responsabilidade, acessibilidade, interatividade, disposição de dados, etc.
A pesquisa foi determinante para nos dar um norte sobre o perfil da maioria de nossos usuários:

**Média de idade**

![](/src/img/readme-img/pesquisa-idade.png)

Esse dado nos mostrou que a mais da metade de nossos usuários tem 45 anos ou mais, enquanto  ⅓ tem de 21 a 40 anos. Os demais grupos se fragmentaram em partes bem menores, o que faz com que eles não gerem demanda suficiente para viabilizar o desenvolvimento de um site adequado ao perfil informado.

**Plataforma em que mais joga**

![](/src/img/readme-img/pesquisa-plataforma.png)

Esse resultado mostra que mesmo o usuário podendo selecionar várias respostas, a plataforma mais utilizada é de Celular ou Tablet.
Isso nos mostrou que um site responsivo deveria ser uma de nossas prioridades neste projeto.

**Relacionamento com Pokémon Go**

![](/src/img/readme-img/pesquisa-relacionamento.png)

Podemos observar que a maioria de nossos usuários é fã de Pokémon desde o desenho e costuma jogar Pokémon Go com frequência. 
Os jogadores casuais e que têm algumas dúvidas sobre o funcionamento do jogo, representam quase 30% da nossa base. 
Também identificamos uma quantidade razoável (18.5%) de usuários em potencial, que demonstram interesse no jogo.

### 2.3 Histórias
Escolhemos 3 (três) histórias diferentes para atingir o máximo de usuários possível:

:writing_hand:	**História de Usuário #1**

_Flávia Machado_

![](/src/img/readme-img/persona1-flavia.png "Persona 1 Flávia")

Flávia é uma fã de carteirinha de Pokémon. Seu maior objetivo é descobrir as chances de _spawn_ de Pokémons Raros. Ela precisa de um site que mostre a raridade de cada Pokémon.

:writing_hand:	**História de Usuário #2**

_Eduardo Silva_

![](/src/img/readme-img/persona2-eduardo.png "Persona 2 Eduardo")

Eduardo tem bastante interesse no jogo mas não sabe nada sobre ele. Sua maior necessidade é obter informações rápidas sobre os Pokémons. Ele precisa de um site que mostre dados como tipo, força e spawn, de forma intuitva como em um card.

:writing_hand:	**História de Usuário #3**

_Marcelo Santos_

![](/src/img/readme-img/persona3-marcelo.png "Persona 3 Marcelo")

Marcelo é fã do desenho, mas nunca jogou Pokémon Go. Ele tem muita dificuldade em escolher o melhor tipo de Pokémon antes das batalhas.
Precisa de um site responsivo, para escolher o melhor momentos antes de entrar na guerra.
Acreditamos que isso pode ser resolvido com um site responsivo e que possibilite uma comparação rápida entre os tipos de Pokémons.
## 3. Objetivos de aprendizagem

O objetivo principal de aprendizagem deste projeto é construir uma [Single-page
Application
(SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica)
[_responsiva_](https://github.com/Laboratoria/curricula-js/tree/master/topics/css/02-responsive)
(com mais de uma tela/ página) na qual seja possível **ler e escrever dados.**

### HTML e CSS

- [ ] [HTML
      semântico](https://developer.mozilla.org/pt-BR/docs/Glossario/Semantica)
- [ ] [CSS `flexbox`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [ ] Construir sua aplicação respeitando o protótipo.

### DOM e Web APIs

- [ ] [Manipulação do
      DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
- [ ] [History
      API](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API)

### Javascript

- [ ] [Uso de
      callbacks](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function)
- [ ] [Consumo de
      Promises](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
- [ ] Uso de ES modules
      ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
      |
      [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))

### Firebase

- [ ] [Firestore](https://firebase.google.com/docs/firestore)
- [ ] [Firebase Auth](https://firebase.google.com/docs/auth/web/start)
- [ ] [Firebase security rules](https://firebase.google.com/docs/rules)

### Testing

- [ ] [Teste unitários](https://jestjs.io/docs/pt-BR/getting-started)
- [ ] [Testes assíncronos](https://jestjs.io/docs/pt-BR/asynchronous)
- [ ] [Mocking](https://jestjs.io/docs/pt-BR/manual-mocks)

### Git e Github

- [ ] [Colaboração pelo Github](https://docs.github.com/pt/free-pro-team@latest/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)
- [ ] Organização pelo [Github Projects](https://docs.github.com/pt/free-pro-team@latest/github/managing-your-work-on-github/about-project-boards)

### Boas práticas de programação

- [ ] Modularização
- [ ] Nomenclatura / Semântica
- [ ] Linting

---

## 4. Considerações gerais

- Este projeto deve ser desenvolvido em trios.

- A lógica do projeto deve estar implementada completamente em JavaScript
  (ES6+), HTML e CSS :smiley:. Para este projeto **não está permitido** o uso de
  _frameworks_ ou bibliotecas de CSS e JS.

- A divisão e organização do trabalho deve permitir, sem exceção, que **cada
  integrante** da equipe pratique a aprendizagem de tudo que está envolvido em
  **cada história**. _Não dividam o trabalho como em uma fábrica._

- Está avançando em seus projetos com alguma fluidez e sem grandes problemas?
  Seja generosa com suas parceiras, deixe-as aprender e praticar sem restrições,
  mesmo que demore um pouco mais. Aproveite para _mentorá-las_, para fazer _pair
  programming_. Uma das melhores formas de aprender é explicar verbalmente.

- Está sentindo dificuldade e para você é mais difícil de avançar? Não fique com
  as partes "fáceis" do projeto. Converse, negocie, busque sua oportunidade de
  praticar e aprender o que é mais difícil para você.

- Vocês apenas poderão trabalhar em uma história por vez. Não avancem para a
  próxima sem completar a anterior. As histórias apenas são concluídas quando se
  completam **todos** os critérios de aceitação + **toda** sua definição de
  pronto.

## 5. Critérios de aceitação mínimos do projeto

### 5.1 Boilerplate

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida, assim
como toda a configuração de dependências:

```text
.
├── src
|  ├── pages (páginas)
|  |  └── home
|  |  |  ├── index.js
|  |  |  └── index.spec.js
|  |  └── login
|  |     ├── index.js
|  |     └── index.spec.js
|  ├── services (serviços externos)
|  |  ├── index.js
|  |  └── index.spec.js
|  ├── utils
|  |  └── history.js
|  ├── index.html
|  ├── router.js
|  └── style.css
├── README.md
└── package.json

```

### 5.2 Definição do produto

No `README.md`, conte-nos brevemente como você mapeou as necessidades dos seus
usuários e como você chegou à definição final do seu produto. É importante que
detalhe:

- Quem são os principais usuários do produto.
- Qual problema o produto resolve/para que ele serve para esses usuários.

### 5.3 Histórias de usuário

Depois de entender as necessidades de seus usuários, escreva as Histórias de
Usuário. Elas representam tudo o que ele precisa fazer/ver na Rede Social. Cada
uma de suas histórias de usuário deve possuir:

- **Critérios de aceitação:** tudo o que deve acontecer para satisfazer as
  necessidades do usuário.

- **Definição de pronto:** todos os aspectos técnicos que devem ser atendidos
  para que, como equipe, saibam que essa história está finalizada e pronta para
  ser publicada. **Todas** suas histórias de usuário (com exceções), devem
  incluir esses aspectos em sua definição de pronto (além de tudo o que precisa
  adicionar):

  - Ser uma SPA.
  - Ser _responsivo_.
  - Receber _code review_ de pelo menos uma parceira de sua equipe.
  - Fazer _tests_ unitários.
  - Fazer testes manuais buscando erros e imperfeições simples.
  - Fazer testes de usabilidade e incorporar o _feedback_ dos usuários como
    melhorias.

### 5.4 Desenho da Interface de Usuário (protótipo de baixa fidelidade)

Você deve definir qual será o fluxo que o usuário seguirá dentro do seu
aplicativo e, com isso, criar a interface do usuário (UI) que siga este fluxo.

### 5.5 Responsivo

Deve funcionar bem em dispositivos de tela grande (computadores, laptops etc.) e
pequena (_tablets_, telefones celulares etc.). Sugerimos seguir a técnica
_`mobile first`_ (mais detalhes sobre essa técnica ao final).

### 5.6 Considerações sobre o comportamento da Interface do Usuário (UI)

Essas considerações ajudarão você a escrever as definições de pronto de sua
H.U.:

#### Criação e login de conta de usuário

- _Login_ com Firebase:
  - Para o _login_ e postagens na timeline, você pode usar
    [Firebase Authentication](https://firebase.google.com/docs/auth) e [Cloud Firestore](https://firebase.google.com/docs/firestore)
  - O usuário deve poder criar uma conta de acesso ou autenticar-se com conta de
    e-mail e senha e também com uma conta do Google.
- Validações:
  - Somente usuários com contas válidas têm acesso permitido.
  - Não haver usuários repetidos.
  - A conta do usuário deve ser um email válido.
  - O que o usuário digita no campo de senha (_input_) deve ser secreto.
- Comportamento:
  - Quando o formulário de registro ou login é enviado, ele deve ser validado.
  - Se houver erros, mensagens descritivas devem ser exibidas para ajudar o
    usuário.

#### Timeline/linha do tempo

- Validações:
  - Ao publicar, deve ser validado se há conteúdo no _input_.
- Comportamento:
  - Ao recarregar o aplicativo, é necessário verificar se o usuário está
    _logado_ antes de exibir o conteúdo,
  - Conseguir publicar um _post_.
  - Poder dar e remover _likes_ em uma publicação. Máximo de um por usuário.
  - Visualizar contagem de _likes_.
  - Poder excluir uma postagem específica.
  - Solicitar confirmação antes de excluir um _post_.
  - Ao clicar em editar um _post_, você deve alterar o texto para um _input_ que
    permite editar o texto e salvar as alterações.
  - Ao salvar as alterações, você deve voltar ao texto normal, mas com a
    informação editada.
  - Ao recarregar a página, poder ver os textos editados.

### 5.7 Considerações técnicas sobre front-end

- Separar a manipulação do DOM da lógica (separação de responsabilidades).
- Ter várias telas. Para isso, seu aplicativo deve ser um [Single Page
  Application
  (SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica)
- Alterar e persistir dados. Os dados que você adiciona ou modifica devem
  persistir por todo o aplicativo. Recomendamos que você use o
  [Firebase](https://firebase.google.com/) para isso também.

#### Testes unitários

- Lembre-se de que não há _setup_ de **testes** definido, isso dependerá da
  estrutura do seu projeto. Você não deve esquecer de pensar sobre os testes.
  Eles podem ajudar a definir a estrutura e sua lógica.

- Os testes de unidade devem cobrir no mínimo 70% de _statements_, _functions_,
  _lines_ e _branches_.

### 5.8 Considerações técnicas UX

- Faça pelo menos 2 entrevistas com os usuários.
- Faça um protótipo de baixa fidelidade.
- Verifique se a implementação do código segue as diretrizes do protótipo.
- Faça sessões de teste de usabilidade com o produto em HTML.

## 6. Hacker Edition

As seções chamadas _Hacker Edition_ são **opcionais**. Se **você terminou** e
cumpriu todos os requisitos acima e sobrou tempo, tente concluí-las. Dessa
forma, você pode aprofundar e/ou exercitar mais os objetivos de aprendizagem do
projeto.

- Criar posts com imagens.
- Procurar usuários, adicionar e excluir "amigos".
- Definir a privacidade de _posts_ (público ou apenas para amigos).
- Permitir ver na linha do tempo de usuários "não amigos" apenas os posts
  públicos.
- Permitir comentar ou responder a uma postagem.
- Editar perfil.

## 7. Entrega

O projeto será entregue subindo seu código no GitHub (`commit` /`push`) e a
interface será hospedada usando o [Firebase Hosting](https://firebase.google.com/docs/hosting).

---

## 8. Guias, dicas e leituras complementares

### Primeiros passos

Para começar, você precisará criar um _fork_ e _clone_ deste repositório.

### Instalação de Firebase

Este projeto está configurado para rodar por meio do servidor do Firebase. Para isso, será necessário possuir o [Firebase CLI](https://firebase.google.com/docs/cli#install_the_firebase_cli) instalado globalmente em sua máquina. Utilize o comando `npm install -g firebase-tools`

Inicie um novo projeto web no [console do Firebase](https://console.firebase.google.com/) (pode desabilitar o analytics).

Caso apareça a opção de habilitar o Hosting na tela seguinte, selecionar.

Clique no menu lateral `Cloud Firestore` para criar uma nova database como `production mode` e escolher a região `us-east1`.

**IMPORTANTE** rodar todos os comandos do Firebase no terminal a partir da pasta raiz do projeto.

Executar o comando `firebase login` e realizar o [login](https://firebase.google.com/docs/cli#sign-in-test-cli) por meio de uma conta Google - deve abrir uma janela automaticamente, se não abrir pode clicar no link que vai aparecer no console.

Executar o comando `firebase init` para iniciar o setup do projeto.

Selecionar Hosting (aperte espaço para selecionar essa opção e depois enter).

Selecionar `Use an existing project` (o terminal vai mostrar o nome do projeto que você acabou de criar no site do Firebase).

Escrever `src` para definir como `public directory` (o padrão vai estar como `public`).

Escrever `y` para selecionar como SPA.

Escrever `N` para não fazer builds e deploys automáticos com GitHub.

O Firebase vai dizer que `src/index.html` já existe e pergunta se quer sobrescrever. Nesse momento não tem problema fazer isso, ele vai sobrescrever o que veio no boilerplate da Lab com uma página padrão do Firebase. Sugerimos dar `N`, para não sobrescrever o `index.html`.

Se der tudo certo, o Firebase vai criar o arquivo `.firebaserc` de configuração na pasta do projeto e estamos prontas pra continuar.

Instale as dependências do projeto rodando o comando `npm install`.

Para iniciar sua aplicação web, use o comando `npm start` que usamos nos projetos anteriores. Com esse comando, você deve ver em `http://localhost:5000` uma página padrão do Firebase, que está sendo renderizada de `src/index.html`.

### Mobile first

O conceito de [_mobile
first_](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/) faz
referência a um processo de desenho e desenvolvimento que parte de como se vê e
como funciona uma aplicação primeiro em um dispositivo móvel e mais adiante se
analisa como adaptar a aplicação à telas progressivamente maiores. Esta é uma
contraposição ao modelo tradicional, no qual primeiro se desenha os websites (ou
webapps) para desktops e depois os adaptam para telas menores.

A motivação aqui é se assegurar que desde o começo sejam desenhadas telas
_responsivas_. Dessa forma, começamos com a aparência e o comportamento do
aplicativo em uma tela e ambiente móvel.

### Múltiplas telas

Em projetos anteriores, nossas aplicações eram compostas de apenas uma tela
_principal_ (uma só _página_). Neste projeto, precisaremos dividir nossa
interface em várias _pages_ e oferecer uma maneira de navegar entre
essas telas. Esse problema pode ser resolvido de várias maneiras: com arquivos
HTML independentes (cada um com seu próprio URL) e links tradicionais; mantendo
na memória e renderizando condicionalmente (sem atualizar a página);
[manipulando o histórico do
navegador](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API#Navegando_atrav%C3%A9s_do_hist%C3%B3rico)
com
[`window.history`](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API).
Neste projeto, convidamos você a explorar opções e decidir sobre uma opção de
implementação.

### Gravação de dados

Nos projetos anteriores, consumimos dados, mas ainda não tínhamos escrito dados
(salvar alterações, criar dados, excluir, etc). Neste projeto, você precisará
criar (salvar) novos dados, além de ler, atualizar e modificar os dados
existentes. Esses dados podem ser salvos remotamente usando o
[Firebase](https://firebase.google.com/).

Outras:

- [Mobile
  First](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/)
- [Mobile First Is NOT Mobile Only - Nielsen Norman
  Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
- [Flexbox - CSS
  Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Módulos:
  Export](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
- [Módulos:
  Import](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
