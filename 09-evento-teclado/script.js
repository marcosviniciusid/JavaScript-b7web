/**
 * 
 * Anotação:
 * 
 * linha 12: 
 * Evento: onkeyup // Quando solta a tecla.
 * Evento: onkeydown // Enquando a tecla estiver pressionado
 * Evento:
 * 
 */

// function digitou() {
//     console.log("Você digitou");
// }

// Saber o que foi digitado

// função digitou com evento onkeyup
function digitou(e) {
    // console.log(e);
    // keyCode: 13 = Enter
    // Código da tecla

    // ctrKey: true

    if (e.keyCode == 13 && e.ctrlKey == true) { // Tecla Enter
        let texto = document.getElementById("campo").value;
        alert(texto);
    }

}