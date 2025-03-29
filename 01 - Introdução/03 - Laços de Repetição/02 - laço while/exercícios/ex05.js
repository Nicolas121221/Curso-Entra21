
let login = parseInt(prompt('Digie o seu login'))
let senha = parseInt(prompt('Digite a sua senha'))
while (true) {
    if (login === 1234 && senha === 1234) {
        break
    }
    login = parseInt(prompt('Digie o seu login novamente'))
    senha = parseInt(prompt('Digite a sua senha novamente'))
}
let saldo = 0
while (true) {
    let opcao = prompt('a - consultar o saldo\nb - pagar a conta\nc - depositar na conta\nd - saque\ne - sair').toLowerCase()
    if (opcao === 'e') {
        break
    }
    else if (opcao === "a") {
        alert(`seu saldo é de R$${saldo}`)
    }
    else if (opcao === "b") {
        let valor = parseInt(prompt('insira um valor a pagar'))
        saldo -= valor
    }
    else if (opcao === "c") {
        let valor = parseFloat(prompt('insira um valor a depositar'))
        saldo += valor
    }
    else if (opcao === "d") {
        let valor = parseInt(prompt('insira um valor a sacar'))
        saldo -= valor
    }
}