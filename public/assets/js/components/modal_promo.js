$(document).ready(function(){
    const delay = $('.colony_modal_promo').data('delay');
    const repeat = $('.colony_modal_promo').data('repeat');
    const repeatFrequency = $('.colony_modal_promo').data('repeatFrequency');
    if(repeat === true || Cookies.get('modal') != 'seen') {
        setTimeout(function(){	
            $('.colony_modal_promo').fadeIn();
            if(!repeat) {
                Cookies.set('modal', 'seen', { expires: repeatFrequency });
            }
        }, 3500);
    }
    $('.colony_modal .background, .colony_modal .close').click(function(){
        $(this).parent().fadeOut();
    });
});