// TESTE 1

//Desafio 1 
let line = gets(11,7).split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B;
console.log("X = " + total);
//Desafio 2

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let total = valor1 * valor2; //troquei para a multiplicação de valo1 e valor2
console.log("PROD = " + total);
//Desafio 3

let valor1 = parseInt(gets(25));
let valor2 = parseInt(gets(100));
let valor3 = parseFloat(gets(5.50));
let salary = parseFloat(valor2*valor3).toFixed(2);
console.log("NUMBER = " + valor1);
console.log("SALARY = U$ " + salary); 

//TESTE  2

//Desafio 1
//Crie um programa que leia 6 valores, os quais poderão ser negativos e/ou positivos.
// Em seguida, apresente a quantidade de valores positivos digitados.
let total = 0;
let i = 0;
let valor;
while (i<6)
{
 valor = parseFloat(gets());
 if (valor > 0)
 {
   total = total + 1;
 }
 i = i + 1;
}
console.log(total + " valores positivos");

//Desafio 2
//Crie um programa que leia um número e mostre os números pares
// até esse número, inclusive ele mesmo.
i = 0
let valor;

valor = parseInt(gets())

if (valor > 0 || valor % 2 === 0) {
while (i < valor) {
i = i + 2
if (i > valor) {
break
} else {
console.log(i)
}
}
}
//Desafio 3
//Você deve fazer a leitura de 5 valores inteiros. 
//Em seguida mostre quantos valores informados são pares,
// quantos valores informados são ímpares, quantos valores
// informados são positivos e quantos valores informados são negativos. 
// Considere que o número zero é positivo, mas não pode ser considerado como positivo ou negativo.
let valoresPares = 0;
let valoresImpares = 0;
let valoresPositivos = 0;
let valoresNegativos = 0;

for (var i = 0; i < 5; i++) {
  const valorInformadoPeloUsuario = parseInt(gets());
  if ( valorInformadoPeloUsuario % 2 === 0) {  
    valoresPares++;
  } else {
    valoresImpares++;
  }

  if (valorInformadoPeloUsuario > 0) {
    valoresPositivos++;
  } else if (valorInformadoPeloUsuario < 0) {
    valoresNegativos++;
  }

}
    console.log(`${valoresPares} par(es)`);
    console.log(`${valoresImpares} impar(es)`);
    console.log(`${valoresPositivos} positivo(s)`);
    console.log(`${valoresNegativos} negativo(s)`);

//Desafio 4   
//Faça a leitura de um valor inteiro.
// Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto.
// As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1.
// Na sequência mostre o valor lido e a relação de notas necessárias.
let n = parseInt(gets());
let quantidadeNotas = 0;
let cedulas = [100,50,20,10,5,2,1];

// Função responsável por contar as notas a partir de um valor.
function contaNotas(valor){
  quantidadeNotas = parseInt(n/valor);

  // TODO Subtraia de "n" a "quantidadeNotas" multiplicada por seu respectivo "valor" (parâmetro).
  n -= quantidadeNotas * valor;

  console.log(`${quantidadeNotas} nota(s) de R$ ${valor},00`);
}

console.log(n);

for(let cedula in cedulas){
    contaNotas(cedulas[cedula]);
}

//Desafio 5
//Você deve calcular o consumo médio de um automóvel 
//onde será informada a distância total percorrida (em Km) 
//e o total de combustível consumido (em litros).

let x = parseInt(gets());
let y = parseFloat(gets());

// TODO Realize o cálculo do consumo médio do automóvel.
const consumoMedio = x / y;

console.log(`${consumoMedio.toFixed(3)} km/l`);


