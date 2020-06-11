/**
 * 
 * Extraindo informações de uma string
 * 
 */

let nome = 'Marcos Vinicius Macedo Silva';

let resultado = nome.slice(6, 10); 
// 1Parametro = A posição inicial que queira começar a pegar as informações
// 2Parametro = O final. Se não especificar, ele pega o restante todo

let resultado = nome.substring(3, 9);
let resultado = nome.substring(-4);
// Faz mesma coisa que o slice
// Ele dá outra possibilidade, que é pegar a string de trás para frente.

let resultado = nome.substr(0, 7);
// 1Parametro = começa na posição desejada
// 2Parametro = Quantidade de caracteres quero pegar.
// Funciona com negativo também.

console.log(resultado);


