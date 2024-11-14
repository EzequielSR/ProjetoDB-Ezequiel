/* 15) Crie uma classe Calculadora que faça as operações de soma,
subtração, multiplicação, divisão e potenciação. Cada operação
deve ser um método e todos os métodos devem ser estáticos.
Para fazer a escolha das operações use como base o exercício 4 */

// Resolução:

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Calculadora {
    static somar(a, b) {
        return a + b;
    }

    static subtrair(a, b) {
        return a - b;
    }

    static multiplicar(a, b) {
        return a * b
    }

    static dividir(a, b) {
        if (b === 0) {
            console.log("Erro: Não é possível dividir por zero.")
            return undefined
        }
        return a / b;
    }

    static isValidNumber(input) {
        const number = parseFloat(input)
        return !isNaN(number)
    }

    static menu() {
        rl.question("Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n Digite o número da operação: ", (escolha) => {
            if (!["1", "2", "3", "4"].includes(escolha)) {
                console.log("-------------------------------")
                console.log("Opção inválida. Escolha uma opção de 1 a 4.")
                console.log("-------------------------------")
                return Calculadora.menu()
            }
            Calculadora.promptNumbers(parseInt(escolha))
        })
    }

    static promptNumbers(escolha) {
        rl.question("Digite o primeiro número: ", (num1) => {
            if (!Calculadora.isValidNumber(num1)) {
                console.log("Entrada inválida. Por favor, insira um número válido.")
                return Calculadora.promptNumbers(escolha)
            }

            rl.question("Digite o segundo número: ", (num2) => {
                if (!Calculadora.isValidNumber(num2)) {
                    console.log("Entrada inválida. Por favor, insira um número válido.")
                    return Calculadora.promptNumbers(escolha)
                }
                const n1 = parseFloat(num1)
                const n2 = parseFloat(num2)
                let resultado

                switch (escolha) {
                    case 1:
                        resultado = Calculadora.somar(n1, n2)
                        console.log(`Resultado da soma: ${n1} + ${n2} = ${resultado}`)
                        break
                    case 2:
                        resultado = Calculadora.subtrair(n1, n2)
                        console.log(`Resultado da subtração: ${n1} - ${n2} = ${resultado}`)
                        break
                    case 3:
                        resultado = Calculadora.multiplicar(n1, n2)
                        console.log(`Resultado da multiplicação: ${n1} * ${n2} = ${resultado}`)
                        break
                    case 4:
                        resultado = Calculadora.dividir(n1, n2)
                        if (resultado !== undefined) {
                            console.log(`Resultado da divisão: ${n1} / ${n2} = ${resultado}`)
                            break
                        }
                        break
                    
                }
                rl.close()
            })
        })
    }
}

Calculadora.menu()