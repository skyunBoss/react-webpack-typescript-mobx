/*
 * @Author: xuchao 
 * @Date: 2018-07-11 13:48:39 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-12 16:48:38
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Routes } from './routes';
// import store from './stores';

ReactDOM.render(
    <BrowserRouter>
        <Provider>
            <Routes />
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root') as HTMLElement
);
