$(function(){
    $('a[href^=#]').click(function(){
        var speed    = 750;
        var href     = $(this).attr("href");
        var target   = $( href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        
        //滑らかスクロール
        $('body,html').animate({scrollTop:position},speed,'swing');
        return false;        
    });
    
    $(window).on("load scroll",function(){
        var Scroll  = $(window).scrollTop();
        var Display = 900;
        
        if( Scroll >= Display ){
            $("header").fadeIn("100");
        }else{
            $("header").fadeOut("100");
        }
        
    
    });
    
});