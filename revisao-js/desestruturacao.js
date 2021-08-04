// Vetor
let carros = ['Celta', 'Uno', 'Gol']

// Desestruturação total do vetor
let [a, b, c] = carros

console.log(a)
console.log(b)
console.log(c)

// Desestruturação parcial
let [m, n] = carros

console.log('______________________')
console.log(m)
console.log(n)

// Objeto
let veiculo = {
    marca: 'Volkswagen',
    modelo: 'Fusca',
    cor: 'Preto',
    ano: 1969
}

// Desestruturação total de um objeto
// 1 - as variáveris devem ter o mesmo nome das propriedades
// 2 - a ordem não importa

let {cor, modelo, ano, marca} = veiculo

console.log('______________________')

console.log(marca)
console.log(modelo)
console.log(cor)
console.log(ano)