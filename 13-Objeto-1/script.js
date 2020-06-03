let carros = [
    'Palio',
    'Uno',
    'Corolla',
    'Ferrari'
];

// Objeto

let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligar:function() {
        console.log("VRUM VRUM!");
    },
    acelerar:function() {
        console.log("Riiihiiiii");
    }
};

// Acessando

console.log(carro['nome']);
console.log(carro.nome);

carro.ligar();
carro.acelerar();

console.log("Modelo: "+carro.modelo);