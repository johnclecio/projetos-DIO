let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');


function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
  CURRENT_NUMBER.style.color = 'red';
}

function test() {
	kdowkdpo;
}





var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function increment(){
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
 
}

function decrement(){
  currentNumber = currentNumber - 1 ;
  currentNumberWrapper.innerHTML = currentNumber;
  document.getElementById(currentNumber).style.color="#ffff00";
}

//tipos primitivos

//booleano
var  vDuf = false;
console.log(typeof(vDuf));
//númerico
var number = 1;
console.log(typeof(number));
//string
var nome = 'john';
console.log(typeof(nome));


//function
var funcao = function(){}
console.log(typeof(funcao));
// como declarar
var variavel = 'diana';
variavel = 'martine';
console.log(variavel);

let variavel2 = 'diana';
variavel2 = 'martine'
console.log(variavel2);

const constante = 'diana'
constante = 'john';
console.log(constante);
error

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
  let escopoLocalInterno = 'local';
  console.log(escopoLocalInterno);
}
escopoLocal();


//atribuição
var atribuicao = '0' == 0;

// comparação 
var comparacao = '0' == 0;
console.log(comparacao);

// comparação identica 
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// adicao
var adicao = 1 + 1;
console.log(adicao);
//subtracao
var subtracao = 1 - 1;
console.log(subtracao);
//multiplicacao
var multiplica = 1 * 1;
console.log(multiplica);
//divisao real
var divisao = 6 / 2;
console.log(divisao);
//divisao 
var divisaoR = 5 % 2;
console.log(divisaoR);
//potenciacao
var potencia = 1 ** 10;
console.log(potencia);

