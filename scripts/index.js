var nome 
var jogada
var resultjogada
var jogadaCPU
var resultjogadaCPU

function Name() {
 nome = document.getElementById('name-player').value
 document.getElementById('name-1').innerHTML = nome
 console.log(Name)
}

function Play(num) {
 jogada = num
 resultjogada = (jogada)
 console.log(resultjogada)
 jogadaCPU = Math.floor(Math.random() * 3) + 1; ;
 console.log(jogadaCPU)

setTimeout ( function Result (){
if (jogada ==1){
    document.getElementById('Resultplayer').innerHTML = `
    <button onclick="Play('1')" ><img src="Img/Pedra.jpg" alt=""><h2 id="Jogada">Pedra</h2></button>
    <h2> Você escolheu a Pedra </h2>
    `
}
if (jogada ==2){
    document.getElementById('Resultplayer').innerHTML = `
    <button onclick="Play('1')" ><img src="Img/Papel.jpg" alt=""><h2 id="Jogada">Papel</h2></button>
    <h2> Você escolheu a Papel </h2>
    `
}
if (jogada ==3){
    document.getElementById('Resultplayer').innerHTML = `
    <button onclick="Play('1')" ><img src="Img/Tesoura.jpg" alt=""><h2 id="Jogada">Tesoura</h2></button>
    <h2> Você escolheu a Tesoura </h2>
    `
}
if (jogadaCPU  == 1){
    document.getElementById('ResultCPU').innerHTML = `
    <button><img src="Img/Pedra.jpg" alt=""><h2 id="jogadacpu">Pedra</h2></button>
    <h2> CPU escolheu a Pedra </h2>
    `
}
if (jogadaCPU ==2){
    document.getElementById('ResultCPU').innerHTML = `
    <button><img src="Img/Papel.jpg" alt=""><h2 id="jogadacpu">Papel</h2></button>
    <h2> CPU escolheu a Papel </h2>
    `
}
if (jogadaCPU == 3){
    document.getElementById('ResultCPU').innerHTML = `
    <button><img src="Img/Tesoura.jpg" alt=""><h2 id="jogadacpu">Tesoura</h2></button>
    <h2> CPU escolheu a Tesoura </h2>
    `
}
if (jogada == 1 && jogadaCPU ==2){//Se o jogador jogar pedra e o cpu jogar papel
    document.getElementById('Result').innerHTML = ` <h1> CPU venceu </h1>
    ` 
}
if (jogada == 1 && jogadaCPU == 3){//Se jogar pedra e o cpu jogar tesoura
    document.getElementById('Result').innerHTML = ` <h1> Você venceu </h1>
    ` 
}
if (jogada == 2 && jogadaCPU ==1){//Se jogar papel e o CPU jogar pedra
    document.getElementById('Result').innerHTML = ` <h1> Você venceu </h1>
    ` 
}
if (jogada == 2 && jogadaCPU==3){//Se jogar papel e o CPU jogar tesoura
    document.getElementById('Result').innerHTML = ` <h1> CPU venceu </h1>
    ` 
}
if (jogada == 2 && jogadaCPU==1){//Se jogar papel e o CPU jogar pedra
    document.getElementById('Result').innerHTML = ` <h1> Você venceu </h1>
    ` 
}
if (jogada == 3 && jogadaCPU==1){//Se jogar tesoura e o CPU jogar pedra
    document.getElementById('Result').innerHTML = ` <h1> CPU venceu </h1>
    ` 
}
if (jogada == 3 && jogadaCPU==2){//Se jogar tesoura e o CPU jogar papel
    document.getElementById('Result').innerHTML = ` <h1> Você venceu </h1>
    ` 
}
if (jogada == jogadaCPU){//Mesma jogada
    document.getElementById('Result').innerHTML = ` <h1> Deu empate </h1>
    ` 
}






},1000)}

