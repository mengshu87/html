/**
 * Created by MS on 2018/6/8.
 */
import React,{Component} from 'react';
class Login extends Component{
    click=()=>{     //点击登录之后，让offset 变成true，和 go 方法一样，所以可以直接拿来用。
        let {go}=this.props;
        go();
    }
    render(){
        return(
            <div><button onClick={this.click}>登录</button></div>
        )
    }
}
export default Login;