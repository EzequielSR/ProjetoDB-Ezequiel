/* 7) Calcule a série de Fibonacci para um número inteiro não negativo
informado pelo usuário. A série de Fibonacci inicia com os
números F0 = 0 e F1 = 1, e cada número posterior equivale à soma
dos dois números anteriores (Fn = Fn-1 + Fn-2). Por exemplo, caso
o usuário informe o número 9, o resultado seria 0, 1, 1, 2, 3, 5,
8, 13, 21, 34. */


function fibonacci(n){
    if(n < 0){
        return "Informe um número inteiro não negativo"
    }
    let series = [0,1]
    for(let i = 2; i <= n; i++){
        series.push(series[i - 1] + series[i - 2])
    }
    return series.slice(0, n+1)
}

const numero = 10;
console.log(fibonacci(numero))