// Faça um programa que receba uma senha formada de quatro números inteiros, verifique se a senha está correta e, caso não esteja, solicite novamente a senha. Se a senha de entrada for a correta, deverá ser apresentada a mensagem “Senha Correta”, caso contrário, “Senha Incorreta”. 
 
let senha = parseInt(prompt('Digite a sua senha'))
let senhaCorreta = 1234
while(senha != senhaCorreta){
    senha = parseInt(prompt('Senha incorreta\nDigite a senha novamente'))
}