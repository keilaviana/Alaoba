import logo from '../assets/icons/logo-alaoba.svg'
import axios from 'axios';
import api from './api.js'

class LoginService {
    login(data) {
        return axios.post(`${api}/login`, data);
    }
}

export default new LoginService()