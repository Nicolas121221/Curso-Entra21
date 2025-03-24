// Crie uma função que verifique se uma palavra é um palíndromo (ou seja, pode ser lida da mesma forma de trás para frente).

function verifyPalindromo(palavra) {
    let palavraReversa = ""
    for (i = palavra.length - 1; i >= 0; i--) {
        palavraReversa += palavra[i]
    }
    return palavraReversa === palavra
}

console.log(verifyPalindromo('acudacadeladaledacaduca'))


