// slick config
$('.colony_team_carousel_1_slides').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.colony_team_carousel_1_prev',
    nextArrow: '.colony_team_carousel_1_next',
    dots: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            speed: 300
        }
      }
    ]
});