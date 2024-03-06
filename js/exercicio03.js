
var diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];


var dataAtual = new Date();

var numeroDiaSemana = dataAtual.getDay();

var diaSemanaPorExtenso = diasSemana[numeroDiaSemana];

alert("Hoje é " + diaSemanaPorExtenso);
console.log("Hoje é " + diaSemanaPorExtenso);
