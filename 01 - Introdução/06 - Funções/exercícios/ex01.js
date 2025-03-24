// Crie uma função que permita contar o número de vezes que aparece uma letra em uma string.
let palavra = prompt('Digite a palavra que você que encontar a quantidade de letas').toLocaleLowerCase()
while (palavra == 0) {
    palavra = prompt('Digite a palavra novamente').toLocaleLowerCase()
}
let letra = prompt('digite a letra que você quer contar').toLowerCase()

while (palavra == 0) {
    palavra = prompt('Digite letra novamente').toLocaleLowerCase()
}


function contarLetras(palavra, letra) {
    let quantidadeLetra = 0
    for (i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) {
            quantidadeLetra++
        }
    }
    return quantidadeLetra
}

alert(`A letra "${letra.toLocaleUpperCase()}" Apareceu ${contarLetras(palavra, letra)} vezes na palavra ${palavra}`)