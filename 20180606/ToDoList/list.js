import React,{Component} from 'react';
class ToList extends Component{
    constructor(props){
        super(props);
        this.state={
            val:'',
            editing:false    //设置当前是不可以编辑的
        }
    }
    change = () =>{     //列表的状态是否是选中的发生改变时，要调用父级的方法来完成
        let {id,ccChange}=this.props;
        ccChange(id);
    }
    deleteFn =()=>{         //删除子页面的元素，要调用父级的方法来删除
        let {id,delFn}=this.props;
        delFn(id);
    }
    dbclick=()=>{       //双击的时候，可编辑的input框打开   同时也要获取父级传过来的当前元素的值
        let {txt}=this.props;
        this.setState({editing:true,val:txt},()=>{
            this.refs.a.focus();            //双击后，将editing的状态变为可以编辑的状态，并且将原来的值赋值给当前的input
        })

    }
    changeValue=(ev)=>{       //执行change方法来改变当前元素的值
        let {value:val}=ev.target;
        this.setState({val});
    }
    blur=()=>{      //失焦将修改后的input 内的值传给父级来修改label的值
        let {val}=this.state;
        let {id,stateFn,txt}=this.props;        //获取父级中的状态
        if(val&&val!=txt){//当value的值发生改变，且不等于原来的值的时候，要通知父级修改元素
            stateFn(val,id);
        }
        this.setState({editing:false,txt:val});     //修改成功后，装editing 改为false
    }

    render(){
        let {txt,id,checked}=this.props;
        let {val,editing}=this.state;       //结构一下页面的值
        //然后通过editing 的值来判断当前是否要以编辑
        let classN=checked?'completed':'';
        if(editing) classN +=' editing';        //如果editing是true ，就让class名字改变
        return(
            <li className={classN}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={checked}
                        onChange={this.change}
                    />
                    <label onDoubleClick={this.dbclick}>{txt}</label>
                    <button
                        className="destroy"
                        //onChange={this.delChange}
                        onClick={this.deleteFn}
                    ></button>
                </div>
                <input
                    className="edit"
                    value={val}
                    onChange={this.changeValue}
                    onBlur={this.blur}
                    ref="a"

                />
            </li>
        )
    }
}
export default ToList;