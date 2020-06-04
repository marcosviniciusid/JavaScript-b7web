// Dois tipos de for
// FOR LOOP
// FOR LOOP ARRAY

// Fazendo uma listagem de numeros.

let texto = '';

// Primeira etapa = Criar uma variavel auxiliar
// Segunda etapa = condição. Enquanto seja satisfatoria, o bloco executa
// Terceira etapa = incrementando minha variavel auxiliar (de controle)

for (let i = 0; i <= 50; i++ ) {
    texto = texto + i + '<br>';
}

document.getElementById("demo").innerHTML = texto;

let carros = ['Ferrari', 'Fusca', 'Palio', 'Corola'];

let html = '<ul>';

for (let i in carros) {
    html += '<li>'+carros[i]+'</li>';
}

html += '</ul>';


document.getElementById("demo").innerHTML = html;