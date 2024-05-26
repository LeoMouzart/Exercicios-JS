/* Verificação de Idade: Escreva um código que verifica se um usuário é maior de idade (18 anos).
 Utilize o if para verificar a idade e imprima uma mensagem
  informando se o usuário é maior de idade ou não. */

let usuario = prompt("Digite seu nome");
let idade = prompt("Digite sua idade");

if (idade < 18) {
  alert(
    `Olá ${usuario} notamos que você é menor de idade, infelizmente não poderá prosseguir com a operação`
  );
} else {
  alert(`Seja bem vindo(a) ${usuario} vamos prosseguir com a operação?`);
}
