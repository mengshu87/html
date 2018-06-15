/**
 * Created by MS on 2018/6/5.
 */
import React,{Component} from 'react';
class ToFooter extends Component{
    constructor(props){
        super(props);
        this.state={
            arr:[
                {name:'全部',state:'all'},
                {name:'未完成',state:'active'},
                {name:'已完成',state:'completed'}],
            stateAll:'all'
        }
    }

    click=(state)=>{     //点击事件，调用父级的方法，达到点击子级操作父级的目的
        let {changeState}=this.props;
        changeState(state);
        this.setState({stateAll:state});

    }
    render(){
        let {len}=this.props;
        let {arr,stateAll}=this.state;
        let newArr=arr.map((e,i)=>{
            return(
                <li key={i}>
                    <a href={'#/'+e.state}
                       className={stateAll==e.state?'selected':''}
                       onClick={(state)=>{this.click(e.state)}}  //e.state是点谁是谁的状态  获得当前点击的是哪个状态，再让当前的元素去执行click事件
                        //也可以写成下面这样的代码
                        //onClick={this.click.bind(e.state)}
                    >{e.name}</a>
                </li>
            )
        })
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{len}</strong>
                    <span>条未选中</span>
                </span>
                <ul className="filters">
                    {newArr}
                </ul>
            </footer>
        )
    }
}
export default ToFooter;