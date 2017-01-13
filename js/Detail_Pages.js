
//导航轮播
$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true
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



$(function(){



    //吸顶效果
    $(window).scroll(function(){
        var _scrollTop = $(document).scrollTop();//获取滚动值

        var top = $('.purchase').offset().top;//或许立即购买模块的高度

        if(_scrollTop>top){
            $('.buy').addClass('xd');
        };
        if(_scrollTop<top){
            $('.buy').removeClass('xd');
        }
    })


})






















