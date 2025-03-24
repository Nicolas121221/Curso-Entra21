let numero = 0
let intervalo1 = 0
let intervalo2 = 0
let intervalo3 = 0
let intervalo4 = 0

while (true) {
    let valor = prompt('Digite um número\ne - sair')
    if (valor === 'e') {
        break
    }
    valor = parseInt(valor)
    if (valor < 0) {
        break
    }
    else if (valor <= 25) {
        intervalo1++
    }
    else if (valor <= 50) {
        intervalo2++
    }
    else if (valor <= 75) {
        intervalo3++
    }
    else if (valor < 100) {
        intervalo4++ 
    }
}
alert(`intervalos:\n0-25: ${intervalo1}\n26-50: ${intervalo2}\n51-75: ${intervalo3}\n76-100: ${intervalo4}`)
