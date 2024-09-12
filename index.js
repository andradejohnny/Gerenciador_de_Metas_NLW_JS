const { select, input } = require('@inquirer/prompts');

let meta = {
  value: 'Tomar 3l de água por dia',
  checked: false,
};
let metas = [meta];

const cadastrarMeta = async () => {
  const meta = await input({ meessage: 'Digite a meta: ' });

  if (meta.length == 0) {
    console.log('A meta não pode ser vazia!');
    return;
  }

  metas.push({ value: meta, checked: false });
};

const start = async () => {
  let count = 0;

  while (true) {
    const opcao = await select({
      message: 'Menu >',
      choices: [
        {
          name: 'Cadastrar meta',
          value: 'cadastrar',
        },
        {
          name: 'Listar metas',
          value: 'listar',
        },
        {
          name: 'Sair',
          value: 'sair',
        },
      ],
    }); //faz o while aguardar o usuario digitar algo ao inves de ficar rodando o loop

    switch (opcao) {
      case 'cadastrar':
        await cadastrarMeta();
        console.log(metas);
        console.log('Vamos cadastrar');
        break;
      case 'listar':
        console.log('Vamos listar');
        break;
      case 'sair':
        return;
    }
  }
};

start();
