/* 17) Faça um programa para representar a árvore genealógica de
uma família. Para tal crie uma classe Pessoa que permita indicar
além de nome e idade, o pai e a mãe. Tenha em mente que pai e
mãe também são do tipo Pessoa. */

// Resolução:

class Pessoa {
    constructor(nome,idade,pai= null, mae = null) {
        this.nome = nome
        this.idade = idade
        this.pai = pai
        this.mae = mae
    }

    exibirDetalhes(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
        console.log(`Pai: ${this.pai ? this.pai.nome : "Desconhecido"}`)
        console.log(`Mãe: ${this.mae ? this.mae.nome : "Desconhecida"}`)
    }
}

// Exemplo de Uso:

const avoPaterno = new Pessoa("Rodolfo", 76)
const avoMaterna = new Pessoa("Maria", 70)

const pai = new Pessoa("Roberto", 40, avoPaterno)
const mae = new Pessoa("Eduarda", 35,null, avoMaterna)

const filho = new Pessoa("Pedro", 17, pai, mae)

console.log("Detalhes do Filho:")
filho.exibirDetalhes()

console.log("\nDetalhes do Pai:")
filho.pai.exibirDetalhes()

console.log("\nDetalhes da Mãe:")
filho.mae.exibirDetalhes()