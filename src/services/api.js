import axios from "axios";

//base da URL: https://api.themoviedb.org/3/
//url da api: /movie/now_playing?api_key=d32a6d482abb9bd1339948661457fc31&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;