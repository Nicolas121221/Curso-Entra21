// Implemente uma função que receba uma lista de palavras e retorne a palavra mais longa.

function maiorPalavras(palavras) {
    let maioresPalavras = [];
    let maiorValor = 0;
    for(i = 0 ; i < palavras.length; i++){
        if (palavras[i].length > maiorValor) {
            maioresPalavras = [palavras[i]]
            maiorValor = palavras[i].length
        }
        else if (palavras[i].length === maiorValor){
            maioresPalavras.push(palavras[i])
        }
    }
    return maioresPalavras;
}

console.log(maiorPalavras(["123",'123']))