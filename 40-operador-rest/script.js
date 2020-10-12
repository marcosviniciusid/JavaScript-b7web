// Independente da quantidade de parametros, ele receberá todos em numeros.
function adicionar(...numeros) {
    console.log(numeros);
}
    
adicionar(5)

// Juntando spread com rest


function adicionar(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ]
    return novoConjunto;
}

let nomes = ['Marcos', 'Thiago']

let outros = adicionar(nomes, "Antonio", "Maria", "Jose")

console.log(outros)