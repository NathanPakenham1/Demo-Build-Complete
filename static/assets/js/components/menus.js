$(document).ready(function() {
    $.fn.controlMenu = function(action) {
        if(action == 'open') {
            $('.colony_menu').addClass('open');
            $('.colony_menu .content, .colony_menu_wrp').fadeIn();
        }
        if(action == 'close') {
            $('.colony_menu').removeClass('open');
            $('.colony_menu .content').hide();
            $('.colony_menu_wrp').fadeOut();
        }
        }

        $('.menu_open').click(function() {
            $.fn.controlMenu('open');
        });
    
        $('.menu_close, .colony_menu .links a, .colony_menu_wrp').click(function() {
            $.fn.controlMenu('close');
    });
});