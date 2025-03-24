// Crie um algoritmo que receba valores aleatórios (de qualquer tipo), e ao final:
// A lista em ordem inversa ao que foi lançado

let valores = []
let valoresinput = 0
while(true){
    valoresinput = prompt('Digite um nome\ns - sair')
    if(valoresinput === "s"){
        break
    }
    valores.push(valoresinput)
}

valores.reverse()
alert(`Os valores na ordem inversa foi\n${valores}`)