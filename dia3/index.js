let num = prompt("Por favor digite seu número:");

// Converte a entrada para um número inteiro
num = parseInt(num);

if (num % 2 === 0) {
    console.log("Olá, o número " + num + " é par.");
} else {
    console.log("Olá, o número " + num + " é ímpar.");
}