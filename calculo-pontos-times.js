var vitoria = 3
var empate = 1
var derrota = 0

var timeA = 0  
var timeB = 0 
var timeC = 0 
var timeD = 0 

timeA +=derrota
timeB +=vitoria

timeC += empate
timeD += empate

timeB += vitoria
timeC += derrota

timeD += derrota
timeA += vitoria

timeA += empate
timeC += empate

timeD += vitoria
timeB += derrota

console.log("Exercício 5: ");
console.log(`A pontuação do TIME A foi de ${timeA}.`);
console.log(`A pontuação do TIME B foi de ${timeB}.`);
console.log(`A pontuação do TIME C foi de ${timeC}.`);
console.log(`A pontuação do TIME D foi de ${timeD}.`);
