/* 2) Para cada produto informado (nome, preço e quantidade), escreva o
nome do produto comprado e o valor total a ser pago, considerando
que são oferecidos descontos pelo número de unidades compradas,
segundo a tabela abaixo:
    a. Até 10 unidades: valor total
    b. De 11 a 20 unidades: 10% de desconto
    c. De 21 a 50 unidades: 20% de desconto
    d. Acima de 50 unidades: 25% de desconto */

// Resolução:

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
console.log(ProdutoComDesconto("Lápis", 9))
console.log(ProdutoComDesconto("Mochila", 21))
console.log(ProdutoComDesconto("Estojo", 60))