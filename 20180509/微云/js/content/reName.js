/**
 * Created by MS on 2018/5/12.    重命名
 */
const rename=document.getElementById('rename');
rename.onclick=function(){
    let pid=folderContent.getElementsByTagName('span')[0].dataset.id;       //还得是通过span 元素来找到当前的页面
    let reNameArr=t.getChild(pid);      //获取当前所有文件的数组
    let reNameArr2=reNameArr && reNameArr.filter(e=>e.checked); //选择出要重命名的文件
    //console.log(reNameArr2);
    if(reNameArr2&& reNameArr2.length<2){  //重命名的时候的文件不能同时选择两个
        let divs=Array.from(folders.children);      //变成数组
        divs.forEach(e=>{
            if(e.classList.contains('hov')){    //找到点击的要重命名的文件名
                let span= e.getElementsByTagName('span')[0];    //获取当前元素下的span 和input
                let input= e.getElementsByTagName('input')[0];
                span.style.display='none';      //让span 隐藏
                input.style.display='block';    //input 显示
                input.value=span.innerHTML;
                input.focus();
                input.select();
                input.onblur=function(){        //当input 失焦时，去查看当前文件下是否有名字一样的
                    let val=input.value;        //得到当前重命名后的文件的文件名
                    //console.log(val);
                    let same=reNameArr.some(e=>{//判断当前页面下的所有文件名是不是和重命名的文件的文件名一样
                            if(e.title!=reNameArr2[0].title){      //同时也要排除他没有改名字的情况
                                return e.title==val;
                            }
                        });
                    console.log(same);
                    if(reNameArr&&same){       //如果为true 表示有相同的文件，那么就让input重新聚焦修改名字
                        tips('文件名冲突！');
                        //console.log('文件名冲突！');
                        this.focus();
                        this.select();
                    }else{
                        console.log(e);
                        data[e.dataset.id].title=val;     //如果没有重复后，就将数组中的title值改变，再渲染数组
                        data[e.dataset.id].checked=false;       //将选中的元素取消选中
                        render(pid);
                        treeMenu.innerHTML = renderTree(-1,-1); //渲染树型菜单
                        let spans=Array.from(treeMenu.getElementsByTagName('span'));
                        treeBread(spans);           //树型菜单渲染面包屑
                        //console.log(data);
                    }
                }
            }
        })
    }else{
        tips('请选择要重命名的文件！');
        //alert('请选择要重命名的文件！');
    }
}
