/**
 * Created by MS on 2018/6/12.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
class Page extends Component{
    constructor(props){
        super(props);
        this.state={
            pageNum:0,  //当前的数据，一共有多少页数据
            current:1,      //设置一个当前页是第一页
            onePageNum:5        //默认显示多少个页码
        
        }
    }
    /*
    * 页码的规则：
    *  如果默认显示5个页码，那就取到中间的那个值，3,当点击第四页的时候，他就应该从第二页显示开始显示，2-6页
    *  就是始终让当前页在中间显示
    *  注意：如果默认显示的页码数是奇数，就向上取整，如果是偶数，那么就在当前的值的基础上+1
    *
    * */
    changePage=(i)=>{
        this.setState({current:i});
    }
    render(){
        let {onePageNum}=this.state;        //结构一下当前要默认显示多少个页码
        let {pageNum,current}=this.props;   //结构一下，当前显示的是哪一页，和总共有多少个页码
        let middlePage=onePageNum%2?Math.ceil(onePageNum/2):Math.ceil(onePageNum/2)+1;      //得到当前中间显示的页码
        let pageArr=[];
        if(current<=middlePage){        //如果当前显示的页面小于中间的页码数，那么就执行这段代码
            for(let i=1;i<=onePageNum;i++){
                pageArr.push(<Link to={{        //Link to也可以传对象， 可能用stata 来指向当前的页码
                        pathname:`/page/${i}`,
                        state: {id:i}
                    }}
                    key={i}
                    className={i===current?'active':''}
                    onClick={()=>{
                                this.changePage(i)
                            }
                        }
                >{i}</Link>)
            }
        }else{      //剩下的，让总页数-中间值,和你当前点击的页面进行比较大小，
            for(let i=1;i<=onePageNum;i++){        //中间页码显示就让点击的当前页在中间显示就行
                if((pageNum-middlePage+1)<current){
                    pageArr.push(<Link to={{
                            pathname:`/page/${pageNum-onePageNum+i}`,
                            state:{id:(pageNum-onePageNum+i)}
                        }}
                        key={pageNum-onePageNum+i}
                        className={(pageNum-onePageNum+i)===current?'active':''}
                        onClick={()=>{
                                this.changePage(pageNum-onePageNum+i)
                            }
                        }
                    >{pageNum-onePageNum+i}</Link>)
                }else{
                    pageArr.push(<Link to={{
                        pathname:`/page/${current-middlePage+i}`,
                        state:{id:current-middlePage+i}
                        }}
                        key={current-middlePage+i}
                        className={(current-middlePage+i)===current?'active':''}
                        onClick={()=>{
                            this.changePage(current-middlePage+i);
                            }
                        }
                    >{current-middlePage+i}</Link>)
                }
            }
        }
        return(
            <div className="page" id="page">
                {pageArr}
            </div>
        )
    }
}
export default Page;
