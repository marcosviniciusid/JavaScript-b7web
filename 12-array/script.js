// Array

let carros = ['Palio', 'Uno', 'Corolla', 'Ferrari'];

/**
 * Arrau começa com 0
 */

console.log(carros[3]); // Tras a Ferrari

// Outra forma de montar array
// Não mais comum hoje em dia.

let carros = new Array('Palio', 'Uno', 'Corolla', 'Ferrari');

let carros = [
    'Palio', 
    'Uno', 
    'Corolla', 
    'Ferrari',
    function() {
        console.log('Testando 1,2,3...');
    }
];

// Acessando a função no array

carros[4]();

let ingredientes = [
    ['uva', 'pera', 'maça'],
    ['arroz', 'macarrão']
]

console.log(ingredientes[1][0]); // Arroz