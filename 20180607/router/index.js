/**
 * Created by MS on 2018/6/7.
 */
import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
import List from './list';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            arr:[]
        }
    }
    newClick=()=> {    //点击今日新闻，将数组内的内容发生改变
        this.setState({arr: [1, 2, 3, 4, 5]});
        //let {offset}=this.props;
        //console.log(offset);
    };
    clickFn=()=>{       //如果当前是登录的状态，就执行下面的内容
        this.setState({arr:['寂寞','同城','胶友']});
    }
    signOut=()=>{       //退出
        let {outFn} = this.props;
        outFn();
        this.setState({arr:[]});
    }
    render(){
        let {arr}=this.state;
        let {offset}=this.props;
        let arr2=offset?(
            <span>
                <button onClick={this.clickFn}>你的专属新闻</button>
                <button onClick={this.signOut}>退出</button>
            </span>):(
            <Link to="/login">
                <button>你的专属新闻</button>         /*如果没有登录，就直接跳转到登录页面*/
            </Link>
        );
        return(
            <div>
                <button onClick={this.newClick}>今日新闻</button>
                {arr2}
                <ul>
                    {arr.map((e, i)=> {             //这里要用一个{}包一下
                        return <List {...{
                            key: i,
                            txt: e
                        }}/>
                    })
                    }
                </ul>
            </div>
        )
    }
}
export default Index;