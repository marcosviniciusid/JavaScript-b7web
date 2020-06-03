var hora = 14;

if ( hora < 12 ) {
    console.log("Bom dia");
} else if (hora < 18) {
    console.log("boa tarde");
} else if (hora <= 23) {
    console.log("Boa noite");
}

// Operador AND
if ( hora >= 12 && hora < 18) {
    console.log("Bom dia");
} 

// Operador OR
if ( hora == 12 || hora == 18) {
    console.log("Você está na hora do rush");
}
