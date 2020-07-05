import React from 'react';
import CadastroService from '../services/CadastroService';

const CadastroCliente = () => {

    const history = useHistory();

    function cadastro() {
        CadastroService.cadastroCliente();
        history.push('/clientebarista');
    }

    return (
        <>
            <body>
                <header>
                    <div>
                        <img src="../../assets/icons/logo-alaoba.svg" alt="logo-alaoba" />
                    </div>

                </header>
                <div class="content-cadastro">
                    <form onSubmit={cadastro} >
                        <div class="form-id">
                            <label for="nome">Nome completo</label>
                            <input type="text" name="nome" id="nome" placeholder="Jessé Gomes da Silva FIlho" autocomplete="off" />
                        </div>

                        <div class="form-id">
                            <label for="cpf">CPF</label>
                            <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" autocomplete="off" />
                        </div>

                        <div class="form-id">
                            <label for="nascimento">Nasceu quando?</label>
                            <input type="text" name="nascimento" id="nascimento" placeholder="DD/MM/AAAA" autocomplete="off" />
                        </div>

                        <div class="form-id">
                            <label for="email">Qual seu e-mail</label>
                            <input type="text" name="email" id="email" placeholder="exemplo@exemplo.com" autocomplete="off" />
                        </div>

                        <div class="form-img">
                            <label for="foto">Precisamos de uma foto sua :)</label>

                            <label id="botao" for="foto">CARREGAR FOTO</label>

                            <input type="file" name="foto" id="foto" accept="image/png, image/jpeg" />
                        </div>

                        <input type="submit" value="CADASTRAR" id="buttom" />
                    </form>

                    <div id="redes-sociais">
                        <p>Se achar mais fácil, que tal se cadastrar com sua conta do Google ou do Facebook?</p>
                        <div class="icons">
                            <img src="../../assets/icons/google.svg" alt="google" />
                            <img src="../../assets/icons/facebook.svg" alt="facebook" />
                        </div>
                    </div>
                </div>

            </body>
        </>
    )
}