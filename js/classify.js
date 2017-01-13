/**
 * Created by Administrator on 2016/11/26 0026.
 */
//回到顶部
$(function(){

    $(window).scroll(function(){
        var top = $(document).scrollTop();//获取滚动值
        if(top>500){
            $('.gotoTop').fadeIn(300);
        }
        if(top<500){
            $('.gotoTop').fadeOut(300);
        }
    })

    $('.gotoTop').click(function(){
        $('html,body').stop().animate({scrollTop:0},500);
    })

    //返回上一页
    $('.prev').click(function(){
        history.go(-1);
    })

})