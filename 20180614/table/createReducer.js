import {combineReducers} from 'redux';
var initData = [
    {
        'id': 1,
        'name': 'momo',
        'price': 36,
        'checked': false
    },
    {
        'id': 2,
        'name': '小恋',
        'price': 40,
        'checked': false
    },
    {
        'id': 3,
        'name': 'yaya',
        'price': 20,
        'checked': false
    },
    {
        'id': 4,
        'name': 'feifei',
        'price': 10,
        'checked': false
    },
    {
        'id': 5,
        'name': 'hhehe',
        'price': 35,
        'checked': true
    }
];


const reducer1=(state=initData,action)=>{
    switch(action.type){
        case 'ADD_DATA':
            return [...state,action.data];
        case 'UP_MOVE':
            let newState=[...state];
            console.log(state);
            let index=newState.findIndex((e,i)=>e.id===action.id);        //得到当前点击id的索引
            if(index===0) return state;
            let now=newState.splice(index,1)[0];
            newState.splice(index-1,0,now);
            return newState;
        case 'DOWN_MOVE':
            let newState2=[...state];
            let index2=newState2.findIndex((e,i)=>e.id===action.id);        //得到当前点击id的索引
            let now2=newState2.splice(index,1)[0];
            newState2.splice(index2+1,0,now2);
            return newState2;
        case 'CHECK_CHANGE':
            let newState3=[...state];
            newState3.forEach((e,i)=>{
                if(e.id===action.id){
                    e.checked=!e.checked;
                }
            });
            return newState3;
        case 'CHECK_ALL':
            return state.map((e,i)=>{
                e.checked=action.checked;
                return e;
            });
        case 'DELE':
            return state.filter(e=>!e.checked);
        case 'REMOVE':
            return state.filter(e=>e.id!=action.id);
        case 'SORT':
            let v1=action.val.v1;
            let v2=action.val.v2;
            let sortState=[...state];
            if(v2 === '2'){ //从高到低
                sortState.sort((a,b)=>b[v1] - a[v1]);
            }else if(v2 === '1'){
                sortState.sort((a,b)=>a[v1] - b[v1]);
            }
            return sortState;
        default:
            return state;
    }

}
const reducer2=(state=0,action)=>{
    return state;
}
const reducers=combineReducers({            //多个reducer 合并
    reducer1,
    reducer2
})
export {reducers};