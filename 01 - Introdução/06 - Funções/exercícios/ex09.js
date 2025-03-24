// Crie uma função que receba uma string como argumento e retorne o número de vogais nela

function contarVogais(palavra) {
    let numVogais = 0
    let texto = palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    for (i = 0; i < texto.length; i++) {
        if (texto[i] === "a" || texto[i] === "e" || texto[i] === "i" || texto[i] === "o" || texto[i] === "u") {
            numVogais++
        }
    }
    return numVogais
}

console.log(contarVogais(""))