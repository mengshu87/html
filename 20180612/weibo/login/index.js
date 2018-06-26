/**
 * Created by MS on 2018/6/11.
 */
import React,{Component} from 'react';
import '../css/register.css';
import '../css/reset.css';
import './login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nVal: '',
            pVal: '',
            info: '请输入用户名密码'

        }
    }

    //输入用户名时的change事件
    nameChange = (ev)=> {
        let {value:nVal}=ev.target;
        this.setState({nVal});
    };
    //输入密码时年change事件
    passChange = (ev)=> {
        let {value:pVal}=ev.target;
        this.setState({pVal});
    };
    reg = ()=> {  //点击注册按钮就触发的事件
        let {nVal, pVal, info}=this.state; //先将数据结构一下
        if (nVal && pVal) {     //假如用户名和密码都不为空，开始访问接口来请求数据
            fetch('http://localhost:88/api/user/register',{            //因为是post 请求，所以要设置请求头
                method:'post',
                body:`username=${nVal}&password=${pVal}`,
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            })
            .then((res)=>res.json())
            .then(data=>{    //以上是请求接口的过程
                //console.log(data);
                if(data.code===0){      // 当请求的数据返回的code值是1,说明请求数据成功
                    this.setState({info:'注册成功!开始你的表演!'})
                }else if(data.code===1){
                    this.setState({info:data.msg,nVal:'',pVal:''});     //如果返回-1,说明数据没有注册成功，将用户名和密码都清空
                }
            });
        } else {
            //this.setState({info: '请输入内容'})
            alert('请输入内容')
        }

    };
    login=()=>{     //点击登录按钮触发
        let {url:{history}} = this.props;
        let {nVal,pVal,info}=this.state;  //先将数据结构一下
        if(nVal&&pVal){
            fetch('http://localhost:88/api/user/login',{
                method:'post',
                body:`username=${nVal}&password=${pVal}`,
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            })
            .then((res)=>res.json())
            .then(data=>{
                //console.log(data);
                if(data.code===0){
                    console.log(history.push('/'));
                    this.setState({info:'登录成功！'},()=>{
                        setTimeout(()=>{
                            history.push('/');          //点击成功后，页面跳转至 根目录
                        },2000);
                    })
                }else if(data.code===-3){
                    this.setState({info:data.msg,nVal:'',pVal:''});
                }
            })
        }else{
            alert('请输入内容');
        }
    }
    render() {
        let {nVal, pVal, info}=this.state;
        return (
            <div>
                <h2 id="userInfo">欢迎回来,<span id="user"></span></h2>
                <div className="form-wrapper">
                    <div className="banner"></div>
                    <form id="form">
                        <div className="item-wrapper">
                            <label>登陆名</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={nVal}
                                onChange={this.nameChange}
                            />
                        </div>
                        <div className="item-wrapper">
                            <label>密码</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={pVal}
                                onChange={this.passChange}
                            />
                        </div>
                        <input
                            type="button"
                            value="登陆"
                            id="submit"
                            onClick={this.login}
                        />
                        <input
                            type="button"
                            value="注册"
                            id="register"
                            onClick={this.reg}
                        />
                    </form>
                    <p id="info" style={{'display':'block'}}>{info}</p>
                </div>
            </div>
        )
    }
}
export default Login;