// Escreva uma função que inverta uma string (por exemplo, "python" se tornaria "nohtyp").

function inverterPalavra(palavra) {
    let palavraReversa = ""
    for (i = palavra.length - 1; i >= 0; i--) {
        palavraReversa += palavra[i]
    }
    return palavraReversa
}

console.log(inverterPalavra('abcdefghijklmnopqrstuvwxyz'))