// Verificar que dia é hoje

let dia = new Date().getDay();
let diaNome = '';

switch(dia) {
    case 1:
        diaNome = 'Segunda-feira';
        break;
    case 2:
        diaNome = 'Terça-feira';
        break;
    case 3:
        diaNome = 'Quarta-feira';
        break;
    case 4:
        diaNome = 'Quinta-feira';
        break
    case 5:
        diaNome = 'Sexta-feira';
        break;
    case 6:
        diaNome = 'Sabado';
        break;
    case 7:
        diaNome = 'Domingo';
        break;
    default:
        diaNome = "Você está em outro planeta man kk";
}

switch(dia) {
    case 6:
    case 7:
        diaNomeF = "Final de semana";
        break;
    default:
        diaNomeF = 'Dia de semana';
}

document.getElementById('dia').innerHTML = "Home é: "+diaNome+" | "+ diaNomeF;