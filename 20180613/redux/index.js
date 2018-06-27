/**
 * Created by MS on 2018/6/13.
 */
import React,{Component} from 'react';
class App extends Component{
    add=()=>{
        let {store:{dispatch}}=this.props;
        dispatch({type:'ADD',payload:1});
    }
    minus=()=>{
        let {store:{dispatch}}=this.props;
        dispatch({type:'MINUS',payload:1});
    }
    render(){
        let {store}=this.props;
        return(
            <div>
                <button onClick={this.minus}>-</button>
                <span>{store.getState()}</span>
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}
export default App;