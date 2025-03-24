// Desenvolver um programa que leia um número não determinado de valores, calcule e escreva a média aritmética deles, a quantidade de valores positivos, a quantidade de valores negativos, o percentual de valores negativos e positivos, qual o valor máximo, e qual o valor mínimo
let total = 0
let contagem = 0
let positivo = 0
let negativo = 0
let contagemNegativo = 0
let contagemPositivo = 0
let valorMin = 0
let valorMax = 0

while (true) {
    let valor = prompt('Digite um número')
    if (valor === "e") {
        break
    }
    else {
        valor = parseFloat(valor)
    }
    total += valor
    contagem++
    if (valor > 0) {
        positivo++
    } else if (valor < 0) {
        negativo++
    }
    if (valor > valorMax) {
        valorMax = valor
    }
    else if (valor < valorMin) {
        valorMin = valor
    }
}

alert(`Media: ${(total/contagem).toFixed(2)}\nValores positivos: ${positivo}\nValores Negativos: ${negativo}\n% positivo: ${positivo/contagem*100}%\n% negativo: ${negativo/contagem*100}%\nmáximo: ${valorMax}\nmínimo: ${valorMin}`)




