// ORIENTAÇÃO A OBJETOS

/* 16) Faça um programa para controle de empréstimo de livros, com
as classes Emprestimo, Livro e Pessoa. */

// Resolução:

class Emprestimo {
    constructor(pessoa,livro) {
        this.pessoa = pessoa
        this.livro = livro
        this.dataEmprestimo = new Date()
    }

    realizarEmprestimo(){
        if(this.livro.emprestar()){
            this.pessoa.emprestarLivro(this.livro)
            console.log("--------------------")
            console.log(`Empréstimo realizado com sucesso para ${this.pessoa.nome}: ${this.livro.titulo} de ${this.livro.autor}`)
            console.log(`Data do empréstimo: ${this.dataEmprestimo.toLocaleDateString()}`)
        }else{
            console.log("--------------------")
            console.log(`O livro ${this.livro.titulo} de ${this.livro.autor} não está disponível para empréstimo`)
        }
    }

    realizarDevolucao(){
        this.livro.devolver()
        this.pessoa.devolverLivro(this.livro.isbn)
        console.log("------------------------")
        console.log(`O livro ${this.livro.titulo} de ${this.livro.autor} foi devolvido com sucesso`)
        console.log(`Data do empréstimo foi: ${this.dataEmprestimo.toLocaleDateString()}`)
    }
}

class Livro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponivel= true
    }

    emprestar(){
        if(this.disponivel){
            this.disponivel = false
            return true
        }else{
            return false
        }
    }

    devolver(){
        this.disponivel = true
    }
}
class Pessoa{
    constructor(nome) {
        this.nome = nome;
        this.livrosEmprestados = []
    }

    emprestarLivro(livro){
        this.livrosEmprestados.push(livro);
    }

    devolverLivro(isbn){
        this.livrosEmprestados = this.livrosEmprestados.filter(livro => livro.isbn !== isbn)
    }
}



// Exemplo de uso:


const livro1 = new Livro( "Clean Code", "Robert Cecil Martin", "123456")
const livro2 = new Livro( "O Senhor dos Anéis", "J.R.R. Tolkien", "654321")

const pessoa1 = new Pessoa("Alice", "001")

const emprestimo1 = new Emprestimo(pessoa1, livro1)
emprestimo1.realizarEmprestimo()

const emprestimo2 = new Emprestimo(pessoa1, livro2)
emprestimo2.realizarEmprestimo()

emprestimo1.realizarDevolucao()
