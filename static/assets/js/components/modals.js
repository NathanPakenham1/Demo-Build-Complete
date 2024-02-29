$(document).ready(function(){
    $('.open_colony_modal').click(function(){
        var imgSrc = $(this).attr('data-img-src');
        var videoSrc = $(this).attr('data-video-src');
        $('.colony_modal_on_demand').fadeIn();
        $('.colony_modal_on_demand .img_dynamic').attr('src', imgSrc);  
        $('.colony_modal_on_demand .video_dynamic iframe').attr('src', videoSrc);
    });
    $('.colony_modal .background, .colony_modal .close').click(function(){
        $(this).parent().fadeOut();
        $('.colony_modal .img_dynamic').attr('src', '');
        $('.colony_modal .video_dynamic iframe').attr('src', '');
    });
});