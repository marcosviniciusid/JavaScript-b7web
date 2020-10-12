let pessoa = {
    nome: 'Marcos',
    sobrenome: 'Vinicius'
    idade: 90,
    social: {
        facebook:'b7web',
        instagram:'marcos'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.social.facebook)
console.log(pessoa.nomeCompleto())

// "Como funciona hoje"

let nome = pessoa.nome
let idade = pessoa.idade
let instagram = pessoa.social.instagram

// Desconstruindo o objeto, e cada camarada desse vira uma variavel
let { nome, sobrenome, idade } = pessoa
// Pegando e mudando o nome da variavel
let { nome:pessoaNome, sobrenome, idade } = pessoa

// Definir valor padrao, caso não venha a propriedade IDADE no objeto.
let { nome:pessoaNome, sobrenome, idade = 0 } = pessoa

console.log( pessoaNome, idade, instagram)

