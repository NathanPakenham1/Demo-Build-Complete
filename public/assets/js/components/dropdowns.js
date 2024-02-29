$(document).ready(function() {
    $('.control_dropdown').click(function() {
        var dropdown = $(this).find('.colony_dropdown');
        var left = ($(this).width())/2 + 'px';
        dropdown.css('left', left);
        $('.colony_dropdown').not(dropdown).hide();
        $('.control_dropdown').not(this).removeClass('active');
        $(this).toggleClass('active');
        dropdown.toggle();
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.control_dropdown').length) {
            $('.colony_dropdown').hide();
            $('.control_dropdown').removeClass('active');
        }
    });
});

$(document).ready(function() {
    $('.colony_menu_dropdown').click(function() {
        const dropdown = $(this);
        $('.colony_menu_dropdown').not(dropdown).removeClass('open');
        $(dropdown).toggleClass('open');
    });
    $('.colony_menu_dropdown .sub_links a').click(function() {
        $('.colony_menu_dropdown').removeClass('open');
    });
});