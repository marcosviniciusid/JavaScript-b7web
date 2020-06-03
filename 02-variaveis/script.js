/**
 * 
 * Variaveis
 * 
 */

var nome = "Marcos Vinicius";
var idade = 90;

alert(idade);
alert(nome);

var x = 10;
var y = 15;

var total = x + y;

alert(total);

var nome = "Vinicius"; // STRING
var sobrenome = "Silva";

var nomecompleto = nome +" "+ sobrenome;

alert(nomecompleto);

/**
 * Outras formas de definir variaveis
 * 
 */

var nome = "Marcos"; // window.nome (vai funcionar) // Não restringe ao escopo
let nomeComposto = "Vinicius"; // window.nomeComposto (Não vai funcionar) // Restringe ao escopo
const sobrenome = "Silva";


if ( nome == "Marcos" ){
    var idade = 90;
}

console.log(idade);


if ( nome == "Marcos" ){
    let idade2 = 99;
    // console.log(idade2);
}

console.log(idade2);


// A variavel em let não pode ser redefinido.
// Pra mudar o valor, simplesmente altera sem declarar a varivale novamente.

var nome = "Bonieky";
var nome = "Pedro";

console.log(nome);

let nome = "Bonieky";
nome = "Fulano";

console.log(nome);

// Const = Valor constante
// Não pode receber novo valor

const nome = "Silva";

console.log(nome);