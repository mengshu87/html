/**
 * Created by MS on 2018/6/6.
 */
import React,{Component} from 'react';

class Re extends Component{
    constructor(props){
        super(props);
        this.state={
            val:'',
            onOff:true,
            id:''
        }
    }
    change=(ev)=>{
        let {value:val}=ev.target;      //获得输入的值
        let {name,changeFn,zz}=this.props;     //获得父级的name,changeFn,zz 的状态
        let {onOff} = this.state;     //获取当前页面onOff 的状态
        onOff=zz.test(val);     //通过正则去判断输入的值是否满足条件
        if(name==='Date：'){     //如果name ==='Date: ' 要对日期进行判断，要输入正确的日期，并且不能大于今天的日期
            onOff=this.birthday(val,zz);
        }
        //console.log(onOff);
        changeFn(name,onOff);       //调用父级的方法，来完成操作子级修改父级的目的
        this.setState({val,onOff});     //将修改的数据传入state 状态中
    }
    //判断日期的时候，不能大于今天的日期
    birthday=(val,zz)=>{
        let str=val.replace(zz,function($0,$1,$2,$3){
            return $1+'-'+$2+'-'+$3;
        })
        //console.log(str);
        str=str.split('-');
        let setdate=new Date(str[0],str[1]-1,str[2]);         //将传入的值转换成日期的格式
        //通过时间戳来获取正确的年月日
        let Y=setdate.getFullYear();
        let M=setdate.getMonth()+1;
        let D=setdate.getDate();
        //console.log(+new Date());
        //setdate.getTime() 将当前的值转换成时间戳    Date.now()    获取当前日期的时间戳
        if(setdate.getTime()<Date.now()&&(Y==str[0] && M==str[1] && D==str[2])){
            return true;
        }else{
            return false;
        }        
    }
    render(){
        let {name,placeholder,zz}=this.props;
        let {val,onOff}=this.state;
        let {id}=this.state;
        return(
            <div id={name}>
                <span>{name}</span>
                <input
                    className={onOff?'ok':'error'}
                    type="text"
                    name="qq"
                    placeholder={placeholder}
                    value={val}
                    onChange={this.change}
                />
            </div>
        )
    }
}
export default Re
