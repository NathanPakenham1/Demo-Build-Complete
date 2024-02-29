$(document).ready(function(){
    const delay = $('.colony_popup_promo').data('delay');
    const repeat = $('.colony_popup_promo').data('repeat');
    const repeatFrequency = $('.colony_popup_promo').data('repeatFrequency');
    if(repeat === true || Cookies.get('popup') != 'seen') {
        setTimeout(function(){	
            $('.colony_popup_promo').fadeIn();
            if(!repeat) {
                Cookies.set('popup', 'seen', { expires: repeatFrequency });
            }
        }, delay);
    }
    $('.colony_popup_close').click(function(){
        $(this).parent().fadeOut();
    });
});