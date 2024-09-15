# Gerenciador de Metas

Este é um **Gerenciador de Metas** desenvolvido em **JavaScript** utilizando **Node.js**. A aplicação permite cadastrar, listar, marcar como concluídas, deletar e visualizar metas armazenadas em um arquivo JSON. Ela foi criada como parte do curso **<NLW/> Pocket JavaScript**, oferecido pela **Rocketseat**.

## Funcionalidades

- **Cadastrar meta:** Permite ao usuário adicionar uma nova meta.
- **Listar metas:** Exibe todas as metas cadastradas e permite marcar/desmarcar como concluídas.
- **Metas realizadas:** Mostra as metas que já foram concluídas.
- **Metas abertas:** Exibe as metas que ainda não foram concluídas.
- **Deletar metas:** Permite ao usuário selecionar e remover metas cadastradas.

## Tecnologias Utilizadas

- **JavaScript**
- **Node.js**
- **Biblioteca @inquirer/prompts**: Utilizada para criar interações no terminal.
- **Módulo fs (File System)**: Usado para leitura e escrita de arquivos JSON.

## Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/gerenciador-de-metas.git
```

2. Instale as dependências:

```bash
npm install
```

3. Execute a aplicação:

```bash
node app.js
```

## Como usar

Após iniciar a aplicação, você verá um menu com as opções de gerenciamento de metas. Utilize as setas para navegar entre as opções e o Enter para selecionar.

- **Cadastrar meta:** Digite uma nova meta que deseja atingir.
- **Listar metas:** Veja suas metas cadastradas e use a barra de espaço para marcar/desmarcar como concluídas.
- **Metas realizadas e abertas:** Confira o status das suas metas.
- **Deletar metas:** Selecione as metas que deseja remover.

## Estrutura do JSON

As metas são armazenadas no arquivo `metas.json` no seguinte formato:

```json
[
  {
    "value": "Exemplo de meta",
    "checked": false
  }
]
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

---
