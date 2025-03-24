// Crie um algoritmo que, dado um número informado pelo usuário, imprima a tabuada dele de 1 a 10. Use o formato de apresentação (considerando que o usuário informou o número 5): 
let numero = 0
while (true) {
    numero = parseInt(prompt('Insira um valor'))
    if (numero > 0) {
        break
    }
}
let i = 1
while (true) {
    console.log(`${i}x${numero} = ${numero * i}`)
    i++
    if (i > 10) {
        break
    }
}