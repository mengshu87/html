/**
 * Created by MS on 2018/6/8.
 */
import React,{Component} from 'react';
class List extends Component{
    render(){
        let {txt}=this.props;
        return(
            <li>{txt}</li>
        )
    }
}
export default List;