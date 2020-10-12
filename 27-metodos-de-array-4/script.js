let lista = [45, 4, 9, 16, 25];
let lista2 = [];


// Retorna o primeiro encontrado
lista2 = lista.find(function(item){
    return (item == 16)? true : false;
});

// Mesma coisa que o find, porém ele retorna a posição dele no array.
lista2 = lista.findIndex(function(item){
    return (item == 16)? true : false;
});

let lista3 = [
    {id:1, nome:'Bonieky', sobreno:'Lacerda'},
    {id:2, nome:'Paulo', sobreno:'XYZ'},
    {id:3, nome:'Fulano', sobreno:'Da Silva'},
];

let pessoa = lista.find(function(item){
    return (item.sobrenome == 'XYZ') ? true : false;
})

let res = lista2;
let res = lista3;

console.log(res);