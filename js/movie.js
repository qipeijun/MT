/**
 * Created by Administrator on 2016/11/25 0025.
 */

//导航轮播
$(function(){


    var swiper = new Swiper('.swiper-container', {
        scrollbar : '.swiper-scrollbar',
        scrollbarHide : true,
        slidesPerView : 3,
        paginationClickable : true,
        spaceBetween : 30,
        freeMode : true
    });
})

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



//弹出列表
$(function(){
    $('.main .title').click(function(){
        var top = $('.main .title').offset().top;
        $('html,body').stop().animate({scrollTop:top},0);
        $('.option').stop().fadeIn(100);
        $('.option .out').stop().slideDown(200)
    })

    $('.option .list li').click(function(){
        $('.option .out').slideUp(200);
        $('.option').fadeOut(100);
        var top = $('.main .title').offset().top;
        $('html,body').stop().animate({scrollTop:top},0);

    })

    $('.option .wrap a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })



})











