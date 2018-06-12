import React,{Component} from 'react';
class ToList extends Component{

    change = () =>{
        let {id,ccChange}=this.props;
        ccChange(id);
    }
    deleteFn =()=>{
        let {id,delFn}=this.props;
        delFn(id);
    }
    render(){
        let {txt,id,checked}=this.props;
        return(
            <li className={checked?'completed':''}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={checked}
                        onChange={this.change}
                    />
                    <label>{txt}</label>
                    <button
                        className="destroy"
                        //onChange={this.delChange}
                        onClick={this.deleteFn}
                    ></button>
                </div>

            </li>
        )
    }
}
export default ToList;