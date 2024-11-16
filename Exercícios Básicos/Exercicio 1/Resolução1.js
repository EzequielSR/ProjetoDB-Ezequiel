//USAR IF-ELSE NOS EXERCÍCIOS SEGUINTES
// 1) Definir a idade de uma pessoa e verificar se ela é maior de idade ou não.

//Resolução:

function verificarIdade(idade) {
    if (idade >= 18) {
        return 'Você é maior de idade';
    } else {
        return 'Você ainda é menor de idade';
    }
}

// Teste da função
console.log(verificarIdade(17))
console.log(verificarIdade(20))
console.log(verificarIdade(18))