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
            ],
            stateName:'all'
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
                e.checked=!e.checked; //点击选择按钮取反
            }
        })
        this.setState({arr});
    }
    add = (obj)=> {     //添加数据
        let {arr}=this.state;
        arr.unshift(obj);
        this.setState({arr});
    }
    changeState=(stateName)=>{          //点击全选、未选中，选中三种状态，将子级的状态传递给父级
        this.setState({stateName});

    }
    stateFn=(newVal,id)=>{      //子页面修改值传给父级，将数组中的name值改为修改后会值再去渲染页面
        let {arr}=this.state;
        arr.forEach(e=>{
            if(e.id===id){
                e.name=newVal;
                //console.log(e.name);
            }
        })
        this.setState({arr});
    }
    render(){
        let {arr,stateName} = this.state;
        let all=arr.length?arr.every(e=>e.checked):false;
        let len=arr.length;
        let stateArr=arr.filter((e,i)=>{            //过滤出三种状态的元素
            if(e.checked) len--;
            switch(stateName){
                case 'all':
                    return e;
                    break;
                case 'active':
                    return !e.checked;
                    break;
                case 'completed':
                    return e.checked;
                    break;
            }
        })
        let newArr = stateArr.map((e,i)=>{          //渲染页面是根据上面的三种状态来做的，因为肯定有一个状态是选中的
            return <ToList {...{
                key:i,
                txt:e.name,
                id:e.id,
                checked:e.checked,
                ccChange:this.changeFn,
                delFn:this.deleteFn,
                stateFn:this.stateFn
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
                    <ToFooter
                        len={len}
                        changeState={this.changeState}
                    />
                </div>
            </section>
        )
    }
}

export default App;



