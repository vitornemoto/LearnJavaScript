import axios from 'axios';

// o create cria uma configuração, e o baseUrl serve para definir uma url padrão que todas as próximas requisições serão em cima dela
const api = axios.create({
    baseURL: 'https://api.github.com',
});

export default api;