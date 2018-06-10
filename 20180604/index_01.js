/*
 import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
 import App from './App';
 import registerServiceWorker from './registerServiceWorker';

 ReactDOM.render(<App />, document.getElementById('root'));
 registerServiceWorker();
 */


import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    render(){
        //let {arr}=this.props;
        let {arr,str}=this.props
        console.log(this.props);
        let newArray=arr.map((e,i)=><li key={i}>{e}</li>)

        return (
            <div>
                <ul>{newArray}</ul>
            </div>
        )
    }
}
let str='123333333'
// let obj={}
let arr=[1,2,3,4,5,6,7]

ReactDOM.render(
    <App arr={arr} str={str}/>,
    document.getElementById('root')
)
