// Crie um algoritmo que receba quantos nomes(apenas nome) desejar, e ao final:
// A lista em ordem crescente
// A lista em ordem decrescente
// O total de nomes cadastrados
// Quantos ‘Carlos’ existem na lista

let nomes = ['Nicolas', 'João', 'Gabrielly', 'Carlos', 'Carlos']
let nomeinput = 0
while(true){
    nomeinput = prompt('Digite um nome\n1 - sair')
    if(parseInt(nomeinput) === 1){
        break
    }
    nomes.push(nomeinput)
}

let Carlos = 0
for(i=0;i<nomes.length;i++){
    if(nomes[i]==='Carlos'){
        Carlos++
    }
}
nomes.sort()
alert(`Nomes em ordem alfabética: ${nomes}\nNomes em ordem Decrescente ${nomes.reverse()}\nQuantidade de Nomes: ${nomes.length}\nQuantidade de Carlos: ${Carlos}`)


