$(document).ready(function() {
    var headerHeight = $('.colony_nav').outerHeight();
    var navPadding = $('.nav_padding');
    if ($('.colony_nav').hasClass('absolute') || $('.colony_nav').hasClass('fixed')) {
        navPadding.css('height', headerHeight + navPadding.outerHeight() + 'px');
    }
});

