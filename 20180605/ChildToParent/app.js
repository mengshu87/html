/**
 * Created by MS on 2018/6/5.
 */
import React,{Component} from 'react';
import List from './list';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {txt: '呵呵', id: 0, checked: false},
                {txt: '呵呵哒', id: 1, checked: false},
                {txt: '呵呵他', id: 2, checked: true}
            ]
        }
    }

    ccFn = (id)=> {
        let {arr}=this.state;
        arr.forEach(e=> {
            if (e.id === id) {
                e.checked = !e.checked;
            }
        })
        this.setState({arr});

    }
    change = (ev)=> {
        let {value:val}=ev.target;
        this.setState({val});
    }
    keyUp = (ev)=> {
        let {arr,val}=this.state;
        if (ev.keyCode === 13){
            let obj={
                txt:val,
                id: +new Date,
                checked: false
            }
            arr.push(obj);
            val='';
            this.setState({arr,val});
        }
    }

    render(){
        let {arr,val}=this.state;
        let NewArr=arr.map((e,i)=>{
            let obj={
                key:i,
                txt:e.txt,
                id:e.id,
                checked:e.checked,
                cc:this.ccFn
            }
            return <List {...obj}/>
        })
        return(
            <div>
                <input 
                    type="text"
                    value={val}
                    onChange={this.change}
                    onKeyUp={this.keyUp}

                />
                <ul>{NewArr}</ul>
            </div>
        )
    }
}
export default App;
