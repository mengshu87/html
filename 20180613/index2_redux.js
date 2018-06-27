import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers} from 'redux';
import App from './redux/index';

const reducer1=(state=0,action)=>{
    switch(action.type){
        case 'ADD_NUM':
            return state +=action.payload;
        case 'MINUS_NUM':
            let num=(state -=action.payload)<=0?0:(state -=action.payload);
            return num;
        default:
            return state;
    }
}
let arr=[{txt:'呵呵',id:0},{txt:'哈哈',id:1},{txt:'嘿嘿',id:2}];
const reducer2=(state=arr,action)=>{
    switch(action.type){
        case 'ADD_DATA':
            return [action.add,...state];
        default:
            return state;
    }
}

const reducers = combineReducers({
    reducer1,
    reducer2
});

const store=createStore(reducers);
//只要发起action就会执行subscribe
store.subscribe(render);          //监听

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