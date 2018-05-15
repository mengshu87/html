/**
 * Created by MS on 2018/5/12.      所有页面的提示动画
 */
const tip=document.querySelector('.full-tip-box');
function tips(text){
    const divTip=tip.querySelector('.tip-text');
    tip.style.opacity=0;
    divTip.innerHTML=text;
    t.moveFn({
        el:tip,
        attr:{
            top:28,
            opacity:1,
        },
        d:500,
        callback:function(){
            setTimeout(function(){
                t.moveFn({
                    el:tip,
                    attr:{
                        top:-40,
                        opacity:0
                    },
                    d:500

                })
            },2000);

        }

    })
}
