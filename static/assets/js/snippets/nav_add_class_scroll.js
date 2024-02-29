$(window).on("scroll", function () {
    var position = $(window).scrollTop();
    $('header').toggleClass('scrolled', position > 50);
    $('.sidebar').toggleClass('scrolled', position > 50);
});