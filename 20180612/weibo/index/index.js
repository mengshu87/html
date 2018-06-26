/**
 * Created by MS on 2018/6/11.
 */
import React,{Component} from 'react';
import List from './list';
import Page from '../page';
import './weibo.css';
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            val:'',   //初始输入框的值
            arr:[],     //用来存放数据
            pageNum:1,  //当前有多少页数据
            current:1   //表示当前点击显示的哪页的数据
        }
    }
    textChange=(ev)=>{      //textarea 内输入的值
        let {value:val}=ev.target;
        this.setState({val});
    };
    componentDidMount(){  //首次的数据请求，只执行一次
        console.log('挂载');
        this.getArr(true);   //上来先渲染数据
    }

    async componentWillReceiveProps({match:{params}}){          //当父级的数据发生改变的时候，就会进这里
        // console.log(params.id*1)
        let newArr = await this.getData('act=get&page='+(params.id*1));
        this.setState({arr:newArr,val:''});
    }

    click =()=>{            //点击提交评论
        let {val,arr}=this.state;
        if(val){        //输入内容后才让提交  输入内容后，请求数据
            this.getData('act=add&content='+val)
            .then((data)=>{
                if(data.code===0){      //点击提交评论的时候，如果返回的是code 值是0 ,那么就请求数据来渲染页面
                    this.getArr(true);
                  /* this.getData('act=get&page=1')      //因为在获取数据的时候，不能直接将page写死，所以也要获取页码的数据
                    .then((data)=>{
                        console.log(data);
                        this.getData('act=get_page_count')
                        .then((count)=>{
                            if(count.code===0){
                                //console.log(count.count);
                                this.setState({arr:data,val:'',pageNum:count.count});      //将数据传给数组，用来渲染页面
                            }

                        })
                    })*/
                }
            })
        }else{
            alert('请输入内容！');
        }
    }
    //请求数据的公共接口
    getData = async (url)=>{       //请求数据       通一定一个方法，方便以后调用
        let data=await fetch('http://localhost:88/api/weibo?'+url);
        return await data.json();
    }
    //获得数据的公共方法
    getArr = async(offset)=>{
        //console.log(this.props); //可以通过this.props来获取你想要的值，里有一个match,params里有一个id值,就是当前页面的id ,可以通过id 来驱动数据
        let {match:{params}}=this.props;
        let num=params.id;      //就能得到当前的页面的id,将id 值传给current
        //console.log(num);
        let newArr=await this.getData('act=get&page='+num);
        if(offset){     //如果offset 是true 那就让他重新请求数据渲染页面，如果为false 就不让他重新请求数据
            let pageNum=await this.getData('act=get_page_count');       //这是获得当前有多少页的数据 得到的值可以传给数据，用来渲染各个页面的数据
            this.setState({arr:newArr,val:'',pageCount:pageNum.count,current:num});
        }

        this.setState({arr:newArr,val:''});
    }

    //注意：render中不能用setState,会死循环
    render(){
        let {arr,val,getArr,pageCount,current}=this.state;
        let {match:{params}}=this.props;
        current=params.id;
        let newArr=arr.map((e,i)=>{
            return <List {...{
                key:i,
                id:e.id,
                content:e.content,
                like:e.like,
                dislike:e.dislike,
                time:e.time,
                getArr:this.getArr,
                current         //这是当前显示的那一页
            }}/>
        });
        return(
            <div className="nArea">
                <div className="takeComment">
                    <textarea
                        name="textarea"
                        className="takeTextField"
                        id="text"
                        value={val}
                        onChange={this.textChange}
                    ></textarea>
                    <div className="takeSbmComment">
                        <input
                            type="button"
                            id="subInput"
                            className="inputs"
                            value=""
                            onClick={this.click}
                        />
                        <span>(可按 Enter 回复)</span>
                    </div>
                </div>
                <div className="commentOn">
                    <div className="messList" id="div1" style={{"height":"502px"}}>
                        {newArr}
                    </div>
                    <Page
                        pageNum={pageCount}       //将总页数传给子页面
                        current={current}        //点击高亮显示的是哪个页面
                    />
                </div>
            </div>
        )
    }
}
export default Index;