/*Crie um jogo de adivinhação de número. 
O programa deve gerar um número aleatório entre 1 e 100 e permitir que o usuário tente adivinhá-lo. 
Utilize o if para verificar se o palpite do usuário está correto, menor ou maior que o número secreto. 
Imprima mensagens informativas para direcionar o usuário e finalizar o jogo quando o número secreto for adivinhado. */
const prompt = require("prompt-sync")({ sigint: true });

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numero = gerarNumeroAleatorio(0, 15);
console.log(numero);
