/**
 * Created by MS on 2018/6/7.
 */
import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
import Index from './index';
import About from './about';
import Btn from './button';
import About1 from './aboutChild/aboutA';
import About2 from './aboutChild/aboutB';
import About3 from './aboutChild/aboutC';

class App extends Component{
    render(){
        return(
            <div>
                <Route path="///" children={(url)=>{            //调用children 将Btn 组件的内容来传给页面
                    return <Btn url={url}/>         
                }} />
                <Route exact path="/" component={Index}/>
                <Route path="/about" component={About}/>
                <Route path="/about/:id" render={({match:{params}})=>{
                    switch(params.id){
                        case 'a':
                            return <About1 />;
                        break;
                        case 'b':
                            return <About2 />;
                        break;
                        case 'c':
                            return <About3 />;
                        break;
                        default:
                            return <About1 />;
                        break;
                }}}/>
            </div>
        )
    }
}
export default App