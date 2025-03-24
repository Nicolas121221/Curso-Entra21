// Implemente uma função que receba uma lista de números e retorne a soma de todos os números ímpares.

function somarImpares(numeros) {
    let somaImpares = 0
    let contagemImpar = 0
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            somaImpares += numeros[i]
        }
    }
    return somaImpares
}

console.log(somarImpares([9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8]))