import api from './api';

class App{
    constructor(){
        this.repositores = []; // array

        this.formEl  = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.ListEl  = document.getElementById('repo-list');
        

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else{
            document.getElementById('loading').remove();
        }
        
    }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;


        if (repoInput.length === 0)
            return;

        this.setLoading();
        try{
            // colocar como teste 
            // vitornemoto/LearnJavaScript
            // Rocketseat/umbriel
            // react-navigation/react-navigation
            const response = await api.get(`/repos/${repoInput}`);


            // desestruturação (destruction)
            const { name, description, html_url, owner:{avatar_url}} = response.data;


            this.repositores.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEl.value = '';

            this.render();     
        }  catch(err){
            alert('O repositório não existe!');
        }

        this.setLoading(false);
    }

    render(){
        this.ListEl.innerHTML = ''; // limpa a página

        this.repositores.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank'); // abre em uma nova aba
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.ListEl.appendChild(listItemEl);

        });
    }

   
}

const MeuApp = new App();