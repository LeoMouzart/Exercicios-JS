/*Escreva um código que recebe o nome de uma fruta e utiliza o switch para classificá-la em uma categoria
 (cítrica, tropical, etc.). Imprima a categoria da fruta. */
const prompt = require("prompt-sync")({ sigint: true });

var citrica = [];
var tropical = [];

while (categoria != 0) {
  var fruta = prompt("Digite a fruta: ");
  var categoria = parseInt(prompt("1 - Citrica...  2 - Tropical... 0 - Sair "));

  switch (categoria) {
    case 1:
      citrica.push(fruta);
      break;
    case 2:
      tropical.push(fruta);
      break;
    case 0:
      console.log("Você precionou a tecla de sair.");
      break;
    default:
      console.log("Não é uma categoria válida");
  }
}

console.log(citrica);
console.log(tropical);
