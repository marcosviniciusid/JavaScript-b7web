// Objeto

let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligado:false,
    ligar:function() {
        this.ligado = true;
        console.log("Ligando o "+this.modelo);
        console.log("VRUM VRUM!");
    },
    acelerar:function() {
        if(this.ligado == true) {
            console.log("Riiihiiiii");
        } else {
            console.log(this.nome+" "+this.modelo+" Não está ligado!");
        }
    }
};

// Acessando

console.log(carro['nome']);
console.log(carro.nome);

console.log("Modelo: "+carro.modelo);
carro.ligar();
carro.acelerar();

// Objetos dentro do array

let carros = [
    {nome:'Fiat', mnodelo: 'Palio'},
    {nome:'Fiat', modelo:'Uno'}
    {nome:'Toyota', modelo: 'Corolla'},
    {nome:'Ferrari', modelo:'Spider'}
];

console.log(carros[2].nome);
console.log(carros[2].['nome']);
