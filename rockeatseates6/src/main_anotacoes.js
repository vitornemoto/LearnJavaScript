// exemplo import / export
/*import ClasseUsuario, {idade as IdadeUsuario} from './function';

ClasseUsuario.info();

console.log(IdadeUsuario); */

//*********************************************************************************** */
// asyc await

const minhaPromise = () => new Promise((resolve,reject) => {
    setTimeout(() => { resolve('OK')}, 2000);
});


// async function executaPromise(){
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());

// }

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};



executaPromise();

//***********************************************************************************
// Axios
// axios

import axios from 'axios';

class Api{
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err){
            console.warn('Erro na API');
        }      

        
    }
}

// Api.getUserInfo('diego3g');
Api.getUserInfo('vitornemoto');
Api.getUserInfo('vitornemoto90u0-u80jioihds90-ahig');





