/**
 * Created by MS on 2018/6/7.
 */
import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Index from './index';
import About from './about';
class App extends Component{
    /*constructor(props){
        super(props);
        this.state={

        }
    }*/
    render(){
        return(
            <div>
                <Route strict path="/" component={Index}></Route>
                <Route strict path="/about/" component={About}></Route>
            </div>
        )
    }
}
export default App