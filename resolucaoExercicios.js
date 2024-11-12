// 1) Exercício

function verificarIdade(idade) {
    if (idade >= 18) {
        return 'Você é maior de idade'
    } else {
        return 'Você ainda é menor de idade'
    }
}

// Teste da função
console.log(verificarIdade(17))
console.log(verificarIdade(20))
console.log(verificarIdade(18))
console.log("------------------------------")
// 2) Exercício

let produtos = [
    {nome: "Lápis", quantidade: 10, preco: 3.00},
    {nome: "Mochila", quantidade: 21, preco: 6.00},
    {nome: "Estojo", quantidade: 50, preco: 10.00},
    {nome: "Boné", quantidade: 20, preco: 20.00}
]

function ProdutoComDesconto(nome, quantidade) {
    let produto = produtos.find(p => p.nome.toLowerCase() === nome.toLowerCase())

    if (!produto) {
        return `Produto "${nome}" não foi encontrado`
    }
    if (quantidade > produto.quantidade) {
        return `Quantidade solicitada para ${produto.nome} excede o número disponível de ${produto.quantidade} unidades `
    }

    let valorTotal = produto.preco * quantidade
    let desconto = 0
    if (quantidade === 10) {
        desconto = 0
    } else if (quantidade >= 11 && quantidade <= 20) {
        desconto = 0.10
    } else if (quantidade >= 21 && quantidade <= 50) {
        desconto = 0.20
    } else if (quantidade > 50) {
        desconto = 0.25
    }

    let valorComDesconto = valorTotal * (1 - desconto)
    return `Produto ${produto.nome}, Quantidade: ${quantidade}, Valor Total: ${valorComDesconto.toFixed(2)}`
}

// Teste de produtos
console.log(ProdutoComDesconto("Estojo", 60))
console.log(ProdutoComDesconto("Mochila", 21))
console.log(ProdutoComDesconto("Lápis", 9))



