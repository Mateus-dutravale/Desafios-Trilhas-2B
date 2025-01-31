// Esse arquivo é a resolução do Aluno: Mateus Dutra Vale para o Desafio 1 do trilhas 2B.
// O Arquivo segue com o comentario da pergunta e a solução mais abaixo. 

const prompt = require("prompt-sync")(); // importei modulos do node para poder receber inputs diretos do teclado no terminal do vscode 

// 1. Crie uma variável chamada nome e atribua seu nome a ela. Em seguida, exiba o valor dessa variável.
var nome = "Mateus Dutra Vale";
console.log(nome);

// 2. Crie duas variáveis: uma chamada idade e outra chamada altura. Atribua a idade o valor 25 e a altura o valor 1.75. Exiba ambos os valores.

var idade = 25;
var altura = 1.75;

console.log("idade: ", idade, "\naltura:", altura);

// 3. Crie uma variável chamada preco com o valor 50 e uma variavel desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.

var preco = 50;
var desconto = 0.2;
var precoAjustado = preco - preco*desconto;
console.log("Preco com desconto aplicado: R$", precoAjustado);

// 4. Crie uma variável chamada temperatura e atribua o valor 30. Se a temperatura for maior que 25, exiba a mensagem "Está calor!". Caso contrário, exiba "Está fresco!".

var temperatura = 30;
var situacaoDoClima = temperatura > 25 ? "Está calor!" : "Está fresco!";
console.log(situacaoDoClima);

// 5. Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade".

var idade2 = Math.random()*76 + 1;  // espectativa de vida no brasil.
if (idade2 < 18){
    console.log("Você é menor de idade");
} else {
    console.log("Você é maior de idade");
}

// 6. Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".

var nota = Math.random()*10+1;

if (nota >= 7 ){
    console.log("Aprovado");
} else if (nota >= 5 && nota <= 6){      
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// 7. Crie duas variáveis, numero1 e numero2, e atribua valores a elas. Verifique se os dois números são iguais e, caso sejam, exiba "Os números são iguais". Caso contrário, exiba "Os números são diferentes".

var numero1 = 3, numero2 = 3;

if (numero1 == numero2){
    console.log("Os números são iguais");
} else {
    console.log("Os números são diferentes");
}

// 8. Crie uma variável chamada nome e uma variável chamada idade. Exiba a mensagem "Olá, meu nome é [nome] e eu tenho [idade] anos", utilizando concatenação.

var nome2 = "Mateus Dutra";
var idade3 = 22;

//console.log("Olá, meu nome é " + nome2 + " e eu tenho " + idade3 + " anos");
console.log(`Olá, meu nome é ${nome2} e eu tenho ${idade3} anos`)

// 9. Crie um loop que imprima os números de 1 a 10 na tela.

for( var i = 1; i <= 10; i++){
    console.log(i);
}

// 10. Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.

var numeroCerto = 0;
while (true){

    numeroCerto = prompt("Digite o numero: ");

    if (numeroCerto == 5){
        console.log("você acertou o número");
        break;
    } else if (numeroCerto < 5 ){
        console.log("chute um número mais alto");
    } else {
        console.log("Chute um número mais baixo");
    }
}

// 11. Crie um loop que imprima a tabuada do número 7, de 1 a 10.

var numSete = 7;
for (var i = 1; i <=10; i++){
    console.log(`7 X ${i} = ${numSete*i}`);
}

// 12. Crie um loop que exiba todos os números pares de 0 a 20.

for (var i = 1; i <=20; i++){
    if(i%2 ==0){
        console.log(i);
    }
}

// 13. Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.

var raio = 3;
function areaDaCircuferencia(r){
    return Math.PI*(Math.pow(r,2));
}
area = areaDaCircuferencia(raio);
console.log(area);

// 14. Comente seu código explicando o que cada parte faz. Crie um programa simples que calcule a soma de dois números e imprima o resultado.

var num1 = 3, num2 = 4, resultadoSoma = 0; // inicialização dos parametros

function soma (a, b){  // uma função simples que recebe duas variaveis e retorna a soma delas
    return a + b;
}

resultadoSoma = soma(num1, num2); // resultadoSoma recebe o armazena o valor da soma dos dois numeros

console.log(resultadoSoma); // mostra o resultado no console do navegador

// 15. Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções:
// x = 10
// y = 20
// z = x+y
// console.log(z)

var primeiroNumero = 10, segundoNumero = 20;

function somaNumeros ( primeiro_numero, segundo_numero){
    return primeiroNumero + segundoNumero;
}

var resultadoDaSoma = somaNumeros(primeiroNumero, segundoNumero);

console.log(resultadoDaSoma);