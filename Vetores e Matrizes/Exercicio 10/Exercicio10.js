/* 10) Leia uma matriz quadrada e determine a soma da diagonal
principal. */

// Resolução:

function somaDiagonalPrincipal(matriz){
    let soma = 0
    for(let i = 0; i < matriz.length; i++){
        soma += matriz[i][i]
    }
    return soma
}

// Exemplo de Uso:
const matriz = [
    [1,2,3],
    [3,4,5],
    [5,6,7]
]

console.log(somaDiagonalPrincipal(matriz))