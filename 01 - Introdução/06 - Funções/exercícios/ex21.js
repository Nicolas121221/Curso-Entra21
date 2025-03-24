// Escreva uma função que calcule o mínimo múltiplo comum (MMC) de dois números inteiros.
function calcularmdc(num1, num2) {
    let divisor = 0;
    if (num1 < num2) {
        divisor = num1
    } else {
        divisor = num2
    }
    while (num1 > divisor || num2 > divisor) {
        if (num1 % divisor === 0 && num2 % divisor === 0) {
            break
        }
        divisor--
    }
    return divisor
}

function calcularmmc(num1, num2) {
    return (num1 * num2) / calcularmdc(num1, num2)
}

console.log(calcularmmc(111902384, 9219384))
