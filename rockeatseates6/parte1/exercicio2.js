
// exercício 2

const usuarios = [
    {nome: 'Diego', idade: 23 , empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15 , empresa: 'Rockeatseat'},
    {nome: 'Lucas', idade: 30 , empresa: 'Facebook'},
];

//map 
// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
console.log("Exemplo map");
const newArr = usuarios.map(function(item){
    return item.idade;
})

console.log(newArr);

//filter (só grava o valor se o retorno for true)
//Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
console.log("Exemplo filter");

const filter = usuarios.filter(item => {
    return item.empresa === 'Rocketseat' && item.idade > 18;
});

console.log(filter);

// find -  procura por um valor específico
// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
console.log("Exemplo find");

const find = usuarios.find(item => {
    return item.empresa == 'Google';
});

console.log(find);

// unindo operações
//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuemno máximo 50 anos:
console.log("Exemplo unindo operações");
const newArr2 = usuarios.map(function(item){
    return {nome: item.nome, idade: item.idade * 2, empresa: item.empresa };
});
console.log(newArr2);

const find2 = newArr2.filter(item => {
    return item.idade <= 50;
});
console.log(find2);