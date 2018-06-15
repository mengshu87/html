/**
 * Created by MS on 2018/6/6.
 */
import React,{Component} from 'react';
import Re from './regexp';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            arr:[   //下面的正则中，不能使用g全局
                {name:'QQ：',placeholder:'请输入QQ',zz:/^[1-9]\d{4,11}$/,offset:false},
                {name:'Email：',placeholder:'请输入邮箱',zz:/^[A-Za-z]\w{5,17}@[0-9A-Za-z]{2,8}(\.com|.cn)|(\.com\.cn)$/,offset:false},
                {name:'Mobile：',placeholder:'请输入手机号码',zz:/^[1][3-9]\d{9}$/,offset:false},
                {name:'Date：',placeholder:'请输入生日',zz:/^([12][0-9]{3})\D+([0][1-9]|[1][1-2])\D+([0][1-9]|[12][0-9]|[3][0-1])$/,offset:false}
            ]
        }
    }
    changeFn=(name,onOff)=>{        //判断当前的name 是不是传入的name值，如果正则也判断正确，那么就要把offset的值变成true
        let {arr}=this.state;
        arr.forEach(e=>{
            if(e.name===name){
                e.offset=onOff;
            }
        })
        this.setState({arr});     //修改了数组后，要更改state中数组的状态
    }
    render(){
        let {arr}=this.state;
        let all=arr.every(e=>e.offset);
        let newArr=arr.map((e,i)=>{     //将子级的页面的渲染到父页面中
            return <Re {...{
                    key:i,
                    name:e.name,
                    placeholder:e.placeholder,
                    zz:e.zz,
                    changeFn:this.changeFn
                }
            }/>
        })
        return(
            <div id="contain">
                {newArr}
                <p><input
                    className={all?'succ':'fail'}
                    type="submit"
                    value="注册"
                    id="btn"
                /></p>
            </div>
        )
    }
}
export default App