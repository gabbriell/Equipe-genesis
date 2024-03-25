/**
 * Faça um programa que peça números e armazene no programa, enquanto for digitado número. Ou seja, 
 * o programa para e mostra os resultados, quando a pessoa digitar algo diferente de número. 
 * O resultado deve ser mostrado os números em órdem crescente.
 */

const numeros = [];

while (true) {
    const input = prompt("Digite um número (ou qualquer outra coisa para parar):");

    if (isNaN(input)) {
        break;
    }

    numeros.push(Number(input));
}

if (numeros.length === 0) {
    console.log("Nenhum número foi digitado.");
} else {
    numeros.sort((a, b) => a - b); 

    console.log("Números em ordem crescente:");
    console.log(numeros.join(", "));
}
