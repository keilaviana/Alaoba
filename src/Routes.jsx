import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './component/Home'
import ClienteBarista from './component/ClienteBarista'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path='/' exact/>
            <Route component={ClienteBarista} path='/clientebarista' exact/>
        </BrowserRouter>
    );
};

export default Routes;