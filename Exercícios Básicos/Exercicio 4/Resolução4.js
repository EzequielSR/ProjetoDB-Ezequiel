// USAR SWITCH-CASE
/* 4) Implemente o programa da calculadora utilizando uma instrução
switch-case para determinar a operação que deve ser executada,
conforme o usuário escolheu no menu de opções. */

// Resolução:

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function Calculadora() {
    console.log("Escolha uma operação:")
    console.log("1- Adição (+)")
    console.log("2- Subtração (-)")
    console.log("3- Multiplicação (*)")
    console.log("4- Divisão (/)")

    rl.question("Digite o número da operação: ", (operacao) => {
        if (![1, 2, 3, 4].includes(parseInt(operacao))) {
            console.log("---------------------------------")
            console.log("Operação inválida")
            console.log("---------------------------------")
            rl.close()
            return
        }

        rl.question("Digite o primeiro número: ", (numero1) => {
            rl.question("Digite o segundo número: ", (numero2) => {
                const num1 = parseFloat(numero1)
                const num2 = parseFloat(numero2)
                let resultado

                switch (parseInt(operacao)) {
                    case 1:
                        resultado = num1 + num2
                        console.log(`Resultado da adição: ${resultado}`)
                        break
                    case 2:
                        resultado = num1 - num2
                        console.log(`Resultado da subtração: ${resultado}`)
                        break
                    case 3:
                        resultado = num1 * num2
                        console.log(`Resultado da multiplicação: ${resultado}`)
                        break
                    case 4:
                        if (num2 !== 0) {
                            resultado = num1 / num2
                            console.log(`Resultado da divisão: ${resultado}`)
                        } else {
                            console.log("Erro: Não é possível dividir numero por zero")
                        }
                        break
                    default:
                        console.log("Operação inválida!")
                }
                rl.close()
            })
        })
    })
}

Calculadora()