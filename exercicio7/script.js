/* Crie uma função que calcule o perimetro do quadrado. Lembrando que calculo de perimetro é a some dos quatro lados*/
const prompt = require("prompt-sync")({ sigint: true });
function calculaPerimetro() {
  let lado1 = parseFloat(prompt("Digite o lado 1"));
  let lado2 = lado1;
  let lado3 = lado1;
  let lado4 = lado1;

  return `Perímetro = ${lado1 + lado2 + lado3 + lado4}`;
}

console.log(calculaPerimetro());
