/**
 * Created by MS on 2018/6/7.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component{
    render(){
        return(
            <div>
                <h3>这是关于页!</h3>
                <Link to="/about/a"><button>关于我们</button></Link>
                <Link to="/about/b"><button>关于你们</button></Link>
                <Link to="/about/c"><button>关于他们</button></Link>
            </div>
        )
    }
}
export default About