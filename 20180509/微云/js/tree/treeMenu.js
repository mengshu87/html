/**
 * Created by MS on 2018/5/12.  树型菜单
 */

const treeMenu=document.querySelector('.tree-menu');
function renderTree(pid,num){
    let childArr=t.getChild(pid);       //得到当前传入的pid的所有子元素
    let html='';
    if(!childArr) return '';            //如果没有子元素，就返回一个空字符串
    //console.log(childArr);
    num++; //num 表示当前是第几层
    html+=`<ul style="padding-left:${num*10}px">`;
    childArr.forEach((e,i)=>{           //如果有子元素，就返回相应的子元素
        html+=`<li>
                     <div class="tree-title">
                        <span data-id="${e.id}" class="${t.getChild(e.id)?('open'):('')}"><i></i>${e.title}</span>
                     </div>
                     ${renderTree(e.id,num)}  <!--递归-->
                 </li>`;
    });
    html+=`</ul>`;
    return html;
}
treeMenu.innerHTML=renderTree(-1,-1);       //生成数据
let spans=Array.from(treeMenu.getElementsByTagName('span'));
treeBread(spans);           //树型菜单渲染面包屑
function treeBread(arr){
    arr.forEach(e=>{
        e.onclick=function(){

            arr.forEach(ee=>ee.style.background='');
            //console.log(e.dataset.id);
            e.style.background='#e7f2fe';
            render(e.dataset.id);
            renderNav(e.dataset.id);
            //console.log(e.dataset.id);
    }
    });
}




/*
*
    * <ul>
         <li>
             <div class="tree-title tree-ico close">
                <span><i></i>微云</span>
             </div>
             <ul>
                 <li>
                     <div class="tree-title tree-ico close">
                        <span><i></i>我的音乐</span>
                     </div>
                 </li>
             </ul>
         </li>
     </ul>
* */

