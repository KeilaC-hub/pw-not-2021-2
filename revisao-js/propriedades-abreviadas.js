/*
let infoUsuario = {
    usuario: 'Jucicleison',
    nomeCompleto: 'Jucicleison da Silva Souza',
    grupo: 'Alunos',
    senha: '12345678'
}
*/

let usuario = 'Jucicleison'
let nome = 'Jucicleison da Silva Souza'
let grupo = 'Alunos'
let password = '12345678'

// Abreviando propriedades
let infoUsuario = {
    usuario, // usuario: usuario,
    nomeCompleto: nome,
    grupo, // grupo: grupo,
    senha: password
}

console.log(infoUsuario)

// Exibindo o conteúdo da variável 'password e 'grupo' para fins de depuração
// propriedade e valor
console.log({password})
console.log({grupo})
console.log({password, grupo})