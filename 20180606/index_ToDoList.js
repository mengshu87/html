import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './ToDoList/index';
import './ToDoList/css/index.css'


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
if(module.hot){
    module.hot.accept();
}

