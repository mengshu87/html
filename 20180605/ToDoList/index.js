/**
 * Created by MS on 2018/6/5.
 */
import React,{Component} from 'react';
import ToHeader from './head';
import ToFooter from './foot';
import ToList from './list';


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            arr:[
                {name:"呵呵0",id:0,checked:true,editing:false},
                {name:"呵呵1",id:1,checked:false,editing:false}
            ]
        }
    }
    deleteFn=(id)=>{            //删除
        let {arr}=this.state;
        arr=arr.filter(e=>e.id!=id);
        this.setState({arr});
    }

    changeAll=(ev)=>{           //全选
        let {checked}=ev.target;
        let {arr}=this.state;
        arr.forEach(e=>{
            e.checked=checked;
        })
        this.setState({arr});
    }
    changeFn=(id)=>{        //每一行的选择按钮
        let {arr}=this.state;
        arr.forEach(e=>{
            if(e.id===id){
                e.checked=!e.checked
            }
        })
        this.setState({arr});
    }
    add = (obj)=> {     //添加数据
        let {arr}=this.state;
        arr.unshift(obj);
        this.setState({arr});
    }

    render(){
        let {arr} = this.state;
        let all=arr.length?arr.every(e=>e.checked):false;
        let len=arr.length;
        let newArr = arr.map((e,i)=>{
            if(e.checked) len--;
            return <ToList {...{
                key:i,
                txt:e.name,
                id:e.id,
                checked:e.checked,
                ccChange:this.changeFn,
                delFn:this.deleteFn
            }}/>
        })
        return (
            <section className="todoapp">
                <div>
                    <ToHeader {...{add:this.add}}/>
                    <section className="main">
                        <input
                            className="toggle-all"
                            type="checkbox"
                            checked={all}
                            onChange={this.changeAll}
                        />
                            <ul className="todo-list">
                                {newArr}
                            </ul>
                    </section>
                    <ToFooter len={len}/>
                </div>
            </section>
        )
    }
}

export default App;



