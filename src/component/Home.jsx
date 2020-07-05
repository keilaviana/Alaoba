import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/icons/logo-alaoba.svg'
import google from '../assets/icons/google.svg'
import facebook from '../assets/icons/facebook.svg'
import stylesheet from '../public/styles/style.css'
import LoginService from '../services/LoginService';

const Home = () => {

    const history = useHistory();

    function login(event) {

        const data = new FormData();
        
        data.append('email', event.target.login.value)
        data.append('senha', event.target.senha.value)
        
        LoginService.login(data);
        history.push('/clientebarista');
    }

    return (
        <>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>Alaobá</title>

                <link rel="stylesheet" href={stylesheet} />
            </head>
            <body>
                <header>
                    <div>
                        <img src={logo} alt="logo-alaoba" />
                    </div>
                </header>

                <div className="login-container">
                    <form onSubmit={login}>
                        <div>
                            <label htmlFor="login">Login</label>
                            <input type="text" name="login" id="login" placeholder="Seu apelido aqui" autoComplete="off" />
                        </div>

                        <div>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" id="senha" placeholder="Sua senha aqui" />
                        </div>

                        <a href="#" id="forgot-pass"> Putz... esqueci minha senha :(</a>

                        <input type="submit" value="ENTRAR" id="buttom" />
                    </form>

                    <div id="redes-sociais">
                        <p>Ou entrar com</p>
                        <div className="icons">
                            <img src={google} alt="google" />
                            <img src={facebook} alt="facebook" />
                        </div>
                    </div>
                    <div className="registrar">
                        <p>Ainda não tá com a gente, chefia?</p>
                        <span>Faça seu cadastro aqui</span>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Home