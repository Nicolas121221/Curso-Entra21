// Crie uma função que determine se um número é primo ou não e retorne True ou False

function ehPrimo(numero){
    let quadrado = Math.sqrt(numero)
    let primo = true
    if(numero < 2){
        primo = false
    }
    else if(numero === 2 ||numero === 3 ||numero === 5 ||numero === 7 ){
    }
    else if(numero % 2 === 0 || numero % 3 === 0 ){
        primo = false
    }
    else{
        for(i=1;i<quadrado; i++){
            if(numero % (6*i+1) === 0 || numero % (6*i-1) === 0){
                primo = false
            }
        }
    }
    return primo
}

console.log(ehPrimo(1298747))