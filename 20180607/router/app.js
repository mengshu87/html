/**
 * Created by MS on 2018/6/7.
 */
import React,{Component} from 'react';
import {Route,Link,Redirect} from 'react-router-dom';
import Index from './index';
import Login from './login';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            offset:false
        }
    }
    outFn=()=>{           //当点击今日新闻的时候，让offset 变了false
        this.setState({offset:false});
    }
    go=()=>{            //当点击完登录之后，让offset 变成true
        this.setState({offset:true});
    }
    render(){
        let {offset}=this.state;
        return(
            <div>
                <Route exact path="/" render={()=>{
                    return <Index offset={offset} outFn={this.outFn}/>
                }}/>
                <Route path="/login" render={()=>{
                        if(offset){
                            return <Redirect to="/"/>       //重定向
                        }else{
                            return <Login go={this.go}/>
                        }
                    }
                }/>
            </div>
        )
    }
}
export default App;