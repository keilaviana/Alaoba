import React from 'react';
import stylesheet from '../public/styles/identificacao.css'
import logo from '../assets/icons/logo-alaoba.svg'


const ClienteBarista = () => {
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
                <div class="buttons">
                    <button type="button">sou cliente </button>
                    <button type="button">sou barista </button>
                </div>
            </body>


        </>
    )
}

export default ClienteBarista