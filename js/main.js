$('a[href^=#]').click(function(){
    event.preventDefault();
    var target = $(this).attr('href');
    if (target == '#')
      $('html, body').animate({scrollTop : 0}, 600);
    else
      $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 600);
});