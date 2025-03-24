// Escreva uma função que calcule o fatorial de um número inteiro positivo.

function fatorial(numero) {
    let i = 1
    let fatorial = numero
    while (true) {
        if (fatorial <= 1) {
            break
        }
        fatorial *= numero - i
        i++
        if (numero === i) {
            break
        }
    }
    return fatorial
}

console.log(fatorial(12394))