/**
 * Created by MS on 2018/5/11.    创建文件夹
 */

const create=document.querySelector('#create');
create.onclick=function(){
    //获取当前是处于哪个页面下
    let pid=breadmenu.getElementsByTagName('span')[0].dataset.id;
    //console.log(pid);
    //获取当前pid下的所有的文件夹
    let childsArr=t.getChild(pid);
    //console.log(childsArr);
    checkedAll.className='';        //新建文件夹时要将全选按钮清空
    createFolder(childsArr,pid);
}
/*
*   先用Dom创建数据，等当前创建的文件夹失焦后再创建数据，并渲染数据
*
* */
//创建文件夹

function createFolder(arr,pid){
    //如果当前页面下有文件就可以新建文件夹，没有，就将暂无文件隐藏，并新建文件
    let num=0;
    if(arr){    //如果数组存在，就去筛选当前的所有的文件是否包含新建文件的名字的
        let filterArr=arr.filter(e=>e.title.includes('新建文件夹'));
        if(filterArr.length)num=filterArr.length+1;
        //console.log(filterArr.length);
    }else{
       fEmpty.style.display='none';
    }
    //文件夹的结构
    let div=document.createElement('div');
    div.className='file-item new';      //由于框选的过程是根据数据来判断的，所以要添加一个new,在selectbox.js使用
    let img=document.createElement('img');
    img.src='img/folder-b.png';
    let span=document.createElement('span');
    span.style.display='none';
    let input=document.createElement('input');
    input.className='editor';
    input.style.display='block';
    input.value= '新建文件夹'+(num?num:'');
    input.onblur=function(){        //input 失焦后创建数据
        //失焦时也要判断当前文件是否有重名的，如果有，就继续聚焦修改，没有就创建数据
        let val=this.value;
        if(arr&&arr.some(e=>e.title==val)){
            console.log(1);
            this.focus();
            this.select();
            return;
        }else{
            let createId=new Date().getTime(); //生成唯一的id值   时间戳的三种方法 1.new Date().getTime() 2.Date.now()   3.+new Date();
            data[createId]={        //创建数据
                "id": createId,
                "pid": pid,
                "title": val,
                "type": "file",
                "checked":false
            };
            render(pid);        //渲染数据
            treeMenu.innerHTML = renderTree(-1,-1);
            let spans=Array.from(treeMenu.getElementsByTagName('span'));
            treeBread(spans);     //树型菜单渲染面包屑
            tips('新建文件夹成功!');
        }
        //console.log(val);
    };
    let i=document.createElement('i');
    i.className='';
    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(input);
    div.appendChild(i);
    folders.appendChild(div);
    input.select();     //让新建文件夹的名字处于选中的状态
    //console.log(data);
}


/*
*
        * <div class="file-item">
             <img src="img/folder-b.png" alt="" />
             <span class="folder-name">JS基础课程</span>
             <input type="text" class="editor"/>
             <i class="checked"></i>
         </div>
 */




