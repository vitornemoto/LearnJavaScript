// Exercício 1
//Transforme os seguintes trechos de código utilizando async/await:

const delay = (text) => new Promise(resolve => setTimeout(  () => {resolve(text)}, 1000));

async function unPorSegundo(){
    console.log( await delay('1s') );
    console.log( await delay('2s') );
    console.log( await delay('3s') );
}


unPorSegundo();



// Exercício 2
import axios from 'axios';
// function getUserFromGithub(user) {  
//     axios.get(`https://api.github.com/users/${user}`)    
//     .then(response => {      
//         console.log(response.data);    
//     })    
//     .catch(err => {      
//         console.log('Usuário não existe');    
//     })
// }

async function getUserFromGithub(user){
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
        
    } catch (error) {
        console.warn('Usuário não existe');
    }
}


getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');



// Exercicio 3
// class Github {  
//     static getRepositories(repo) {    
//         axios.get(`https://api.github.com/repos/${repo}`)      
//         .then(response => {        
//             console.log(response.data);      
//         })      
//         .catch(err => {        
//             console.log('Repositório não existe');
//       })  
//     }
// }

import axios from 'axios';

class Github{
     static async getRepositories(repo){
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }
        catch(err){
            console.warn('Repositorio não existe'); 
        }
        
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');




// Exercício 4
import axios from 'axios';

// const buscaUsuario = usuario => {  
//     axios.get(`https://api.github.com/users/${user}`)    
//         .then(response => {      
//             console.log(response.data);    
//         })    
//         .catch(err => {      
//             console.log('Usuário não existe');    
//         });
// }
    
// buscaUsuario('diego3g');


const buscaUsuario = async (usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response.data);
    }
    catch(err){
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g');

