const prompt = require("prompt-sync")({ sigint: true });

var carro = {
  preco: 3000,
  portas: 4,
  marca: "Ford",
};

carro.preco = 20000;

console.log(carro.preco);
