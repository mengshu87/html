/**
 * Created by MS on 2018/6/5.
 */
import React,{Component} from 'react';
class ToFooter extends Component{
    constructor(props){
        super(props);
        this.state={
            len:''
        }
    }
    render(){
        let {len}=this.props;

        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{len}</strong>
                    <span>条未选中</span>
                </span>
                <ul className="filters">
                    <li>

                        <a href="#/all" className="selected">全部</a>
                    </li>
                    <li>
                        <a href="#/active" className="">未完成</a>
                    </li>
                    <li>
                        <a href="#/completed" className="">已完成</a>
                    </li>
                </ul>
            </footer>
        )
    }
}
export default ToFooter;