
//AULA 2

function botaum(){

    document.getElementById("gradicido").innerHTML = "<i>DIO!</i>";

}

function redirecionar(){

    //window.open("https://www.reddit.com/r/funny/comments/7h4q8t/when_you_are_walking_outside_and_see_someone_has/");
    window.location.href = "https://www.reddit.com/r/funny/comments/7h4q8t/when_you_are_walking_outside_and_see_someone_has/";

}

function trocar(elemento){

    elemento.innerHTML = "BAH, né que funciona meu!";

}

function voltar(){

    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

}

function mudancas(elemento){

    alert(`Valor ${elemento.value}`);

}

/*
function soma(n1, n2){

    return n1 + n2;

}

function setReplace(frase, nome, novo_nome){

    return frase.replace(nome, novo_nome);


}

function validarIdade(idade){

    if(idade >= 18){

        var decreto =   `${idade}? Já pode ir a cruzada!`;

    }else{

        var decreto = `${idade}? Ainda tem muito do que ler da palavra de Deus...`;

    }

    return decreto;

}

alert(soma(5, 3));
alert(setReplace("Vai Japão!", "Japão", "Brasil"));
alert(validarIdade(prompt("Qual sua idade?")));
*/

//AULA 1 

/*

var d = new Date();
alert(d.getDay());
alert(d.getMonth());



var count;

for(count = 0; count < 5; count++){

    console.log(count);

}

while(count < 5){

    console.log(count);
    count++;

}


var idade = prompt("Qual a sua idade?");

if(idade <= 18){

    alert('No FBI needed');

}else{

    alert('Run Lolicon!');

} 

var frutas = [{nome: "Maça", cor: 'Vermelha'}, {nome: "Uva", cor: 'Roxa'}, ];
console.log(fruta.nome)

var fruta = {nome: "Maça", cor: 'Vermelha'};
console.log(fruta.nome);

var lista = ['Maçã', 'Pêra', 'Laranja'];
lista.push('Uva');
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" ° "))

var nome =  "Lucas Uchôa"
var idade = 18;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(`${nome} tem ${idade} anos...`);
console.log(nome);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(idade * idade2); */


