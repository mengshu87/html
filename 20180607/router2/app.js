/**
 * Created by MS on 2018/6/7.
 */
import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
import Index from './index';
import About from './about';
import About1 from './aboutChild/aboutA';
import About2 from './aboutChild/aboutB';
import About3 from './aboutChild/aboutC';
class App extends Component{
    render(){
        return(
            <div>
                <Link to="/"><button>首页</button></Link>
                <Link to="/about"><button>关于</button></Link>
                <Route path="/" component={Index}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/about/a" component={About1}></Route>
                <Route path="/about/b" component={About2}></Route>
                <Route path="/about/c" component={About3}></Route>
            </div>
        )
    }
}
export default App