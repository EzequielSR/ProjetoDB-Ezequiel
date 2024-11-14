// 8) Leia um número até que o usuário digite 10

// Resolução:

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function pergunta(){
    return new Promise((resolve) =>{
        rl.question("Digite um número: ", (input) =>{
            resolve(parseInt(input))
        })
    })
}

async function lerNumero(){
    let numero

    do{
            numero = await pergunta()
            if(numero === 10){
                console.log("-------------------------")
                console.log("Você digitou 10. O programa foi finalizado. Parabéns!!!")
                rl.close()
            }else{
                console.log("-------------------------")
                console.log(`Você digitou ${numero}`)
                console.log("-------------------------")
            }

    }while (numero !== 10)
}

lerNumero()