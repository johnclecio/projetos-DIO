

function clicou(){
    document.getElementById("agradecimento"). innerHTML  = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("obrigado por clicar");
}
function redirecionar(){
    window.open("https://www.johnmaclima.com/");
    //window.location.href = "https://www.johnmaclima.com/"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por Passa o mouse";
    //alert("Trocar texto")
    elemento.innerHTML = "Obrigado por Passa o mouse";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML ="Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function soma(n1, n2){
    return n1 + n2;
}*/

/*var validar;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
}
var idade = prompt("Qual é sua idade")
validaIdade(idade)
console.log(validar);*/





//var d = new Date();
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());
//alert(d.getSeconds());
//alert(d.getMonth()+1);




/*var count;
for(count=1; count <=5; count++){
    alert(count);
}*/





/*var count = 0;
while (count <= 5){
    console.log(count);
    count ++;
};*/



/*var idade = prompt("qual sua idade: ")
if (idade >= 18){
    alert("maior de idade");
}else 
{
    alert("menor de idade");
}*/


//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva",cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);




//var lista = ["maça", "pêra", "laranja"];
//lista.push('uva');
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));








//var  nome = "John Lima";
//var n1 = 28;
//var n2 = 10;
//var frase = "japão é o melhor time do mundo";
//alert( nome + " tem " + idade + " anos ");
//alert(idade + idade2 );
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.toLowerCase());
