
# Radiante Tracker

Essa aplicação tem como objetivo servir de tracker para jogadores de Valorant, apresentando informações do jogo, bem como apresentar o progresso dos jogadores e do cenário competitivo. Foi desenvolvida para um trabalho na matéria de LP3 (Linguagem de Programação 3), com um modelo de multicamadas. 

Foram utilizados as seguintes tecnologias:
- Electron TS
- React TS
- TailwindCSS
- Firebase

## Instalação

Para rodar o projeto é necessário que você vá no diretório do projeto e inicialmente rode o seguinte comando:

```bash
  cd valoranttracker
  yarn 
```
Com as depenências baixadas rode:

```bash
  yarn dev
```
    
## Documentação da API

A API utilizada por enquanto foi a [ValorantAPI](https://valorant-api.com/). A API oficial da Riot Games ainda não foi disponibilizada.

#### GET AGENTS

```http
  GET https://valorant-api.com/v1/agents
```

Por enquanto apenas a função de resgate de agentes está sendo utilizada. Contudo planejamos adicionar mapas, armas e a área de estatísticas de players e times.


## Autores

- [@Adrian Widmer](https://github.com/Awi-24)
- [@Icaro Canela]()
- [@Rafael Matos]()


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

