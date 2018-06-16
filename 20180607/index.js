import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './router/app';
//import App from './router1/app';
//import App from './router2/app';
//import App from './router3/app';
//import App from './router4/app';

ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById('root')
    );
if(module.hot){
    module.hot.accept();
}