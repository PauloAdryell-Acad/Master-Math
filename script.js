var modos = document.querySelectorAll(".modo")
var pontuacoes = {acertos: 0, erros: 0, pontos: 0}
var resultDiv;
var Sin;
var funcoes = [gameAdicao,gameSubtracao,gameMultiplicacao,gameDivisao]
var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")
var s = document.getElementById("sinal")
var altA = document.getElementById("altA")
var altB = document.getElementById("altB")
var limpa = document.getElementById("limpar")
limpa.addEventListener("click", limpar)
for(let i = 0; i<modos.length;i++){
  modos[i].addEventListener("click", funcoes[i])
}
function randomNumbers(qtddParcelas, multi){
  var parcelas = []
  for (let i = 0;i<qtddParcelas;i++){
    parcelas.push(Math.round(Math.random()*multi))
  }
  return parcelas
  console.log(parcelas)
}

function add_dados(r){
  if(r == 0){
    pontuacoes.erros += 1
    pontuacoes.pontos -= 10
  }
  else if(r == 1){
    pontuacoes.acertos += 1
    pontuacoes.pontos += 10
  }
  var acertos = document.getElementById("acertos")
  var erros = document.getElementById("erros")
  var pontos = document.getElementById("pontos")
  acertos.innerHTML = ""
  erros.innerHTML = ""
  pontos.innerHTML = ""
  acertos.appendChild(document.createTextNode(pontuacoes.acertos))
  erros.appendChild(document.createTextNode(pontuacoes.erros))
  pontos.appendChild(document.createTextNode(pontuacoes.pontos))
  console.log(pontuacoes)
  limpar()
  
  if(pontuacoes.pontos == -10){
    pontuacoes.acertos = 0
    pontuacoes.erros = 0
    pontuacoes.pontos = 0
    acertos.innerHTML = ""
    erros.innerHTML = ""
    pontos.innerHTML = ""
    alert("you lose")
  }
  
  else if(pontuacoes.pontos == 50){
    alert("you're good")
  }
  
  else if(pontuacoes.pontos == 100){
    pontuacoes.acertos = 0
    pontuacoes.erros = 0
    pontuacoed.pontos = 0
    alert("You win")
  }
} 

function verifica_acerto(el){
  if(Sin == "+"){
    if(parseFloat(p1.innerHTML) + parseFloat(p2.innerHTML) == parseFloat(el.innerHTML)){
      add_dados(1)
      el.style.backgroundColor = "green"
      setInterval(function (){
        el.style.backgroundColor = "white"
      },2000)
    }
    
    else if(parseFloat(p1.innerHTML) + parseFloat(p2.innerHTML) != parseFloat(el.innerHTML)){
      add_dados(0)
      el.style.backgroundColor = "red"
      setInterval(function() {
        el.style.backgroundColor = "white"
      }, 2000)
    }
    
  }
  
  else if(Sin == "-"){
    if(parseFloat(p1.innerHTML) - parseFloat(p2.innerHTML) == parseFloat(el.innerHTML)){
      add_dados(1)
      el.style.backgroundColor = "green"
      setInterval(function (){
        el.style.backgroundColor = "white"
      },2000)
    }
    
    else if(parseFloat(p1.innerHTML) - parseFloat(p2.innerHTML) != parseFloat(el.innerHTML)){
      add_dados(0)
      el.style.backgroundColor = "red"
      setInterval(function() {
        el.style.backgroundColor = "white"
      }, 2000)
    }
    
  }
  
  else if (Sin == "*") {
    if (parseFloat(p1.innerHTML) * parseFloat(p2.innerHTML) == parseFloat(el.innerHTML)) {
      add_dados(1)
      el.style.backgroundColor = "green"
      setInterval(function() {
        el.style.backgroundColor = "white"
      }, 2000)
    }
    
    else if (parseFloat(p1.innerHTML) * parseFloat(p2.innerHTML) != parseFloat(el.innerHTML)) {
      add_dados(0)
      el.style.backgroundColor = "red"
      setInterval(function() {
        el.style.backgroundColor = "white"
      }, 2000)
    }
  
  }

  
  else if (Sin == "/") {
    var par1 = p1.innerHTML
    var par2 = p2.innerHTML
    var r = resultDiv;
    console.log(resultDiv)
    console.log(par1)
    console.log(par2)
    if (parseFloat(par1) / parseFloat(par2) === r) {
      console.log("caiu na resultado")
      add_dados(1)
      el.style.backgroundColor = "green"
      setInterval(function() {
        el.style.backgroundColor = "white"
      }, 2000)
    }
    
    else if (parseFloat(par1) / parseFloat(par2) !== r) {
      console.log("nao caiu na ig")
      add_dados(0)
      el.style.backgroundColor = "red"
      setInterval(function() {
        el.style.backgroundColor = "white"
      }, 2000)
    }
  }
}

function addElements(sinal){
 var rn = randomNumbers(2,100)
 var resultado;
 var alternativas;
 if (sinal == "*") {
   resultado = Math.round(parseFloat(rn[0] * rn[1]))
   alternativas = [resultado, resultado * 2]
 }
 
 else if(sinal == "/"){
   resultDiv = parseFloat(rn[0]) / parseFloat(rn[1])
   resultado = resultDiv.toFixed(2)
   alternativas = [resultado, (resultado * 1.5)]
 }
 
 else if(sinal == "-"){
   resultado = parseFloat(rn[0] - rn[1])
   alternativas = [resultado, resultado - 10]
 }
 
 else if(sinal == "+"){
   resultado = parseFloat(rn[0] + rn[1])
   alternativas = [resultado, resultado + 10]
 }
 
 shuffle(alternativas)
 p1.appendChild(document.createTextNode(rn[0]))
 s.appendChild(document.createTextNode(sinal))
 p2.appendChild(document.createTextNode(rn[1]))
 
 altA.appendChild(document.createTextNode(alternativas[0]))
 altB.appendChild(document.createTextNode(alternativas[1]))
}
altA.setAttribute("onclick","verifica_acerto(this)")
altB.setAttribute("onclick","verifica_acerto(this)")
function gameAdicao(){
  Sin = "+"
  if(p1.innerText != ""){
    limpar()
  }
  addElements(Sin)
}

function gameSubtracao(){
  Sin = "-"
  if(p1.innerText != ""){
    limpar()
  }
  addElements(Sin)
}

function gameMultiplicacao(){
  Sin = "*"
  if (p1.innerText != "") {
    limpar()
  }
  addElements(Sin)
}

function gameDivisao(){
  Sin = "/"
  if (p1.innerText != "") {
    limpar()
  }
  addElements(Sin)
}


function limpar(){
  p1.innerHTML = ""
  p2.innerHTML = ""
  s.innerHTML = ""
  altA.innerHTML = ""
  altB.innerHTML = ""
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}