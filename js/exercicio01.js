
var idade = prompt("Por favor, informe sua idade:");


if (!isNaN(idade)) {
    
    idade = parseInt(idade);

   
    if (idade >= 18) {


        //OPTEI POR COLOCAR OS DOIS TIPOS DE ALERTAS PARA FICAR NO CONSOLE TAMBÉM.
        console.log("Com " + idade + " anos " + "você já pode tirar sua carteira de motorista!");
        alert("Com " + idade + " anos " + "você já pode tirar sua carteira de motorista!");
    } else {

        //OPTEI POR COLOCAR OS DOIS TIPOS DE ALERTAS PARA FICAR NO CONSOLE TAMBÉM.
        console.log("Com " + idade + " anos " + "você ainda não pode tirar sua carteira de motorista.");
        alert("Com " + idade + " anos " + "você ainda não pode tirar sua carteira de motorista.");
    }
} else {
    alert("Por favor, informe uma idade válida.");
}
