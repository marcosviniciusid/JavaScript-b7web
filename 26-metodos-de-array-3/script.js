let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.map(function(item) {
    return item * 2;
});

for(let i in lista) {
    lista2.push(lista[i] * 2);
}

lista2 = lista.filter(function(item){
    if(item < 20) {
        return true;
    } else {
        return false;
    }
});

// Nem todo mundo é maior que 20
lista2 = lista.every(function(item) {
    if(item > 20) {
        return true;
    } else {
        return false;
    }
})

// Todos tem q estar de acordo com a condição, se não dá false
lista2 = lista.every(function(item) {
    return (item > 3)? true : false;
})

// some = alguns
lista2 = lista.some(function(item) {
    if(item > 20) {
        return true;
    } else {
        return false;
    }
})


let res = lista2;

console.log(res);