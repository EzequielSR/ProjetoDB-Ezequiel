/* 14) Leia do usuário o tempo em segundos e escreva em horas,
minutos e segundos. Utilize cinco métodos, para a leitura e escrita
de dados e para obtenção de horas, minutos e segundos a partir
do tempo em segundos.
Ex: 7023 segundos equivalem a 1h57min3seg */

// Resolução:
function lerTempoSegundos() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise((resolve) => {
        rl.question("Digite o tempo em segundos: ", (segundos) => {
            resolve(parseInt(segundos))
            rl.close()
        })
    })
}
function obterHoras(segundos){
    return Math.floor(segundos / 3600)
}

function obterMinutos(segundos){
    return Math.floor((segundos % 3600) / 60)
}

function obterSegundos(segundos){
    return segundos % 60
}

function exibirResultado(horas,minutos,segundos){
    console.log(`${horas} hr ${minutos} min ${segundos} seg`)
}

async function converterTempo(){
    let tempoSegundos = await lerTempoSegundos()
    let horas = obterHoras(tempoSegundos)
    let minutos = obterMinutos(tempoSegundos)
    let segundos = obterSegundos(tempoSegundos)
    exibirResultado(horas, minutos, segundos)
}

converterTempo()