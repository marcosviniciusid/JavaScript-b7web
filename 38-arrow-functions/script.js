function somar (x, y) {
    return x + y;
}

let somar = function (x, y) {
    return x + y;
}

console.log(somar(10, 5))

// Arrow Function

let somar = (x, y) => {
    return x + y
}

// Pode colocar uma ação direta que ele retorna
let somar = (x, y) => x+y;

// Sò dá pra fazer com 1 parametro
let letrasNoNome = (nome) => {
    return nome.lenght;
} 

let letrasNoNome = (nome) => nome.lenght;

// Tendo um parametro só, posso ignorar o (parenteses)
let letrasNoNome = nome => nome.lenght;