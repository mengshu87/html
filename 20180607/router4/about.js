/**
 * Created by MS on 2018/6/7.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import About1 from './aboutChild/aboutA';
class About extends Component{
    render(){
        let {location:{pathname}} = this.props;     //结构location 内的pathname 这是当前点击的页面的路径
        let com = pathname=='/about'?<About1 />:'';   //如果当前页面的路径是/about 那么要让他直接加载About1内的内容
        return(
            <div>
                <h3>这是关于页!</h3>
                <Link to="/about/a"><button>关于我们</button></Link>
                <Link to="/about/b"><button>关于你们</button></Link>
                <Link to="/about/c"><button>关于他们</button></Link>
                {com}
            </div>
        )
    }
}
export default About;