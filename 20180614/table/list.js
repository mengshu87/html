import React,{Component} from 'react';
import {upMove,downMove,checked,remove} from './action';

class List extends Component{
    change=()=>{
        let {store:{dispatch},id}=this.props;
        dispatch(checked(id));

    };
    up = () => {
        let {store:{dispatch},id} = this.props;
        dispatch(upMove(id));
    };
    down=()=>{
        let {store:{dispatch},id}=this.props;
        dispatch(downMove(id));
    }
    removeFn=()=>{
        let {store:{dispatch},id}=this.props;
        dispatch(remove(id));
    }
    
    render(){
        let {id,name,age,checked}=this.props;
        return(
            <tr className={checked?'active':''}>
            <td><input
                type="checkbox"
                checked={checked}
                onChange={this.change}
            /></td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>
                <input
                    type="button"
                    value="删除"
                    onClick={this.removeFn}
                />
                <input
                    type="button"
                    value="上移"
                    onClick={this.up}
                />
                <input
                    type="button"
                    value="下移"
                    onClick={this.down}
                />
            </td>
        </tr>
        )
    }
}
export default List;