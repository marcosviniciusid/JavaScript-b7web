led d = new Date()

// Trocando o ano
d.setFullYear(2022)
// Trocando o mes. Para dezembro
d.setMonth(11)
// Trocando o dia.
d.setDate(15)
// Aumentar a data atual
d.setDate(d.getDate() + 5)

d.setHours( d.setHours() + 24)

let novoValor = d;
console.log( novoValor )

