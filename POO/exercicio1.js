/*Crie um objeto com seus dados pessoais  */
const prompt = require("prompt-sync")({ sigint: true });

const pessoa = {
  nome: prompt("Digite o seu nome: "),
  idade: parseInt(prompt("Digite a sua idade: ")),
  sobrenome: prompt("Digite seu sobrenome: "),
};

pessoa.exibeDados = function () {
  return `${this.nome} ${this.sobrenome} possui,  ${this.idade} anos  `;
};

console.log(pessoa.exibeDados());
