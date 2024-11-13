function fibonacciAteNumero(limite){
    let fibonacci = [0,1]

    while(true){
        let proximoNumero = fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2]
        if(proximoNumero > limite) break;
        fibonacci.push(proximoNumero)
    }

    console.log(`Série de Fibonacci até ${limite}: ${fibonacci.join(", ")}`)
}

const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Digite um número para calcular a série de Fibonacci até esse número: ", (numero)=>{

    numero= parseInt(numero)
    if(isNaN(numero) || numero < 0){
        console.log("Por favor, digite um número válido.")
    }else{
        fibonacciAteNumero(numero)
    }
    rl.close()
})