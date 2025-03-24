// Implemente uma função que receba uma lista de números e retorne o maior valor.

function maiorValor(numeros) {
    let maiorValor = 0
    for (i = 0; i < numeros.length; i++) {
        if (maiorValor < numeros[i]) {
            maiorValor = numeros[i]
        }
    }
    return maiorValor
}

console.log(maiorValor([1, 4, 6, 123, 123, 24]))