// execício 4 desestrutruração

//4.1 Desestruturação simples
// Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis

const empresa = {
    nome: 'Rocketseat',
    endereco:{
        cidade:'Rio do Sul',
        estado:'SC',
    }
}

const{nome, endereco:{cidade, estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

// 4.2 Desestruturação em parâmetros

function mostraInfo ({nome,idade}){
    return `${nome} tem ${idade} anos`;
}

console.log(mostraInfo({nome:'Diego',idade:23}));