// Instanciando a classe Date. Criando um objeto da Classe Date.
// Pegando a data atual em que foi criado. Pega a data do dispositivo que esta acessando.

led d = new Date()

// Retorna a informação completa dessa classe
// console.log(d)

// Retorna a data resumida
console.log (d.toDateString ())

// Data com fuso horario - UTC0
console.log (d.toUTCString ())

// Retorna o texto todo, toda informação.
console.log (d.toString ())


// -----------------------------------------

// Pode definir informações e depois manipular.
// 7 parametros ou um só

// 1p ano
// 2p mes | mes começa no 0 e dezembro 11
// 3p dia     | Dia começa do 1
// 4p horas
// 5p minutos
// 6p segundos

let d = new Date(2020, 0, 1, 12, 30, 12)

console.log(d.tostring ())

// -----------------------------------------

// Date String
let d = new Date('2020-01-01 15:42:17')
// No minimo tem q ter ano e data
let d = new Date(2020, 2)

console.log(d.tostring ())

// anteriores a 1970 em milesegundos
// new Date(-1212312313)


// -----------------------------------------