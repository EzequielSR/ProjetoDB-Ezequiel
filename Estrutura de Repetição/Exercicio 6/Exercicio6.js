/*6) Gere 10 números aleatórios entre 0 e 100; mostre todos na tela
(em uma única linha); identifique o menor e o maior deles. */

// Resolução
let numeros = []

for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 101));
}

console.log(`Números: ${numeros.join(" ")} | Menor número: ${Math.min(...numeros)} | Maior Número: ${Math.max(...numeros)}`);