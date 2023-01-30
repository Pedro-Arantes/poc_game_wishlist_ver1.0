# poc_game_wishlist

> Um projeto para criar  uma wishlist de jogos e dar uma nota para os mesmos.

## Idealização do projeto

O projeto foi pensado para treinar TypeScript  e Prisma como uma POC.

- usando os types das libs;
- usando os types criados pelo propio desenvolvedor;
-instalando e atualizando as querys para o prisma.

## DOC-API

1. Pegar todos os registros de jogos:
    
    Route get: ```"/games"``` 

    Desrição: nela você consegue pegar a lista de todos os jogos. 
    
    Recebe pelo body da Resposta:
    ```bash
    [
        {
            "id": 2,
            "name": "Elden Ring",
            "platform": "Pc",
            "genre": "RPG",
            "status": true,
            "grade": "10",
            "evaluator_id": null
        },
        {
            "id": 3,
            "name": "League of Legends",
            "platform": "Pc",
            "genre": "Moba",
            "status": true,
            "grade": "10",
            "evaluator_id": 1
        },
        {
            "id": 5,
            "name": "Mortal Kombat",
            "platform": "Console",
            "genre": "Luta",
            "status": true,
            "grade": "7.5",
            "evaluator_id": 1
        },
        {
            "id": 4,
            "name": "Hades",
            "platform": "Pc",
            "genre": "Roguelike",
            "status": true,
            "grade": "8",
            "evaluator_id": 1
        }
    ]
    ```

2. Pegar jogos  filtrados por plataforma: 

    Route get: ```"/games/:platform"``` 
    
    Desrição: Filtra os jogos pela plataforma escolhida sendo a pesquisa case insensitive.

    Pesquisa: ```/games/console```

    Recebe pelo body da Resposta:
    ```bash
    [
        {
            "id": 1,
            "name": "Mortal Kombat",
            "platform": "Console",
            "genre": "Luta",
            "status": "true",
            "grade": "8"
        }
    ]
    ```

3. Novo jogo:

    Route post: ```"/games"```
    
    Desrição: Criar um novo jogo.

    Enviar pelo body da Requisição: 
    ```bash
    {
        "name": "Mortal Kombat",
        "platform": "Console",
        "genre": "Luta"
    }
    ```
    Recebe pelo body da Resposta: **status 201**.

    Se já possuir um jogo com o mesmo nome: ***status 409***.


4. Dar nota para um jogo:

    Route put: ```"/games"```
    
    Desrição: Editar e dar uma nota e um status de ja avaliado a algum jogo.

    Enviar na Requisição: 

        body:
    ```bash
    {
        "grade": 8,
        "status": true
    }
    ```
        headers:
    ```
        {
            game_id: 4,
            authorization: Bearer 934c8b35-69ff-45c0-b8ae-7298c57def57
        }
        
    ```
    Resposta de Sucesso: **status 200**. 

    Resposta ao tentar atualizar sem um token válido:
    **status 401**

5. Deletar jogo:

    Route post: ```"/games/:id"```

    Enviar na Requisição: 
    ```bash
        headers:
            {
                authorization: Bearer 934c8b35-69ff-45c0-b8ae-7298c57def57
            }
    ```
    
    Desrição: Deletar um jogo criado.

    Resposta da Requisição de sucesso: **status 200**

    Resposta ao tentar deletar sem um token válido:
    **status 401**

6. Registrar Usuário:

    Route post: ```"/registration"```

    Enviar na Requisição: 
    ```bash
        body:
            {
                "name": "Joao",
                "email": "joao@gmail.com",
                "password": "joao",
                "cpf": "11111111111"
            }
    ```
    
    Desrição: Registrar um Novo usuário.

    Resposta da Requisição de sucesso: **status 201**

7. Visualizar Usuários:

    Route get: ```"/user"```
  
    Desrição: Pegar os usuários já registrados.

    Resposta da Requisição de sucesso: **status 200**

    ```bash
    [
        {
            "id": 1,
            "name": "Jojo",
            "email": "jojo@gmail.com",
            "password": "jojo",
            "cpf": "11111111111"
        },
        {
            "id": 2,
            "name": "Joao",
            "email": "joao@gmail.com",
            "password": "joao",
            "cpf": "11111111111"
        },
        {
            "id": 3,
            "name": "Pedrola",
            "email": "pedrola@gmail.com",
            "password": "pedrola",
            "cpf": "11111111111"
        }
    ]
    ```

8. Logar com um usuário:

    Route post: ```"/login"```

    Enviar na Requisição: 
    ```bash
        body:
            {
                "email": "jojo@gmail.com",
                "password": "jojo"
            }
    ```
    
    Desrição: Logar com um usuário.

    Resposta da Requisição de sucesso: **status 201**
    ```bash
        body:
        7b4393b7-f623-4ee1-a158-6c7c19ddc8d3
    ```    
    te enviará o token de sessão pela resposta.
    
    Resposta ao tentar fazer login sem senha ou email cadastrados:
    **status 401**

9. Visualizar Sessões:

    Route get: ```"/session"```
  
    Desrição: Pegar as sessões já iniciadas.

    Resposta da Requisição de sucesso: **status 200**

    ```bash
    [
        {
            "id": 1,
            "user_id": 1,
            "token": "934c8b35-69ff-45c0-b8ae-7298c57def57"
        },
        { 
            "id": 2,
            "user_id": 3,
            "token": "7b4393b7-f623-4ee1-a158-6c7c19ddc8d3"
        }
    ]
    ```