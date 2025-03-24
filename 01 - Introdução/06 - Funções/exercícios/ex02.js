// Faça uma função que retorne o reverso de um número inteiro informado. Por exemplo: 127 -> 721.
// let numeroUsuario = parseInt(prompt('Digite um número'))
// while(numeroUsuario = 0){
//     numeroUsuario = parseInt(prompt('Digite um número novamente'))
// }

let numeroUsuario = 1
function retornarReverso(numero) {
    let numeroReverso = "0"
    numero = numero.toString()
    for (i = numero.length - 1; i >= 0; i--) {
        numeroReverso = numeroReverso.toString() + numero[i].toString()
    }
    return parseInt(numeroReverso)
}

console.log(retornarReverso(numeroUsuario))