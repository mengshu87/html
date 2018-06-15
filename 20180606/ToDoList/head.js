/**
 * Created by MS on 2018/6/5.
 */
import React,{Component} from 'react';

class ToHeader extends Component{
    constructor(props){
        super(props);
        this.state={
            val:'',
        };
    }
    change=(ev)=>{
        let {value:val}=ev.target;
        this.setState({val});
    }
    keyUp=(ev)=>{       //回车添加数据
        if(ev.keyCode===13){
            let {val}=this.state;
            let {add}=this.props;
            let obj={
                id:+new Date,
                name:val,
                checked:false,
                editing:false
            };
            add(obj);       //添加数据
            this.setState({val:''});
        }

    }
    render(){
        let {val}=this.state;
        return (
            <header className="header" >
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="请输入内容"
                    value={val}
                    onChange={this.change}
                    onKeyUp={this.keyUp}
                />
            </header>
        )
    }

}
export default ToHeader;
