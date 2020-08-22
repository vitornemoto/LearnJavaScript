var buttonElement  = document.querySelector("#botao");
var listElement = document.querySelector("#list ul");



function Adiciona(){

    var inputElement = document.querySelector("#usuario");
    var user = inputElement.value;

    var minhaPromise = function(){
        return new Promise( function(resolve, reject){
            listElement.innerHTML = '';

            var xhr = new XMLHttpRequest();
            xhr.open('GET',`https://api.github.com/users/${user}/repos`)
            xhr.send(null);
    
            renderWaint();

            xhr.onreadystatechange = function(){
                if (xhr.readyState ==4){
                    if(xhr.status ==200){
                       resolve(JSON.parse(xhr.responseText)) ;
                    }else if (xhr.status ==404) {
                        reject("A página que vc está tentando acessar não existe... Erro 404");
                    }else
                    {
                        reject('Erro na requisição');
                    }
                }
            }
        });  }

        minhaPromise()
        .then(function(response){
            
            renderRepositories(response)

        })
        .catch(function(error){
            renderError(error);
        });  

}

buttonElement.onclick = Adiciona;


function renderRepositories(reposNames){
    listElement.innerHTML = '';

    for ( reposName of reposNames ){
        var repoElement = document.createElement("li");
        var repoText = document.createTextNode(reposName.name);

        repoElement.appendChild(repoText);

        listElement.appendChild(repoElement);
    }
}


function renderWaint(){

    listElement.innerHTML = '';
    var waitElement = document.createElement("li");
    var waitText = document.createTextNode("Carregando...");
    waitElement.appendChild(waitText);

    listElement.appendChild(waitElement);
    
}


function renderError(textError){

    listElement.innerHTML = '';
    var waitElement = document.createElement("li");
    var waitText = document.createTextNode(textError);
    waitElement.appendChild(waitText);

    listElement.appendChild(waitElement);
    
}