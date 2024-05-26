/* Escreva um código que simula um desconto em compras. 
O programa deve receber o valor total da compra e verificar se o valor ultrapassa R$ 100,00. 
Se sim, aplique um desconto de 10% no valor total. 
Imprima o valor final da compra com o desconto aplicado (se houver). */
const prompt = require("prompt-sync")({ sigint: true });

var valorProduto;
var valorCompra = 0;
var valorFinal = 0;
var desconto = 0;

while (valorProduto != 0) {
  valorProduto = parseFloat(prompt("Digite o valor do produto em R$: "));
  valorCompra = valorCompra + valorProduto;
}

if (valorCompra >= 100) {
  desconto = valorCompra * 0.1;
  valorFinal = valorCompra - desconto;
}

console.log(`O valor da compra é: ${valorCompra.toFixed(2)}`);
console.log(`Seu desconto foi de: ${desconto.toFixed(2)}`);
console.log(`O valor total da compra é de: ${valorFinal.toFixed(2)}`);
