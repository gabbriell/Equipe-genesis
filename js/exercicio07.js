/**
 * 07 - Pegue o exercícios 5, e armazene as informações dos produtos, quantidade, 
 * valor unitário, em Arrays mesclando com Objects e assim faça a listagem de 
 * produtos em órdem alfabética do nome do produto. Utilizar função SORT do array.
 */

let x = 0;
let y = 1;

const produtos = [];

while (x < y) {
    const produto = {};

    produto.nome = prompt("Digite o nome do produto " + y + ":");
    produto.preco = prompt("Digite o preço do produto " + y + ":");
    produto.quantidade = prompt("Digite a quantidade do produto " + y + ":");

    const palavraChave = prompt("Caso queira encerrar o programa, digite 'fim':");

    produtos.push(produto);

    if (palavraChave.toLowerCase() === "fim") {
      alert("Obrigado por usar o sistema! Confira o resultado no console do navegador apertando a tecla F12 do seu teclado.");
      break;
  }
    y++;
}

produtos.sort((a, b) => a.nome.localeCompare(b.nome));

for (let i = 0; i < produtos.length; i++) {
    console.log("Produto " + (i + 1) + ":");
    console.log("Nome: " + produtos[i].nome);
    console.log("Preço: " + produtos[i].preco);
    console.log("Quantidade: " + produtos[i].quantidade);
}