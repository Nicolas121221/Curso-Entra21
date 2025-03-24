// Implemente uma função que receba uma lista de números e retorne uma nova lista contendo apenas os números pares.

function retornarPares(numeros) {
    let listaPares = []
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            listaPares.push(numeros[i])
        }
    }
    return (listaPares)
}

console.log(retornarPares([120348, 1239480152, 123481098253, 1324345, 10923848, 134866]))