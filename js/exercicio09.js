/**
 * crie uma função para realizar cálculos fatorias de um número. 
 * Será usado o conceito de Função Recursiva. 
 * Dessa forma o programa irá pedir um número e retornar o fatorial desse informado.
 */
function calcularFatorial(numero) {
    let fatorial = 1;

    
    if (numero < 0) {
        return "O número não deve ser negativo.";
    }
    
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}


const numero = parseInt(prompt("Digite um número para calcular o fatorial:"));


if (!isNaN(numero)) {
    
    const fatorial = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
} else {
    console.log("Por favor, digite um número inteiro.");
}