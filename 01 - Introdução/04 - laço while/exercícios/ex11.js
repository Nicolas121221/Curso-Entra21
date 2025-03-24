// Crie um programa que simule o estoque de determinado material. Devem existir as opções de:
// 1 Adicionar ao estoque
// 2 Retirar do estoque
// 3 Consultar saldo
// 4 Consultar movimentações (entradas e saídas)
let estoque = 0
let saidas = 0
let entradas = 0
while(true){
    let opcaoUsuario = parseInt(prompt('escolha uma opção\n1 - Adicionar ao estoque\n2 - Retirar do estoque\n3 - Consultar saldo\n4 - Consultar movimentações (entradas e saídas)\n5 - sair'))

    if(opcaoUsuario === 1){
        opcaoUsuario = parseInt(prompt('Digite o quando você pretende adiconar ao estoque'))
        estoque += opcaoUsuario
        entradas += opcaoUsuario
    }else if (opcaoUsuario === 2){
        opcaoUsuario = parseInt(prompt('Digite o quando você pretende retirar'))
        estoque -= opcaoUsuario
        saidas += opcaoUsuario
    }else if (opcaoUsuario === 3){
        alert(estoque)
    }else if(opcaoUsuario === 4){
        alert(`entradas: ${entradas}\nsaídas: ${saidas}`)
    }
    else if(opcaoUsuario === 5){
        break
    }
    
}