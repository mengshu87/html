/**
 * Created by MS on 2018/6/7.
 */
import React,{Component} from 'react';

import {Link} from 'react-router-dom';
import About1 from './aboutA';
import About2 from './aboutB';
import About3 from './aboutC';
import About from '../about';



class AboutX extends Component{

    render(){
        let {match:{params:{id}}}=this.props;
        console.log(this.props);
        let str='';
        switch(id){
            case 'a':
                str=<About1/>;
                break;
            case 'b':
                str=<About2/>;
                break;
            case 'c':
                str=<About3/>;
                break;
            default:
                str = <About1 />;
                break;
        }
        return(
            <div>
                <About/>
                {str}
            </div>
        )
    }
}
export default AboutX;