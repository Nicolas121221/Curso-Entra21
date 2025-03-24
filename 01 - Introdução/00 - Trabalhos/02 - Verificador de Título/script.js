// Obtem o Título
let titulo = prompt('Digite o Título')
for(;titulo.length!=12;){
    titulo = prompt('Digite o Título novamente')
}
get
// Calculo o Primeiro Dígito
let armazenamento = 0
for(i=0;i<=7;i++){
    armazenamento+=titulo[i]*(2+i)
}
let verificador1 = armazenamento%11
if(verificador1>9){
    verificador1=0
}

// Calculo o Segundo Digito
armazenamento = 0
for(i=0;i<=2;i++){
    armazenamento+=titulo[8+i]*(7+i)
}
let verificador2 = armazenamento%11;
if(verificador2>9){
    verificador2=0
}

// Verifica o Título
if(parseInt(verificador1) == titulo[10] && parseInt(verificador2) == titulo[11]){
    alert('válido')
}
else{
    alert('inválido')
}