/**
 * 
 * 
 * 
 */

let nome = 'Marcos Vinicius Macedo Silva';
let resultado = '';

let resultado = nome.length; 
// Mostra quantos caracteres tem.

let resultado2 = nome.indexOf('Vinicius'); 
// Querendo achar um texto. Se existe o que to procurando.Retorna a posição em que esse texto começa. Caso não ache, retorna -1
// Exemplo de uso

if(nome.indexOf('Silva') > -1) {
    resultado2 = 'Achou!';
} else {
    resultado2 = 'Não achou!';
}

console.log(resultado);
console.log(resultado2);

