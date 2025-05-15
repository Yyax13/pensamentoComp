# PensamentoComp

Este projeto é uma aplicação simples que recomenda filmes com base na idade do usuário. Ele consiste em um back-end construído com Node.js e Express e um front-end básico em HTML e JavaScript para consumir a API.

## Estrutura do Projeto

- **server.js**: Configuração do servidor Express.
- **controllers/filmes.js**: Contém a lógica para mapear idades a filmes.
- **routes/filmes.js**: Define as rotas da API.
- **public/index.html**: Front-end para consumir a API.
- **.env**: Configurações de ambiente.

## Pré-requisitos

- Node.js instalado (versão 16 ou superior).
- Gerenciador de pacotes npm (instalado com o Node.js).

## Configuração do Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Yyax13/pensamentoComp
   cd pensamentoComp
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:
   - Renomeie o arquivo `.env.example` para `.env` (se aplicável).
   - Preencha as variáveis de ambiente, como `PORT`, `PGSQL_HOST`, etc.

4. Inicie o servidor:
   - Em modo de desenvolvimento:
     ```bash
     npm run dev
     ```
   - Em modo de produção:
     ```bash
     npm start
     ```

## Uso

1. Acesse o front-end no navegador:
   - URL padrão: [http://localhost:3001](http://localhost:3001)

2. Insira uma idade no campo de entrada e clique em "Buscar Filme" para receber uma recomendação de filme.

## Rotas da API

- **GET /api/**: Retorna um filme recomendado com base na idade fornecida como query parameter `age`.
  - Exemplo de uso:
    ```bash
    curl http://localhost:3001/api/?age=10
    ```

## Dependências Principais

- express
- dotenv
- cors
- ejs
- nodemon (para desenvolvimento)

## Estrutura de Pastas

```
/workspaces/pensamentoComp
├── server.js
├── controllers/
│   └── filmes.js
├── routes/
│   └── filmes.js
├── public/
│   └── index.html
├── .env
├── package.json
└── README.md
```

## Contribuição

Sinta-se à vontade para abrir issues e pull requests para melhorias ou correções.

## Licença

Este projeto está sob a licença ISC.
