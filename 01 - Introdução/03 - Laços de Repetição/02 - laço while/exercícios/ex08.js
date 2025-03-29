// Crie um programa que receba um número indeterminado de anos. Ao final, apresente quantos anos são pares, quantos são ímpares, quantos são bissextos, quantos são futuros (2024, 2025), e quantos são passado (2000, 2010)

let par = 0
let impar = 0
let bissexto = 0
let futuro = 0
let passado = 0

while (true) {
    let valor = prompt('Digite um ano\nInsira "a" para sair')
    if (valor === 'a') {
        break
    }

    if (valor % 400 == 0) {
        bissexto++
    }
    else if (valor % 100 == 0) {
    }
    else if (valor % 4 == 0) {
        bissexto++
    }

    if (valor % 2 && valor != 0) {
        par++
    } else if (valor != 0) {
        impar++
    }

    if (valor > 2025) {
        futuro++
    }
    else if (valor < 2025) {
        passado++
    }
}
alert(`bissexto: ${bissexto}\npassado: ${passado}\nfuturo: ${futuro}\npar: ${par}\nÍmpar: ${impar}\n`)