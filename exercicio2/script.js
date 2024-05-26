/* Calculadora Simples: 
Crie uma calculadora simples que permita ao usuário escolher uma operação matemática 
(+, -, *, /) e digitar dois números. 
Utilize o case para verificar a operação escolhida e realize a operação matemática com os números digitados. 
Imprima o resultado da operação. */
const prompt = require("prompt-sync")({ sigint: true });

let resultado = 0;
let usuario = prompt("Digite seu nome de usúario: ");
console.log(
  `Olá ${usuario}!! vamos brincar de cálculo ? Digite uma das opções a seguir para realizar uma das operações básicas:`
);

let operacao = parseInt(
  prompt(
    "Digite 1 - Soma... Digite 2 - Subtração... Digite 3 - Multiplicação ... Digite 4 - Divisão... Digite 0 - Sair   "
  )
);

switch (operacao) {
  case 1:
    var num1 = parseInt(prompt("Digite um número: "));
    var num2 = parseInt(prompt("Digite um número: "));
    resultado = num1 + num2;
    console.log(`${num1} + ${num2} = ${resultado}`);
    break;
  case 2:
    var num1 = parseInt(prompt("Digite um número: "));
    var num2 = parseInt(prompt("Digite um número: "));
    resultado = num1 - num2;
    console.log(`${num1} - ${num2} = ${resultado}`);
    break;
  case 3:
    var num1 = parseInt(prompt("Digite um número: "));
    var num2 = parseInt(prompt("Digite um número: "));
    resultado = num1 * num2;
    console.log(`${num1} * ${num2} = ${resultado}`);
    break;
  case 4:
    var num1 = parseInt(prompt("Digite um número: "));
    var num2 = parseInt(prompt("Digite um número: "));
    resultado = num1 / num2;
    console.log(`${num1} / ${num2} = ${resultado}`);
    break;
  case 0:
    console.log("Você optou por sair do programa!! Obrigado!!");
    break;
  default:
    console.log("Opção invalida, reinicie o jogo");
}

console.log(`${usuario} obrigado por utilizar nossos serviços`);
