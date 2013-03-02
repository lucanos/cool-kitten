jQuery(document).ready(function ($) {

    $('body').scrollspy({target: '[role="banner"]'});

    $.stellar();

    anchors = $('a[href^=#]');

    anchors.click(function(event) {

        // get ID from href
        id = $(this).attr('href');

        if ( id === '#' ) {
            // scroll to top
            $('html, body').animate({
                scrollTop: 0
            });
        } else {
            // scroll to element
            $('html, body').animate({
                scrollTop: $(id).offset().top
            });
        }

        event.preventDefault();
    });

});