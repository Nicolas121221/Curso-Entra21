// Faça um programa que calcule o fatorial de um número. Esse programa deve receber como entrada um número inteiro positivo e imprimir na tela o fatorial dele.

let numero = 0
while (true) {
    numero = parseInt(prompt('Insira um valor'))
    if (Number.isInteger(numero) && numero > 0) {
        break
    }
}
let i = 1
let fatorial = numero
while (true) {
    if(fatorial <= 1){
        break
    }
    fatorial = fatorial * (numero - i)
    i++
    if (numero === i) {
        break
    }
}
alert(fatorial)