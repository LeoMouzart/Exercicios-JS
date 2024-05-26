/*Semelhante ao exercicio de operações bancárias recrie o código com as operações de saque, 
depósito e saldo porém usando funções para as operaçoes  */
const prompt = require("prompt-sync")({ sigint: true });

var usuario = prompt("Digite seu nome de usúario");
var senha = prompt("Digite sua senha");
let saldo = 0;
var saque = 0;

function validaSenha() {
  if (senha.length < 8) {
    console.log("Verifique a senha digitada");
  } else {
    console.log(`Bem vindo ${usuario}!!!`);
  }
}

function validaSaldo() {
  if (saldo < saque) {
    console.log(
      `${usuario} Não foi possível concluir a operação. Saldo Indisponível`
    );
    let confirmacao = prompt("Deseja realizar um depósito ? ");
    switch (confirmacao) {
      case "s":
        novoSaldo = parseFloat(prompt("Digite um valor de deposito"));
        saldo += novoSaldo;
        console.log(
          `Deposito de ${novoSaldo} realizado com sucesso!!! Saldo: R$${saldo}`
        );
        break;
      case "S":
        novoSaldo = parseFloat(prompt("Digite um valor de deposito"));
        saldo += novoSaldo;
        console.log(
          `Deposito de ${novoSaldo} realizado com sucesso!!! Saldo: R$${saldo}`
        );
        break;
      case "n":
        break;
      // default:
      //     break;
    }
  } else {
    console.log("Saldo confirmado!! Operação realizada com sucesso");
  }
}

function depositoConta() {
  var deposito = parseFloat(prompt("Digite o valor a ser depositado"));
  saldo += deposito;
  console.log(`Depósito de ${deposito} realidado com sucesso!`);
  console.log(`Saldo Atual: ${saldo}`);
}

function saqueConta() {
  saque = parseFloat(prompt(`Digite o valor do saque: `));
  validaSaldo(saldo);
}

function mostraSaldo() {
  console.log(`${usuario}, seu saldo é de: ${saldo.toFixed(2)}`);
}

function operacao() {
  var op = parseInt(
    prompt(
      "Digite a operação desejada: 1 - Saldo .... 2 - Depósito . ... 3 - Saque"
    )
  );

  while (op != 0) {
    switch (op) {
      case 1:
        mostraSaldo();
        break;
      case 2:
        depositoConta();
        break;
      case 3:
        saqueConta();
      case 0:
        console.log("Saindo!!");
        break;
    }
  }
}

while (true) {
  validaSenha();
  operacao();
  break;
}
