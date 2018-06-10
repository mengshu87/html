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
    constructor(){
        super();
        this.state={
            arr:[1,2,3],
            num:3
        }
    }
    click=()=>{
        let {arr,num}=this.state;
        num++;
        arr.push(num);
        this.setState(
            {
                arr,
                num
            }
        )

    }
    render(){
        let {arr}=this.state;
        let newArray=arr.map((e,i)=>{
                return <li key={i}>{e}</li>
            }
        )
        return (
            <div>
                <button onClick={this.click}>按钮</button>
                <ul>{newArray}</ul>
            </div>
        )
    }


}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
if(module.hot){
    module.hot.accept();
}
