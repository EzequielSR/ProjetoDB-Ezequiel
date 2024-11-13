// USAR FOR NOS EXERCICIOS SEGUINTES
/* 5) Construa a tabuada de um número. (ex: 1x1=1,
1x2=2,...,1x10=10); */


function tabuada(numero){
    for(let i=1; i <= 10; i++){
        console.log(`${numero} X ${i} = ${numero * i}`)
    }
}

const numero = 70
tabuada(numero)