
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
        console.log(top);
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

})















