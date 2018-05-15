/**
 * Created by MS on 2018/5/12.          删除文件
 */

const del=document.getElementById('del');
const tanbox=document.getElementById('tanbox');
del.onclick=function(){
    let pid=folderContent.getElementsByTagName('span')[0].dataset.id;  //通过面包屑中的span的data-id 来获取当前页面的pid;
    let arr=t.getChild(pid);        //获取当前pid 下的所有文件夹都放到数组中。
    if(arr&&arr.some(e=>e.checked)){ //只有当当前的数组中的文件夹至少有一个能选中的时候才能弹页面。
        tanbox.style.display='block';
    }else{
        tips('请选择要删除的文件！');
        //alert('请选择要删除的文件！');
    }
    tanbox.onclick=function(ev){        //通过ev 来找元素
        if(ev.target.innerHTML==='确定'){
            arr.forEach(e=>{            //循环数组
                console.log(1);
                if(e.checked){          //如果有选中的，就开始进行删除
                    let allDelFold=t.getChilds(e.id).concat(data[e.id]);        //得到要删除的文件以及他的所有子文件
                    console.log(allDelFold);
                    allDelFold.forEach(e=>delete data[e.id]);
                }
            })
            render(pid);        //删除后再重新渲染数据
            tanbox.style.display='none';   //弹框隐藏
            treeMenu.innerHTML = renderTree(-1,-1); //渲染树型菜单
            tips('删除文件夹成功！')
            let spans=Array.from(treeMenu.getElementsByTagName('span'));
            treeBread(spans);           //树型菜单渲染面包屑

        }
        if(ev.target.innerHTML==='取消'||ev.target.innerHTML==='X'){
            tanbox.style.display='none';
        }
    }

}