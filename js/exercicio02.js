
var anoNascimento = prompt("Informe o ano de nascimento:");
var mesNascimento = prompt("Informe o mês de nascimento (1-12):");
var diaNascimento = prompt("Informe o dia de nascimento:");


var dataAtual = new Date();


var idade = dataAtual.getFullYear() - anoNascimento;
var mesAtual = dataAtual.getMonth() + 1; 
var diaAtual = dataAtual.getDate();


alert("Você tem " + idade + " anos.");
console.log("Você tem " + idade + " anos.");
