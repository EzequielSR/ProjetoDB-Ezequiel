/* 12) Crie dois vetores de 50 posições com valores inteiros aleatórios,
ordene cada vetor individualmente, e combine os dois vetores
gerando um novo vetor de 100 posições, ordenando esse novo. */

// Resolução:

function gerarVetorAleatorio(tamanho, max) {
    let vetor = []
    for (let i = 0; i < tamanho; i++) {
        vetor.push(Math.floor(Math.random() * max));
    }
    return vetor;
}

function bubbleSort(vetor) {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[i] > vetor[j + 1]) {
                let temp = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = temp
            }
        }
    }
    return vetor
}

let vetor1 = gerarVetorAleatorio(50, 100);
let vetor2 = gerarVetorAleatorio(50, 100);

valor1 = bubbleSort(vetor1)
valor2 = bubbleSort(vetor2)

let combinarVetores = vetor1.concat(vetor2)
combinarVetores = bubbleSort(combinarVetores)

console.log("Vetor 1 ordenado:", vetor1)
console.log("Vetor 2 ordenado:", vetor2)
console.log("Vetor combinado com vetores ordenados:", combinarVetores)
