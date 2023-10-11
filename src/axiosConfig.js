import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export default api;

//Pra facilitar a vida, importa api, e usa assim:
//api.get(*rota*), sem precisar passar a url