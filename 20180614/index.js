import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {reducers} from './table/createReducer';
import App from './table/index';


const store=createStore(reducers);   //创建store
store.subscribe(render);        //监听
render();
function render(){
    ReactDOM.render(
        <App store={store}/>
        ,
        document.getElementById('root')
    );
}

if(module.hot){
    module.hot.accept();
}