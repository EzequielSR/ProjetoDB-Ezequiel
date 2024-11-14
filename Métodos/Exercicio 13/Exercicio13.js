/* 13) Faça um método que calcule a média de um aluno de acordo
com o critério definido neste curso. Além disso, faça um outro
método que informe o status do aluno de acordo com a tabela a
seguir:
    - Nota acima de 6: “Aprovado”
- Nota entre 4 e 6: “Verificação Suplementar”
- Nota abaixo de 4: “Reprovado” */


//Exemplo:
let notas = [4.5,7.3,8]
let media = calcularMedia(notas)
let status = obterStatusAluno(media)

// Resolução:
function calcularMedia(){
    let soma = 0
    for(let nota of notas){
        soma += nota
    }
    return soma / notas.length
}

function obterStatusAluno(media){
    if(media > 6){
        return "Aprovado"
    }else if(media >= 4 && media <= 6){
        return "Verificação Suplementar"
    }else{
        return "Reprovado"
    }
}

console.log("Média do aluno:", media.toFixed(2))
console.log("Status do aluno:", status)
