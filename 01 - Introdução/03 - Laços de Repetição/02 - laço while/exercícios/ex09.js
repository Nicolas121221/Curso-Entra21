// Faça um programa que implemente um menu onde o usuário deverá selecionar 1 ou 0. Caso seja informado um número diferente, o programa deverá solicitar uma nova opção. 


let opcaoUsuario = parseInt(prompt('selecione um número\n0 ou 1'))
if (opcaoUsuario != 0 || opcaoUsuario != 1) {
    while (true){
        opcaoUsuario = parseInt(prompt('Você digitou incorretamente\ninsira um numero correto\n0 ou 1'))
        if (opcaoUsuario === 0 || opcaoUsuario === 1) {break}
    }
}

