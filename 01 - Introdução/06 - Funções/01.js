function saudacao(nome) {
    return `Olá ${nome}`
}

function somar(a, b) {
    return a + b
}

function ehPar(numero) {
    if (numero % 2 === 0) {
        return true
    }
    return false
}

function ehImpar(numero) {
    return numero % 2 !== 0
}

// console.log(ehImpar(1));
// console.log(saudacao("Antônio"));
// console.log(somar(2, 5));
// console.log(ehPar(200));

// if (ehImpar(11)) {
//     console.log('Impar')
// }
// else {
//     console.log('par')
// }

//criar uma função que converte clesius para fahrenheit

function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32
}

// console.log(celsiusToFahrenheit(32))

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8
}

// console.log(Math.ceil(fahrenheitToCelsius(89.6)))

function somarVetor(numeros) {
    let soma = 0;
    for (i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return (soma)
}

console.log(somarVetor([3,5,7,10]))
