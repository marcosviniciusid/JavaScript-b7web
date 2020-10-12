function ledVerde() {
    let value = document.getElementById("verde").classList.add("led-green");
    document.getElementById("amarelo").classList.remove("led-yellow");
    document.getElementById("vermelho").classList.remove("led-red");

}
function ledAmarelo() {
    let value = document.getElementById("amarelo").classList.add("led-yellow");
    document.getElementById("vermelho").classList.remove("led-red");
    document.getElementById("verde").classList.remove("led-green");
}
function ledVermelho() {
    let value = document.getElementById("vermelho").classList.add("led-red");
    document.getElementById("amarelo").classList.remove("led-yellow");
    document.getElementById("verde").classList.remove("led-green");
}

function ledVerdeD() {
    let value = document.getElementById("verde").classList.remove("led-green");
}
function ledAmareloD() {
    let value = document.getElementById("amarelo").classList.remove("led-yellow");
}
function ledVermelhoD() {
    let value = document.getElementById("vermelho").classList.remove("led-red");
}

