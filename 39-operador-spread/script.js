// Funciona para array e objeto
let numeros = [1,2,3,4];
let outros = [...numeros,5,6,7,8]
// Com objetos
let info = { nome:'Marcos', sobrenome:'Silva', idade: 99};
let novoInfo = {...info, cidade: "Rio das Ostras", estado: "RJ", pais:"Brasil"};
