# Capital Gains

## Decisões técnicas e arquiteturais:

Inicialmente optei por fazer o código em javascript (nodejs) devido primeiramente ao conhecimento da tecnologia e também pela simplicidade que seria criar um CLI e testes.
A organização arquitetural do projeto (design de código) ficou bem simples mas não menos intuitiva. Tudo começa no arquivo index.js que é responsável apenas por lidar com entrada e saída de dados.
Depois criei um código (wrapper) que seria o arquivo principal. Nele dividi as operações de compra e venda e chamei funções mais minimalistas.
Estas funções minimalistas deixei dentro da pasta `calculation`.
Para finalizar criei todos os casos de teste que continha no exercicio e fiz alguns pontuais em casa função menor.
Um Makefile foi criado para facilitar a execução da aplicação e dos testes. Basta digitar `make` para ver as opções disponívels.

## Como executar o projeto:

Rode o comando `make start`
Uma vez tendo acessado o nodejs, basta inserir os json em uma linha apenas.

## Como executar os testes:

Rode o comando `make tests`
