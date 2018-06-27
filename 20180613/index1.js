import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './redux/index';

const reducer=function(state=0,action){
    switch(action.type){
        case 'ADD':
            return state +=action.payload;
        case 'MINUS':
            let num=state -=action.payload;
            if(num<0) num=0;
            return num;
        default:
            return state;
    }
}
const store=createStore(reducer);
store.subscribe(render);
render();
function render(){
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}

if(module.hot){
    module.hot.accept();
}