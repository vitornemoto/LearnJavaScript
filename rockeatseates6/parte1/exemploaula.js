//PARTE 1

class List{
    constructor(){
        this.data = [];
    }
    
    add(data){
        this.data.push(data);
        console.log(this.data);/home/vitor/Documents/git/LearnJavaScript/rockeatseates6/index.html
    }
}

//herança
class TodoList extends List{
    constructor(){
        //chama o contructor da classe pai
        super();

        this.usuario = 'Diego';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}


const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo List');
}

MinhaLista.mostraUsuario();

//PARTE 2
// metodo estatico

/*class Matematica{
    static soma(a,b){
        return(a + b);
    }
}

console.log(Matematica.soma(1,7));*/


// parte 3 vetores







