let cpf = (prompt('Digite o CPF')).toString()
for(;cpf.length!=11;){
    cpf = (prompt('Você digitou errado tente novamente!!!')).toString()
}

let armazenador = 0

for(i=0;i<=cpf.length-3;i++){
    armazenador+= cpf[i]*(10-i)
}

let verificador1 = 11-armazenador%11
if(verificador1>9){
    verificador1-=10
}
armazenador = 0

for(i=0;i<=cpf.length-2;i++){
    armazenador+= cpf[i]*(11-i)
}
let verificador2 = 11-armazenador%11
if(verificador2>9){
    verificador2-=10
}
if(verificador1 == cpf[9] && verificador2 == cpf[10]){
    alert("válido")
}
else{
    alert("inválido")
}
