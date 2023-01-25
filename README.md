# poc_game_wishlist

> Um projeto para criar  uma wishlist de jogos e dar uma nota para os mesmos.

## Idealização do projeto

O projeto foi pensado para treinar TypeScript como uma POC.

- usando os types das libs;
- usando os types criados pelo propio desenvolvedor;

## DOC-API

1. Pegar todos os registros de jogos:
    
    Route get: ```"/games"``` 

    Desrição: nela você consegue pegar a lista de todos os gastos. 
    
    Saida:
    ```bash
    [
    {
    "id": 1,
    "name": "Mortal Kombat",
    "platform": "Console",
    "genre": "Luta",
    "status": "true",
    "grade": 8
     }
    ]
    ```

2. Pegar jogos  filtrados por plataforma: 

    Route get: ```"/games/:platform"``` 
    
    Desrição: Filtra os jogos pela plataforma escolhida sendo a pesquisa case insensitive.

    Pesquisa: ```/games/console```

    Saida:
    ```bash
    [
    {
    "id": 1,
    "name": "Mortal Kombat",
    "platform": "Console",
    "genre": "Luta",
    "status": "true",
    "grade": 8
    }
    ]
    ```

3. Novo jogo:

    Route post: ```"/games"```
    
    Desrição: Criar um novo jogo.

    Entrada: 
    ```bash
    {
        "name": "Mortal Kombat",
        "platform": "Console",
        "genre": "Luta"
    }
    ```
    Saida: **status 201**.

    Se já possuir um jogo com o mesmo nome: ***status 409***.


4. Dar nota para um jogo:

    Route put: ```"/games"```
    
    Desrição: Editar e dar uma nota e um status de ja avaliado a algum jogo.

    Entrada: 

        body:
    ```bash
    {
        "name": "joao",
        "price": 300
    }
    ```
        headers:
    ```
        {
            game_id: 1
        }
        
    ```
    Saida: status 200. 

5. Deletar jogo:

    Route post: ```"/games/:id"```
    
    Desrição: Deletar um jogo criado.

    Saída: **status 200**