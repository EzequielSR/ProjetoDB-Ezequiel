/* 11) Ordene um vetor de 100 números inteiros gerados
aleatoriamente. (Pesquisar sobre Bubble Sort) */

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

// Teste:

let vetor = gerarVetorAleatorio(100, 100);
console.log("Vetor original:", vetor)
vetor = bubbleSort(vetor);
console.log("Vetor ordenado:", vetor)