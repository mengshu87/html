import React,{Component} from 'react';
class App extends Component{
    add=()=>{
        let {store:{dispatch}}=this.props;
        dispatch({type:'ADD_NUM',payload:1})
    }
    minus=()=>{
        let {store:{dispatch}}=this.props;
        dispatch({type:'MINUS_NUM',payload:1})
    }
    keyUp=(ev)=>{
        if(ev.keyCode===13){
            let {store:{dispatch}}=this.props;
            let {txt}=this.refs;        //refs 就能拿到定义的ref 的值
            //let ADD_DATA='ADD_DATA';       //获取reducer2中的case的值，只能是传值
            dispatch({
                type:"ADD_DATA",
                add:{txt:txt.value,id:+new Date}
            })
            txt.value='';
        }
    }
    render(){
        let {store}=this.props;
        let num=store.getState().reducer1;      //获取reducers中第一个reducer
        let arr=store.getState().reducer2;    //获取reducers中第一个reducer
        console.log(arr);
        let newArr=arr.map((e,i)=>{
            return <li {...{
                key:i,
                id:e.id
            }}>{e.txt}</li>
        });
        return(
            <div>
                <input
                    type="text"
                    ref="txt"
                    onKeyUp={this.keyUp}
                />
                <ul>{newArr}</ul>
                <button onClick={this.minus}>-</button>
                <span>{num}</span>
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}
export default App;