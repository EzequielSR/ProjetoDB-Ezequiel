// PROVA

/* 20) O projeto SuperMercadoProva simula o sistema de
gerenciamento de vendas de um supermercado, com controle de
estoque, verificação da existência produtos escolhidos no pedido
e demais funcionalidades descritas no diagrama de classes do
mesmo. A prova consiste na resolução de três tarefas, são elas:

a. Corrigir o bug. (fácil)
b. Desenvolver um método onde receba um valor e retorne o
troco. (médio)
c. Desenvolver um método onde recebe o valor do troco e
calcule a menor quantidade de notas. (difícil) */

// Resolução:

const readline = require('readline');

class Produto{
    constructor(id,nome,preco,quantidadeEmEstoque){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    reduzirEstoque(quantidade){
        if(quantidade <= this.quantidadeEmEstoque){
            this.quantidadeEmEstoque -= quantidade
            return true
        }else{
            return false
        }
    }

    exibirDetalhes(){
        console.log(`Produto: ${this.nome} | Preço: R$${this.preco.toFixed(2)} | Em estoque: ${this.quantidadeEmEstoque}`)
    }
}

class EStoque{
    constructor() {
        this.listaDeProdutos = []
        this.inicializarEstoque()
    }

    inicializarEstoque(){
        this.listaDeProdutos.push(new Produto(1, "Arroz", 5.50, 50))
        this.listaDeProdutos.push(new Produto(2, "Feijão", 4.75, 30))
        this.listaDeProdutos.push(new Produto(3, "Açúcar", 3.00, 20))
    }

    encontrarProdutoPeloId(id){
        return this.listaDeProdutos.find(produto => produto.id === id) || null
    }

    mostrarEstoque(){
        console.log("---------- Estoque ----------")
        this.listaDeProdutos.forEach(produto => produto.exibirDetalhes())
        console.log("-----------------------------")
    }
}

class Item{
    constructor(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.valorDoItem = produto.preco * quantidade
    }

    exibirDetalhes(){
        console.log(`${this.produto.nome} | Quantidade: ${this.quantidade} | Valor do Item: R$${this.valorDoItem.toFixed(2)}`)
    }
}

class Pedido{
    constructor() {
        this.listaDeItens = []
        this.valorTotalDoPedido = 0
    }

    adicionarItem(produto,quantidade){
        if(produto.reduzirEstoque(quantidade)){
            const item = new Item(produto,quantidade)
            this.listaDeItens.push(item)
            this.valorTotalDoPedido += item.valorDoItem
            console.log("\n✅ Produto adicionado com sucesso!")
            return true
        }else{
            console.log(`❌ Quantidade insuficiente em estoque para o produto: ${produto.nome}`)
            return false
        }
    }

    exibirPedido(){
        console.log("---------- Pedido ----------")
        this.listaDeItens.forEach(item => item.exibirDetalhes())
        console.log(`\n🛒 Valor Total do Pedido: R$${this.valorTotalDoPedido.toFixed(2)}`)
        console.log("----------------------------")
    }

    calcularTroco(valorPago){
        if(valorPago < this.valorTotalDoPedido){
            console.log("\n❌ Valor insuficiente para completar o pedido.")
            return 0
        }
        return valorPago - this.valorTotalDoPedido
    }

    calcularMenorQuantidadeDeNotas(troco){
        const notas = [100,50,20,10,5,2,1]
        const quantidadeDeNotas = new Array(notas.length).fill(0)

        let valorEmInteiro = Math.floor(troco)

        for (let i = 0; i < notas.length; i++) {
            if(valorEmInteiro >= notas[i]){
                quantidadeDeNotas[i] = Math.floor(valorEmInteiro / notas[i])
                valorEmInteiro = valorEmInteiro % notas[i]
            }
        }

        console.log(`\n💵 Troco: R$${troco.toFixed(2)}`)
        notas.forEach((nota,i) => {
            if(quantidadeDeNotas[i] > 0){
                console.log(`Nota de R$${nota}: ${quantidadeDeNotas[i]}`)
            }
        })
    }
}

class SuperMercadoProva {
    constructor() {
        this.estoque = new EStoque()
        this.pedido = new Pedido()
    }
    iniciar(){
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        const menu = () =>{
            console.log("\n========== MENU ==========")
            console.log("1. Mostrar Estoque")
            console.log("2. Adicionar Produto ao Pedido")
            console.log("3. Exibir Pedido")
            console.log("4. Finalizar Pedido e Calcular Troco")
            console.log("5. Sair")
            console.log("============================")
            rl.question("Escolha uma opção: ", opcao =>{
                switch (parseInt(opcao)){
                    case 1:
                        this.estoque.mostrarEstoque()
                        menu()
                        break
                    case 2:
                        rl.question("\nDigite o ID do produto: ", id => {
                            const produto = this.estoque.encontrarProdutoPeloId(parseInt(id))
                            if(produto){
                                rl.question("Digite a quantidade: ", quantidade =>{
                                    this.pedido.adicionarItem(produto, parseInt(quantidade))
                                    menu()
                                })
                            }else{
                                console.log("❌ Produto não encontrado.")
                                menu()
                            }
                        })
                        break
                    case 3:
                        this.pedido.exibirPedido()
                        menu()
                        break
                    case 4:
                        rl.question(`Digite o valor pago pelo cliente: R$`, valorPago => {
                            const troco = this.pedido.calcularTroco(parseInt(valorPago))
                            if(troco > 0){
                                console.log(`Troco a ser devolvido: ${troco.toFixed(2)}`)
                                this.pedido.calcularMenorQuantidadeDeNotas(troco)
                            }
                            menu()
                        })
                        break
                    case 5:
                        console.log("👋 Obrigrado por usar o sistema! Saindo...")
                        rl.close()
                        break
                    default:
                        console.log("❌ Opção inválida.")
                        menu()
                }
            })
        }
        menu()
    }
}

const supermercado = new SuperMercadoProva()
supermercado.iniciar()