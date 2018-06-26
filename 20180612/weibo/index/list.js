/**
 * Created by MS on 2018/6/11.
 */
import React,{Component} from 'react';
import './weibo.css';
class List extends Component{
    constructor(props){
        super(props);
        this.state={
        
        }
    }
    tDou = (n) => {     //装一位数变成两们数
        return n<10?'0'+n:''+n;
    }
    getTime = (time)=> {        //时间格式转换
        let date = new Date(time); //传入一个服务器的时间
        let iYear =  date.getFullYear();
        let iMoun =  date.getMonth() + 1;
        let iDate = date.getDate();
        let iH = date.getHours();
        let iM = date.getMinutes();
        let iS = date.getSeconds();
        let str = iYear + '-' +this.tDou(iMoun) + '-' + this.tDou(iDate);
        return str += ' '+ this.tDou(iH) + ':' + this.tDou(iM) + ':'+ this.tDou(iS);
    }

    like=async ()=>{            //点击赞的时候请求数据
        let {id,getArr}=this.props;
        let likeData=await fetch('http://localhost:88/api/weibo?act=like&id='+id);
        let data=await likeData.json();
        if(data.code===0){
            getArr();
        }
    };
    dislike=async ()=>{            //点击踩的时候请求数据
        let {id,getArr}=this.props;
        let dislikeData=await fetch('http://localhost:88/api/weibo?act=dislike&id='+id);
        let data=await dislikeData.json();
        if(data.code===0){
            getArr();
        }
    };
    cut =async ()=>{
        let {id,getArr,current}=this.props;
        let cutData=await fetch('http://localhost:88/api/weibo?act=del&id='+id);
        let data=await cutData.json();
        if(data.code===0){
            getArr(true);
        }
    };
    
    render(){
        let {content,like,dislike,time}=this.props;
        return(
            <div className="reply">
                <p className="replyContent">{content}</p>
                <p className="operation">
                    <span className="replyTime">{this.getTime(time)}</span>
                    <span className="handle">
                        <a
                            href="javascript:;"
                            className="top"
                            onClick={this.like}
                        >{like}</a>
                        <a
                            href="javascript:;"
                            className="down_icon"
                            onClick={this.dislike}
                        >{dislike}</a>
                        <a
                            href="javascript:;"
                            className="cut"
                            onClick={this.cut}
                        >删除</a>
                    </span>
                </p>
            </div>
        )
    }
}
export default List;