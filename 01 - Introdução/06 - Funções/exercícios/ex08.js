// Escreva uma função que receba uma lista de números e retorne a média deles.

function media(numeros) {
    let soma = 0
    for (i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma / numeros.length
}

console.log(media([2, 22, 31, 23, 123, 4123, 123, 5, 314, 12, 341, 235, 123, 4, 1532, 1234, 1523, 1234, 5, 4531]))