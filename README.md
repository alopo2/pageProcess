# pageProcess
Repositório criado para armazenar os dados da landing page de consulta processual, criada com ReactJs utilizando o Vite.

# 🧠 Contexto

O objetivo era criar um projeto de front-end, utilizando o vite que se torna uma ferramenta muito útil para a geração desse ambiente. Em seguida, foi necessário criar cada componente e fazer testes para verificar a funcionalidade. 

No projeto inicial, tinha em mente criar rotas com o react-router-dom, mas foi abandonado por falta de conhecimento nessa criação, e então resolvi criar algo mais simples, porém funcional. 

Criei duas "páginas", mas como sabemos no react estamos trabalhando com SPA (single page application), logo no final das contas, é apenas uma página, que retorna um outro componente quando acionado o botão de busca e quando o campo de pesquisa é preenchido com a cnj para consulta processual.

Criei uma função chamada "setBusca" para capturar o que estava sendo digitado dentro do input.
<div><br>
<img width="600px" src="https://user-images.githubusercontent.com/105977369/187975428-17df6972-90f6-43c7-b7e4-7faa44c1fffc.png"/>
</div><br>
Unifiquei os componentes da página inicial, em um componente que se chama "SearchPage", sendo a nossa página principal. 
Utilizei os hooks useState e useEffect para controlar os estados, importando de dentro do react essas funções.
<div> <br>
<img width="600px" src="https://user-images.githubusercontent.com/105977369/187974123-0d49e62d-8dc6-44df-b2d5-02a25d7d0f6d.png"/>
</div>
Para consumir a API criada com nodeJS e expressJS, utilizei as funções assíncronas do javascript (async e await) mais o fetch. Para testar o retorno da API, utilizei o console.log.

<div> <br>
<img width="600px" src="https://user-images.githubusercontent.com/105977369/187960513-8c1e65bd-7fc4-4b0b-9af3-391875ea325a.png" />
</div>
Adicionei um form para envolver o input e o botão, adicionei uma função "onSubmit={handleSearchProcess}" para que os resultados fossem retornados.
<div> <br>
<img width="600px" src="https://user-images.githubusercontent.com/105977369/187976329-e2b80318-f69c-4d6f-84c8-3f8a8bc12f05.png" />
</div>
Em "SearchPage" foi necessário criar um operador ternário para que as informações só fossem exibidas na página quando fossem buscadas, além de criar as props e o que retornaria em cada uma a partir das informações da minha API, e em caso de não haver nenhuma busca, o componente não sofre alterações.
<div> <br>
<img width="600px" src="https://user-images.githubusercontent.com/105977369/187974865-ed5233ba-312b-4aaf-aa35-46567d85726b.png" />
</div>

Na segunda página que se chama "ResultPage", criei uma main para abraçar o conteúdo que iria retornar, criei <span> para cada uma destas informações e utilizei a props para organizar como essas informações iriam chegar dentro dos spans.
<div><br>
<img width="600px" src="https://user-images.githubusercontent.com/105977369/187975889-731cf6b6-0cf9-4fc9-ac44-4d277701fdcb.png"/>
</div>

<br />

Resultado da nossa página inicial sem busca: 
<div><br>
<img width="600px" src="https://user-images.githubusercontent.com/105977369/187977707-ffe58de5-320f-4234-aae3-f019af16d2c3.jpeg"/>
</div>

Resultado da nossa página com os dados:
<div><br>
<img width="600px" src="https://user-images.githubusercontent.com/105977369/187977797-b196d91a-ec33-4662-b4a9-fc9a21bc0033.jpeg"/>
</div>

<br />

### `Tecnologias usadas`

| Ferramenta | Descrição |
| --- | --- |
| `ReactJS` | framework web|
| `Vite` | gerador de projeto de front-end|
| `npm` | gerenciador de pacotes|
| `Github` | Hospedagem do código fonte integrado com gerenciador de versionamento|
|

### `Como rodar o projeto localmente`

Siga os passos e inclua as informações abaixo:

| Passo                       | Comando/informação |
| --------------------------- | ------------------ |
| Faça o fork                 | `botão de forkar`  |
| Faça o clone                | `git clone`        |
| Instale as dependências após acessar a pasta projeto    | `npm i`            |
| Rode o projeto              | `npm run dev`       |
|

<br />
<br />

### 😎 Próximos passos mapeados

- Incluir Testes utilizando o vitest.
- Revisar acessibilidade
- Revisar responsividade
- Melhorar o layout

<br />
<br />
