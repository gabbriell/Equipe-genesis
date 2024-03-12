

var anoNascimento = prompt("Digite o ano do seu nascimento.");

var mesNascimento = prompt("Digite o mes do seu nascimento.");

var diaNascimento = prompt("Digite o dia do seu nascimento.");

dataAtual = new Date();

var idade = dataAtual.getFullYear() - anoNascimento;

var mesAtual = dataAtual.getMonth() + 1;

var diaAtual = dataAtual.getDate();

if (diaAtual >= diaNascimento && mesAtual >= mesNascimento) {

    alert("Você tem: " + idade);

} 

else {

    var idadeCerta = idade - 1;

    alert("Você tem: " + idadeCerta);
}


