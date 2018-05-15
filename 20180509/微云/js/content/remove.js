/**
 * Created by MS on 2018/5/12.      移动到
 */
const remove=document.getElementById('remove');
const modelTree=document.querySelector('.modal-tree');
const treeContent=modelTree.querySelector('.content');
const ok=modelTree.querySelector('.ok');
const cancel=modelTree.querySelector('.cancel');
const removeClose=modelTree.querySelector('.icon_close');
let checkedId=-1;           //选中要移动到的id
remove.onclick=function(){
    let pid=folderContent.getElementsByTagName('span')[0].dataset.id;       //得到pid
    let childArr=t.getChild(pid);       //得到当前pid下的文件
    if(childArr&&childArr.some(e=>e.checked)){
        treeContent.innerHTML=renderTree(-1,-1);       //生成弹框内树型结构
        modelTree.style.display='block';
        let contentTreeChilds =treeContent.querySelectorAll('.tree-title');     //得到树型菜单下所有节点名
        //console.log(contentTreeChilds);
        for(let i=0;i<contentTreeChilds.length;i++){        //循环数组，点击要放到的文件名，给它添加背景色
            contentTreeChilds[i].onclick=function(){
                for(let i=0;i<contentTreeChilds.length;i++){
                    contentTreeChilds[i].style.background='';
                }
                this.style.background='rgba(158,213,241,.8)';
                checkedId=this.getElementsByTagName('span')[0].dataset.id;      //通过span 内的data-id 来得到checked
                //console.log(checkedId);
            }
        }
        //判断checkedId是否是自己的id,或者自己的子级、子子级的 页面中
        ok.onclick=function(){
            let removeArr=childArr.filter(e=>e.checked);   //选择要移动的文件
            //console.log(removeArr);
            let checkedData=[];                     //将要移动的文件和文件的子孙级都放入一个数组中
            removeArr.forEach(e=>{
                let arr=t.getChilds(e.id).concat(data[e.id]);       //得到当前id的所有子孙级元素，和自己
                //console.log(arr);
                checkedData.push(...arr);       //用扩展运算符把这些都放入到一个数组中
            });
            //console.log(checkedData);
            //如果要移动到的不是自己和自己的子孙级元素，那么就可以移动
            if(!checkedData.some(e=>e.id==checkedId)){     //只要要移动的广内有一个文件的id 和checkedId 一样
                removeArr.forEach(ee=>{           //循环数组 找到那个一样的元素，
                    ee.pid=checkedId*1;            //将那个元素的pid改成 选中的要移动到的id;
                    ee.checked=false;
                })
            }else{
                tips('请选择要移动到的正确文件！')
                //console.log('请选择要移动到的正确文件！');
            }
            render(pid);//重新渲染数据
            treeMenu.innerHTML = renderTree(-1,-1); //渲染树型菜单
            let spans=Array.from(treeMenu.getElementsByTagName('span'));
            treeBread(spans);           //树型菜单渲染面包屑
            modelTree.style.display='none';
        }
        cancel.onclick=removeClose.onclick=function(){
            modelTree.style.display='none';
        }
    }else{
        tips('请选择要移动的文件！');
        //alert('请选择要移动的文件！');
    }


}
