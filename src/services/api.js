import axios from 'axios';

const api = axios.create({
    baseURL: 'https://megahack3-time43-backend.herokuapp.com/'
});

export default api;