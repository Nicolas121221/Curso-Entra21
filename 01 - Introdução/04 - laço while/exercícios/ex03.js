// Um determinado material radioativo perde metade de sua massa a cada 50 segundos. Dada a massa inicial, em
//  gramas, fazer um programa em que calcule o tempo necessário para que essa massa se torne menor que 0,5 grama.
//  O programa deve escrever a massa inicial, a massa final e o tempo calculado em segundos.

let massaInicial = 0
let tempo = 0

while(true){
    massaInicial = parseFloat(prompt('Inisira a massa inicial do elemento químico em gramas'))
    if(massaInicial>0.5){
        break
    }
}
let massaFinal = massaInicial
while(true){
    massaFinal = massaFinal/2
    tempo += 50
    if(massaFinal<0.5){
        break
    }
}
alert(`A massa inicial foi de ${massaInicial}g\nA massa Final foi de ${massaFinal.toFixed(2)}g\nO tempo foi de ${tempo} segundos`)
