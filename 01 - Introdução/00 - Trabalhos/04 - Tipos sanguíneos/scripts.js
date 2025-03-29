let bancoDeSangue = []
let id = 0
button.addEventListener("click", function () {
    let usuario = prompt('Digite o seu nome').toUpperCase()
    while (usuario.length === 0) {
        usuario = (prompt('Digite um nome válido'))
    }
    let idade = 0
    while (true) {
        idade = parseInt(prompt('Digite a sua idade'))
        if (idade >= 16 && idade <= 64) {
            break
        }
    }
    let sangue = 0
    while (true) {
        sangue = (prompt('Digite o seu tipo sanguíneo')).toUpperCase()
        if (sangue === "A" || sangue === "B" || sangue === "O" || sangue === "AB") {
            break
        }

    }
    let fatorRH = 0
    while (true) {
        fatorRH = prompt('Digite se o sangue é positivo ou negativo\n+ ou -')
        if (fatorRH === "+" || fatorRH === "-") {
            break
        }

    }
    let quantidade = 0
    while (true) {
        quantidade = parseFloat(prompt('Digite a quantidade doada de sangue(ml)'))
        if (quantidade > 0 && quantidade < 2000) {
            break
        }
    }
    id+=1
    alert(`banco de sangue:\nNúmero de identificação: ${id}\nNome: ${usuario}\nIdade: ${idade}\nTipo Sanguíneo: ${sangue}\nFator RH: ${fatorRH}\nquantidade doada: ${quantidade.toFixed(2)}ml`)
    bancoDeSangue.push([id,usuario, idade, sangue, fatorRH, quantidade])
    console.log(bancoDeSangue)
}
)
function doar(){
    while(true){
    id = parseInt(prompt(`insira o seu id`))
        if(id>0){
            break
        }
    }

    sangue = bancoDeSangue.findIndex(id)
    fatorRH = bancoDeSangue
    if(sangue ==="A" && fatorRH === "+"){
        alert(`Sangue A+ pode doar para`)
    }
    else if(sangue ==="A" && fatorRH === "-"){
        alert(`pode doar para B+,AB+`)
    }
    else if(sangue ==="AB" && fatorRH === "+"){
        alert(`pode doar para `)
    }
    else if(sangue ==="AB" && fatorRH === "-"){
        alert(`pode doar para `)
    }
    else if(sangue ==="B" && fatorRH === "+"){
        alert(`pode doar para B e AB, mas só recebe de B+ e AB+`)
    }
    else if(sangue ==="B" && fatorRH === "-"){
        alert(`pode doar para B e AB, mas só recebe de B e AB`)
    }
    else if(sangue ==="O" && fatorRH === "+"){
        alert(`Pode doar para Todos os tipos postivos e só recebe de O`)
    }
    else if(sangue ==="O" && fatorRH === "-"){
        alert(`Pode doar para todos, Mas só recebe de O-`)
    }
}