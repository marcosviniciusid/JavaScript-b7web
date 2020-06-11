/**
 * 
 * Extraindo informações de uma string
 * 
 */

let nome = 'Eu gosto de carros';

let resultado = nome.replace('carros', 'motos');
// 1Parametro = O que quero buscar
// 2Parametro = O que vou colocar no lugar
// Obs: Ele pega a variavel nome e só troca as palavras escolhida e salva na variavel resultado.

console.log("nome: ", nome);
console.log("resultado: ", resultado);

/**
 * 
 * 
 */


let nome = 'Eu gosto de carros';

let resultado = nome.toUpperCase();
// Todo o texto em MAIUSCULO

let resultado = nome.toLowerCase();
// Todo o texto em minusculo

/**
 * 
 * 
 */

let nome = 'Marcos';

let resultado = nome.concat(' ', 'Vinicius');
// Concatenar texto. Mas não é muito utilizado.
// Posso concatenar varias coisas

let resultado = nome.trim();
// Essa função tira todos os espaços em branco

let resultado = nome.charAt(3);
// Quero saber qual caracter esta na posição 3.

/**
 * 
 * 
 * 
 */

let nome = 'Marcos Vinicius Macedo Silva';

let resultado = nome.split(' ');
// Split = Dividir
// 1Parametro = Onde achar esse caracter, corta e divide em um array


console.log("resultado: ", resultado);

