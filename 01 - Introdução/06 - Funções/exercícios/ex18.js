// Crie uma função que calcule o número de dias em um número de anos fornecido como argumento (levando em consideração anos bissextos).
function anobissexto(ano) {
    let bissexto = false
    if (ano % 400 == 0) {
        bissexto = true
    }
    else if (ano % 100 == 0) {
    }
    else if (ano % 4 == 0) {
        bissexto = true
    }
    return bissexto
}
function calcularDias(ano) {
    let diasTotais = 0
    for (i = 0; i < ano.length; i++)
        if (anobissexto(ano[i])) {
            diasTotais += 366
        }
        else {
            diasTotais += 365
        }
    return diasTotais
}

console.log(calcularDias([1995, 1230, 2025, 1234]))