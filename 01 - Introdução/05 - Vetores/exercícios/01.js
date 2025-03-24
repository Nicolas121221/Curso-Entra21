// Criar um algoritmo quantos números você desejar (laço infinito), e ao final dele mostre:
// A lista em ordem crescente
// A lista em ordem decrescente
// A soma de todos os itens 
// A média de todos os números
console.log(('123'))
let numeros = [1,20,99,12,923,123,485]
let numUsuario = 0
while(true){
    numUsuario = prompt('Digite um números\ne - sair')
    if(numUsuario === "e"){
        break
    }
    numeros.push(parseFloat(numUsuario))
}
function compararNumeros(a, b) {
    return a - b;
}
numeros.sort(compararNumeros)
soma = 0
for(i=0;i<numeros.length;i++){
    soma += numeros[i] 
}
alert(`números em ordem crescente: ${numeros}\nNúmeros em ordem decrescente: ${numeros.reverse()}\nTotal: ${soma}\nMédia aritimética: ${soma/numeros.length}`)

