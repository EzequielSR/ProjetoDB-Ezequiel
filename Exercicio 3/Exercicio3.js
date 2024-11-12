/* 3) Implemente um jogo Jokenpo (Pedra, papel ou tesoura). Será o
jogador contra a máquina. O código tem que gerar as posições
aleatoriamente e comparar com o que escolhemos. */

// Resolução:

function Jokenpo(escolhaJogador) {
    const opcoes = ["pedra", "papel", "tesoura"]

    const escolhaDaMaquina = opcoes[Math.floor(Math.random() * opcoes.length)]

    console.log(`Você escolheu: ${escolhaJogador}`)
    console.log(`A máquina escolheu: ${escolhaDaMaquina}`)

    if (escolhaJogador === escolhaDaMaquina) {
        return "Empate!"
    } else if (
        (escolhaJogador === "pedra" && escolhaDaMaquina === "tesoura") ||
        (escolhaJogador === "papel" && escolhaDaMaquina === "pedra") ||
        (escolhaJogador === "tesoura" && escolhaDaMaquina === "papel")
    ) {
        return "Você ganhou!"
    } else {
        return "Você perdeu..."
    }
}

// Teste do Jokenpo
console.log(Jokenpo("tesoura"))