import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './RegExp/index';
import './RegExp/css/css.css';
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
if(module.hot){
    module.hot.accept();
}