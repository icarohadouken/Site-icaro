$(window).on('scroll', function(){
    if($(window).scrollTop()) {
        $('nav').addClass('sticky-black');
    } else {
        $('nav').removeClass('sticky-black');
    }
})