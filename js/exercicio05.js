/*  5 - DESAFIO - faça um programa que terá que receber nome de produto, preço unitário e quantidade. 
    O programa só terminará, quando a pessoa escrever o valor "fim". 
    Ao finalizar o programa deverá apresentar uma lista de produtos, quantidades, valores unitários, 
    sub-total e no final usar o total.  */

x = 0;
y = 1;

const nomeProduto = [];
const precoDoProduto = [];
const quantidadeDoProduto = [];

while (x < y) {

    nomeProduto[y] = prompt("Digite o nome do próximo produto " + y + ":");

    precoDoProduto[y] = prompt("Digite o preço do próximo produto " + y + ":");

    quantidadeDoProduto[y] = prompt("Digite quantidade do próximo produto " + y + ":");

    var palavraChave = prompt("Caso queira encerrar o programa, digite 'fim':");

    if (palavraChave == "fim") {

        break;

    }

    y++;

}

for (let i = 1; i < y; i++) {
    console.log("Produto " + (i) + ":");
    console.log("Nome: " + nomeProduto[i]);
    console.log("Preço: " + precoDoProduto[i]);
    console.log("Quantidade: " + quantidadeDoProduto[i]);
}