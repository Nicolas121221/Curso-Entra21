// Crie um jogo de Pedra, Papel e Tesoura.  Precisa criar a função de transformar o input em Pedra, papel ou tesoura,e criar uma função que sorteia aleatoriamente o que o adversário irá escolher (usar random). Ao final, uma outra função deverá dizer quem ganhou e quem perdeu
let userInput = 1
let lastinput = 0;
function transformInput(input, lastinput) {
    input = parseInt(input)
    if(lastinput === input)
    if (input === 1) {
        return "rock"
    }
    else if (input === 2) {
        return "paper"
    }
    else if (input === 3) {
        return "scissors"
    }
}
function generateNum() {
    let generator = Math.ceil(Math.random() * 4)
    if (generator === 4) {
        return 3
    }
    else {
        return generator
    }
}

function analiseInput(input) {
    let userPlay = transformInput(input)
    let aiScore = transformInput(generateNum())
    if (userPlay === aiScore) {
        return "tie"
    }
    else if (userPlay === "rock" && aiScore === "scissors" || userPlay === "paper" && aiScore === "rock" || userPlay === "scissors" && aiScore === "paper") {
        return "you win"
    }
    else {
        return "You Lose"
    }
}
function scoreCount(userScore, aiScore, roundResult){
    if(roundResult === 'You win'){
        userScore++
    }
    else if(roundResult === "You Lose"){
        aiScore++
    }
    if(userScore = 3){
        return "you win"
    }
    else if(aiScore = 3 ){
        return "you Lose"
    }

    return(userScore,aiScore)
}


