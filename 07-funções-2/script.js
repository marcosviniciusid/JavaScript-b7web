/**
 * 
 * Função é um conjunto de código que dá pra reutilizar quando quiser.
 * 
 */

// Função comum.

function alterar(titulo) { // Passando o parametro
    // # Bloco de Código

    document.getElementById("titulo").innerHTML = titulo; // Utilizando parametro
    document.getElementById("campo").value = titulo; // Utilizando parametro

}

// Chamando a função
alterar("Valor Parametro titulo haha"); // Passando titulo pelo parametro

function somar(x, y) {
    let total = x + y; // Usando let, não tem como aceesar essa variavel "total" fora da função somar
    return document.getElementById("campo").value = total;
}

somar(10,15); // Passando os dois valores desejaveis para somar


var resultado = somar(10,15);
document.write(`Valor da varivel "resultado": ${resultado}`);