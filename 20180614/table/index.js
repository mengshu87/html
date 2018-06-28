import React,{Component} from 'react';
import List from './list';
import {addData,checkAll,del,sort} from './action'
import './table.css';
class App extends Component{
    all=(ev)=>{
        let {store:{dispatch}}=this.props;
        let {checked}=ev.target;
        dispatch(checkAll(checked));
    };
    add=()=>{
        let {store:{dispatch}}=this.props;
        let {name,age}=this.refs;
        dispatch(addData(name.value,age.value));
        name.value=age.value='';
    };
    delFn=()=>{
        let {store:{dispatch}}=this.props;
        dispatch(del());
    };
    sortFn=()=> {
        let {store:{dispatch}}=this.props;
        let {s1, s2}=this.refs;
        dispatch(sort(s1.value,s2.value))

    }
    render(){
        let {store}=this.props;
        let arr=store.getState().reducer1;
        let newArr=arr.map((e,i)=>{
            return <List {...{
                    key:i,
                    id:e.id,
                    name:e.name,
                    age:e.price,
                    checked:e.checked,
                    store              //将store 传给子级
                }
            }/>
        });
        return(
            <section className="tBody">
                <h1 className="title">TABLE</h1>
                <ul id="header">
                    <li className="addPre">
                        <label>名字：
                            <input
                                type="text"
                                id="name"
                                ref="name"
                            />
                        </label>
                        <label>年龄：
                            <input
                                type="text"
                                id="age"
                                ref="age"
                            />
                        </label>
                        <input
                            type="button"
                            value="添加"
                            id="add"
                            onClick={this.add}
                        />
                    </li>
                    <li>
                        <span>排序</span>
                        <select id="s1" ref="s1">
                            <option value="price">年龄</option>
                            <option value="id">编号</option>
                        </select>
                        <select id="s2" ref="s2">
                            <option value="2">从高到底</option>
                            <option value="1">从低到高</option>
                        </select>
                        <input
                            type="button"
                            value="提交"
                            id="stBtn"
                            onClick={this.sortFn}
                        />
                        <input
                            type="button"
                            value="批量删除"
                            id="rm"
                            onClick={this.delFn}
                        />
                    </li>
                </ul>
                <table id="tab" width="600" align="center" border="1">
                    <thead>
                        <tr>
                            <th>全选
                                <input
                                    type="checkbox"
                                    id="checkAll"
                                    checked={arr.length?arr.every(e=>e.checked):false}
                                    onChange={this.all}
                                />
                            </th>
                            <th index="id">编号</th>
                            <th>商品</th>
                            <th index="price">年龄</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody id="tb">
                        {newArr}
                    </tbody>
                </table>
            </section>
        )
    }
}
export default App;