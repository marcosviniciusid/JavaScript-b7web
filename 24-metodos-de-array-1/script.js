let lista = ['ovo', 'Farinha', 'Corante', 'Massa'];

let res = lista.toString();
// Poe a virsula entre cada item. Junta e exibe.

let res = lista.join('-');
// Vai pegar o array e transformar em string e separar pelo o que eu indicar

let res = lista.indexOf('Corante');
// Procurar um item e vai retornar a posição de onde está. Se não encontrar, retorna -1

// ====================================

lista.pop();
// Remove o ultimo item do array.

lista.shift();
// Remove o primeiro item do array

lista.push('Prato');
// Insere item no array


let res = lista;

console.log(res);