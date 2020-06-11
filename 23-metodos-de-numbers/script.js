let n = 10;

let res = n.toString();
// Transformando numero em string

/**
 * 
 * 
 */

let n = 10.98723876;

let res = n.toFixed(2);
// Quantos decimais quero pegar
// 10.98

console.log(res);


/**
 * 
 * 
 */

let n = '25';

let res = parseInt(n) + 5;
// Transformar a string em numero

let res = parseFloat(n) + 5;
// Mesma coisa que o anterior, mas aqui preserva os decimais caso tenha.

console.log(res);