import axios from 'axios';
import api from './api.js'

class CadastroService {
    cadastroCliente() {
        return axios.post(`${api}/clientes`);
    }

    cadastroBar() {
        return axios.post(`${api}/bares`);
    }
}

export default new LoginService()