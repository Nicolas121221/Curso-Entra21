// Implemente uma função que receba uma lista de números e retorne uma nova lista com os números em ordem crescente.
function ordena (a, b){
    return a - b
} 
function ordenarNumeros(numeros){
    return numeros.sort(ordena)
}
console.log(ordenarNumeros([5,4,3,2,1]))