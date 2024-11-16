/* 19) Implemente um sistema de agenda telefônica. Faça (ao menos)
as interações de adicionar e deletar números. */

// Resolução:

class Contato {
    constructor(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }
}

class AgendaTelefonica {
    constructor() {
        this.contatos = []
    }

    adicionarContato(nome, telefone) {
        const novoContato = new Contato(nome, telefone)
        this.contatos.push(novoContato)
        console.log(`Contato adicionado: ${nome} - ${telefone}`)
    }

    deletarContato(nome) {
        const indice = this.contatos.findIndex(contato => contato.nome === nome)
        if (indice !== -1) {
            const contatoRemovido = this.contatos.splice(indice, 1)[0]
            console.log(`Contato removido: ${contatoRemovido.nome} - ${contatoRemovido.telefone}`)
        } else {
            console.log(`Contato com nome "${nome}" não foi encontrado.`)
        }
    }

    listarContatos() {
        console.log("\n---------- Listas de Contatos ----------")
        if (this.contatos.length === 0) {
            console.log("A agenda está vazia.")
        } else {
            this.contatos.forEach((contato, index) => {
                console.log(`${index + 1}. ${contato.nome} - ${contato.telefone}`)
            })
        }
        console.log("------------------------")
    }
}

// Exemplo de Uso:

const minhaAgenda = new AgendaTelefonica()

minhaAgenda.adicionarContato("Juliana", "1234-5678")
minhaAgenda.adicionarContato("Felipe", "9876-5432")

minhaAgenda.listarContatos()

minhaAgenda.deletarContato("Juliana")

minhaAgenda.deletarContato("Roberta")

minhaAgenda.listarContatos()