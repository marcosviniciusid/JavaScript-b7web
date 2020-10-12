let info = ['Marcos Vinicius', 'Marocs', 'Vinicius', '@marcosviniciusid']

let [nomeCompleto, nome, sobrenome, instagram] = info
// pulando o que quero pegar
let [nomeCompleto, ,, instagram] = info

console.log(nomeCompleto, nome, sobrenome, instagram)

// ==========================

let [ nome, sobrenome] = ['Marcos', 'Vinicius']

function criar() {
    return [1,2,3]
}

let numeros = criar()

let [a,b,c] = numeros

console.log(a,b,c)


let [a,b,c] = criar()
console.log(a,b,c)
