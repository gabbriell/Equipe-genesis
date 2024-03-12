var diaAtual = new Date();
var numeroDiaDaSemana = diaAtual.getDay();
var diaDaSemanaPorExtenso;

switch (numeroDiaDaSemana) {
    case 0:
        diaDaSemanaPorExtenso = "Domingo";
        break;
    case 1:
        diaDaSemanaPorExtenso = "Segunda-feira";
        break;
    case 2:
        diaDaSemanaPorExtenso = "Terça-feira";
        break;
    case 3:
        diaDaSemanaPorExtenso = "Quarta-feira";
        break;
    case 4:
        diaDaSemanaPorExtenso = "Quinta-feira";
        break;
    case 5:
        diaDaSemanaPorExtenso = "Sexta-feira";
        break;
    case 6:
        diaDaSemanaPorExtenso = "Sábado";
        break;
    default:
        diaDaSemanaPorExtenso = "Erro ao obter o dia da semana";
}

alert (diaDaSemanaPorExtenso);