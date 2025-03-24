// Escreva uma função que receba uma lista de strings e retorne uma nova lista com todas as palavras em maiúsculas.

function tornarMaiusculo(palavras) {
    let palavrasUpperCase = []
    for (i = 0; i < palavras.length; i++) {
        palavrasUpperCase.push((palavras[i]).toUpperCase())
    }
    return palavrasUpperCase
}

console.log(tornarMaiusculo(['nicolas', 'guedes']))
