/*



 */


import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            arr:[],
            num:0,
            val:'hehe1'
        }
    }
    click = () => {
        let {val,arr} = this.state;
        arr.push(val);
        val = '';
        this.setState({arr,val});
    }
    change=(ev)=>{
        let {value} = ev.target;
        this.setState({
            val:value
        })
    }
    render(){
        let {arr,val}=this.state;
        let newArr=arr.map((e,i)=>{
                return <li key={i}>{e}</li>
            })
        return(
            <div>
                <input
                    type="text"
                    value={val}
                    onChange={this.change}
                />
                <button onClick={this.click}>按钮</button>
                <ul>{newArr}</ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept();
}

