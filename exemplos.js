//exemplo if e else

let valorA = 5 + 2;
let valorB = 5 + 5;

if (valorA === 7 || valorB === 7) {
    console.log (" um dos valores é igual a 7")
} else {
    console.log ("nenhum valor é igual a 7")
}

//exemplo switch case

let permissao = 'gerente';

switch (permissao) {
    case 'usuario':
        console.log('acesso de usuario')
    break;
    case 'funcionario':
        console.log('acesso de funcionario')
    break;
    case 'administrador':
        console.log('acesso de administrador')
    break;
  
    default:
        console.log('acesso negado')
}

//exemplo for

for(let index = 0; index < 5; index++){
    console.log("repetição do valor do index:" + index);
}

//exemplo while

let contador = 0
while (contador < 11){
    console.log("5 x" + contador + "=" + 5*contador);
    contador++
}

//exemplo do while 
let index = 10;
do {
    console.log ("digitando...", index)
    index ++;
} while (index <= 5);

//exemplo interval



