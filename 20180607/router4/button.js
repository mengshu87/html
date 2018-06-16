/**
 * Created by MS on 2018/6/7.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Btn extends Component{

    click = () => {
        //console.log(this.props);        //本身带有url的参数
        //去结构这个url，里面有一个goBack()方法，可以返回上一个路径
        let{url:{history:{goBack}}}=this.props;
        goBack();

    }
    render(){

        return(
            <div>
                <Link to="/"><button>首页</button></Link>
                <Link to="/about"><button>关于</button></Link>
                <button onClick={this.click}>上次操作</button>
            </div>
        )
    }
}
export default Btn;