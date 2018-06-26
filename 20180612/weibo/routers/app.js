/**
 * Created by MS on 2018/6/11.
 */
import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {renderComponent} from './routers';
import Index from '../index';
import Login from '../login';
const routs=[
    {
        path:'/',
        exact:true,
        render:()=>{
            return <Redirect to="/page/1" />
        }
    },
    {
        path:'/page/:id',
        exact:true,
        component:Index
    },
    {
        path:'/login',
        //component:Login
        render:(props)=><Login url={props}/>
    }
]
class App extends Component{
    render(){
        return(
            <div>
                {renderComponent(routs)}
            </div>
        )
    }
}
export default App;