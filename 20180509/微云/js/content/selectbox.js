/**
 * Created by MS on 2018/5/10.          框选
 */
//获取元素
const folderContent=document.querySelector('.folder-content');
const sectionBox=document.getElementById('section');

//生成选框
folders.onmousedown=function(ev){
    if(ev.target.className!=='folders') return;  //为了防止点到文件夹身上，只要目标点不是folders,就不让他创建框。
    let div=document.createElement('div');
    div.className='kuang';
    folderContent.appendChild(div);         //鼠标按下时，创建的div 显示
    let checkedArr=[];      //创建一个数组，用来存放当前的页面中有几个文件给框选了
    let foldersChild=Array.from(folders.children);      //得到当前页面有多少个文件
    foldersChild.forEach((e,i)=>{       //遍历数组，将当前页面的所有文件添加到数组中去
        //console.log(e.dataset.id);
        checkedArr.push(data[e.dataset.id]);
    });
    //获取点击的时候,div的位置。
    let disX=ev.pageX;
    let disY=ev.pageY-sectionBox.offsetTop;
    document.onmousemove=function(ev){
        let l2=ev.pageX;
        let t2=ev.pageY-section.offsetTop;
        div.style.width=Math.abs(l2-disX)+'px';
        div.style.height=Math.abs(t2-disY)+'px';
        div.style.left=Math.min(l2,disX)+'px';      //取最后的点与刚点击下时的两个值的最小值
        div.style.top=Math.min(t2,disY)+'px';
        //遍历数组，发生碰撞
        foldersChild.forEach((e,i)=>{
             if(e.classList.contains('new')){
                //console.log(1);
                return;                 //forEach 是没有continue,所以不能用下面for循环的continue。 只能用return
            };
             //if(e.classList.contains('new')) continue;
             let id=e.dataset.id;        //获取当前元素对应的id值
             let offset=t.bong(div,e); //将div 去当前页面的元素去碰撞 会返回布尔值，如果所有的数据的checked=true后让全选按钮选中
             data[id].checked=offset;        //装数据里的checked的值改成碰撞的状态
             e.className=offset?'file-item hov':'file-item';     //框选住后，class名都要改变
             //console.log( e.getElementsByTagName('i'));
             e.getElementsByTagName('i')[0].className=offset?'checked':''; //getElementByTagName获取的是复数
             if(checkedArr.length){      //空数据[].every(e=>e.checked) 返回的也是true;  所以，必须用checkedArr.length进行判断
                 checkedAll.className=checkedArr.every(e=>e.checked)?'checked':'';
             }else{
                checkedAll.className='';
             }
        });
        /*for(let i=0;i<foldersChild.length;i++){
            if(foldersChild[i].classList.contains('new')) continue;
            let id=foldersChild[i].dataset.id;
            let offset=t.bong(div,foldersChild[i]);
            data[id].checked=offset;
            foldersChild[i].className=offset?'file-item hov':'file-item';
            foldersChild[i].getElementsByTagName('i')[0].className=offset?'checked':'';
            if(checkedArr.length){      //空数据[].every(e=>e.checked) 返回的也是true;  所以，必须用checkedArr.length进行判断
                checkedAll.className=checkedArr.every(e=>e.checked)?'checked':'';
            }else{
                checkedAll.className='';
            }

        }*/
        return false;
            //默认行为，如果把return false 放到后面，就会把创建文件时，input 失焦的默认行为给取消掉
                            //所以，要放到move 内。
    }
    document.onmouseup=function(){
        div.remove();
        document.onmousemove=document.onmouseup=null;
    }

}

