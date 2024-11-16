//USAR IF-ELSE NOS EXERCÍCIOS SEGUINTES
// 1) Definir a idade de uma pessoa e verificar se ela é maior de idade ou não.

//Resolução:

function verificarIdade(idade) {
    return idade >= 18 ? 'Você é maior de idade' : 'Você ainda é menor de idade'
}

// Teste da função
console.log(verificarIdade(17))
console.log(verificarIdade(20))
console.log(verificarIdade(18))