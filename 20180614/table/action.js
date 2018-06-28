/**
 * Created by MS on 2018/6/13.
 */

let ADD_DATA='ADD_DATA';
let UP_MOVE='UP_MOVE';
let DOWN_MOVE='DOWN_MOVE';
let CHECK_CHANGE='CHECK_CHANGE';
let CHECK_ALL='CHECK_ALL';
let DELE='DELE';
let REMOVE='REMOVE';
let SORT='SORT';

function addData(name,age){
   return {
       type:ADD_DATA,
       data:{
           'id': +new Date(),
           'name': name,
           'price': age,
           'checked': false
       }
   }
}
function upMove(id){
    return {
        type:UP_MOVE,
        id
    }
}
function downMove(id){
    return {
        type:DOWN_MOVE,
        id
    }
}
function checked(id){
    return {
        type:CHECK_CHANGE,
        id
    }
}
function checkAll(checked){
    return {
        type:CHECK_ALL,
        checked
    }
}
function del(){
    return {
       type:DELE
    }
}
function remove(id){
    return{
        type:REMOVE,
        id
    }
}
function sort(v1,v2){
    return {
        type:SORT,
        val:{v1,v2}
    }
}
export {addData,upMove,downMove,checked,checkAll,del,remove,sort}