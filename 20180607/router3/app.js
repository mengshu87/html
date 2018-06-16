/**
 * Created by MS on 2018/6/7.
 */
import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
import Index from './index';
import About from './about';
import AboutX from './aboutChild/aboutX';

/*
 如果我们访问 关于页面 的时候，让他默认显示 关于我们 的页面
 方法一：
 直接将<Link to="/about"><button>关于</button></Link>  改成 <Link to="/about/a"><button>关于</button></Link>
 这种方法的弊端是当我们http://localhost:3000/about 时没有显示相应的页面

 方法二：定义一个中间页面，去判断着跳转
        在中间页面中去做判断，
        this.props 可以获取{match: {…}, location: {…}, history: {…}, staticContext: undefined}  可以获取所需要的内容
           内容内包括history location match 等内容，可以根据情况结构出来

             let {match:{params:{id}}}=this.props;
             console.log(this.props);




 */

class App extends Component{

    render(){
        return(
            <div>
                <Link to="/"><button>首页</button></Link>
                <Link to="/about"><button>关于</button></Link>
                <Route exact path="/" component={Index}></Route>{/*给父母添加标准匹配，就能把/about 也能查看首页的内容的给过滤掉*/}
                <Route exact path="/about" component={AboutX}></Route>

                <Route path="/about/:id" component={AboutX}></Route>
            </div>
        )
    }
}
export default App