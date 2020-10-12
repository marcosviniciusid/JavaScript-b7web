let pessoa = {
    nome: 'Marcos',
    sobrenome: 'Vinicius'
    idade: 90,
    social: {
        facebook:'b7web',
        instagram:{
            url:'@marcos'
            seguidores:10000
        }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

let {facebook, instagram} = pessoa.social

// só instagram vai 'virar variavel'
let {nome, idade, social:{instagram:{url:instagram, seguidores}}} = pessoa

console.log (facebook, instagram, seguidores)


function pegarNomeCompleto({nome, sobrenome, social:{instagram:{url:instagram}}}) {
    return `${nome} ${sobrenome} (Siga em ${instagram})`
}

console.log(pegarNomeCompleto(pessoa))
