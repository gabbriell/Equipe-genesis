/**
 * peça para o usuário informar uma cor em hexadecimal (#ff0000) ou em nome em inglês (red) e mude a cor da página para a cor informada pelo usuário.
 */

function mudarCor() {
    const corInput = document.getElementById("corInput").value;

   
    if (isValidColor(corInput)) {
        document.body.style.backgroundColor = corInput;
    } else {
        alert("Por favor, insira uma cor válida em hexadecimal (#ff0000) ou em nome em inglês.");
    }
}


function isValidColor(cor) {
    const elemento = document.createElement("div");
    elemento.style.color = cor;
    return elemento.style.color !== "";
}