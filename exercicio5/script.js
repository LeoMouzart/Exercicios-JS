/*Desenvolva um simulador de caixa eletrônico que permita ao usuário realizar operações bancárias básicas,
como saque, depósito e consulta de saldo. 
Utilize o switch para direcionar o usuário para a operação desejada 
e utilize estruturas condicionais (if e else) para validar as informações digitadas e realizar as operações bancárias. */
const prompt = require("prompt-sync")({ sigint: true });

var usuario;
var senha;
var operacao;
let saque = 0;
let deposito;
let saldo = 0;
let limite = 200;
let sair = "";

usuario = prompt("Digite o login de usuário: ");
senha = prompt("Digite a sua senha: ");
if (senha.length < 8) {
  console.log(`Olá ${usuario} sua senha está incorreta, reinicie a operação.`);
}

while (senha.length >= 8) {
  operacao = parseInt(
    prompt(
      "Digite a operação: 1 - Saque... 2 - Depósito... 3 - Saldo... 0 - Sair: "
    )
  );

  switch (operacao) {
    case 1:
      saque = parseFloat(prompt("Digite o valor desejado "));
      if (saque > saldo) {
        console.log("Saldo insuficiente");
        let usarLimite = prompt(
          `${usuario} deseja utilizar limite ? Digite S ou N`
        );
        if (usarLimite === "s" || usarLimite === "S") {
          limite = limite - saque;
          console.log(
            `Olá ${usuario} saque no valor de ${saque.toFixed(
              2
            )} realizado com sucesso!!`
          );
          console.log(
            `Saldo Atual: ${saldo.toFixed(
              2
            )} .... Limite atual: ${limite.toFixed(2)} `
          );
          break;
        } else {
          console.log(`Obrigado por utilizar nossos serviços`);
        }
      } else {
        saldo = saldo - saque;
        console.log(
          `Olá ${usuario} saque no valor de ${saque.toFixed(
            2
          )} realizado com sucesso!!`
        );
        console.log(
          `Saldo atual: ${saldo.toFixed(2)} .... Limite atual: ${limite.toFixed(
            2
          )}`
        );
      }
      break;

    case 2:
      deposito = parseFloat(prompt("Digite o valor a ser depositado: "));
      if (deposito < 10.0) {
        console.log(`${usuario} valor abaixo de R$20,00`);
      } else if (deposito === NaN) {
        console.log(`${deposito} não é um valor valido`);
        break;
      } else {
        saldo += deposito;
        console.log(`Deposito de ${deposito} realisado com sucesso`);
        console.log(`${usuario} seu saldo é: ${saldo}`);
        break;
      }
    case 3:
      console.log(`Abaixo segue saldo na conta de ${usuario}: `);
      console.log(`Saldo: ${saldo}`);
      console.log(`Limite: ${limite}`);
      let desejaOperacao = prompt(
        `${usuario}, deseja realizar um saque? S ou N`
      );
      if (desejaOperacao === "S" || "s") {
        saque = parseFloat(prompt("Digite o valor desejado "));
        if (saque > saldo) {
          console.log("Saldo insuficiente");
          let usarLimite = prompt(
            `${usuario} deseja utilizar limite ? Digite S ou N`
          );
          if (usarLimite === "s" || usarLimite === "S") {
            limite = limite - saque;
            console.log(
              `Olá ${usuario} saque no valor de ${saque.toFixed(
                2
              )} realizado com sucesso!!`
            );
            console.log(
              `Saldo Atual: ${saldo.toFixed(
                2
              )} .... Limite atual: ${limite.toFixed(2)} `
            );
            break;
          } else {
            console.log(`Obrigado por utilizar nossos serviços`);
          }
        } else {
          saldo = saldo - saque;
          console.log(
            `Olá ${usuario} saque no valor de ${saque.toFixed(
              2
            )} realizado com sucesso!!`
          );
          console.log(
            `Saldo atual: ${saldo.toFixed(
              2
            )} .... Limite atual: ${limite.toFixed(2)}`
          );
        }
        break;
      }
    case 0:
      break;
    default:
      console.log("Não é uma opção válida, refaça a operação!!!!");
  }
  sair = prompt("Sair do Programa  ? S ou N");
  if (sair === "s" || sair === "S") {
    break;
  }
}
