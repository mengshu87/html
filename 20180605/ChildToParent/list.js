/**
 * Created by MS on 2018/6/5.
 */
import React,{Component} from 'react';


class List extends Component{
    constructor(props){
        super(props);
        let {txt,id,checked} =this.props;
        this.state = {
            txt,
            id,
            checked
        }
    }

    change=()=>{
        let {cc} = this.props;
        let {id,checked}=this.state;
        checked=!checked;
        cc(id);
        this.setState({checked});
    }
    render(){
        let {txt,id,checked}=this.props;
        return (
            <div>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={this.change}
                />
                <span>{txt}</span>
            </div>
        )
    }
}
export default List