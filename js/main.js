$(document).ready(function (){
    $(".course-carousel").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {breakpoint: 840, settings: {slidesToShow: 3, slidesToScroll: 3,},},
            {breakpoint: 620, settings: {slidesToShow: 2, slidesToScroll: 2,},},
            {breakpoint: 480, settings: {slidesToShow: 1, slidesToScroll: 1,},},
        ],
    });

    $(' a.has-popover').webuiPopover({
        content: function () {
            var popoverContent = $('.webui-popover-content').html();
            
            // Check window width and adjust popover options
            if ($(window).width() >= 840) {
                return popoverContent; // Use horizontal placement
            } else {
                return popoverContent; // Use vertical placement
            }
        },
        trigger: 'hover',
        animation: null,
        delay: {
            show: null,
            hide: null
        },
        width: function () {
            // Adjust width based on window width
            return $(window).width() >= 840 ? 330 : 335;
        },
        placement: function () {
            // Adjust placement based on window width
            return $(window).width() >= 840 ? 'horizontal' : 'vertical';
        },
        top: function () {
            // Adjust top position based on window width
            return $(window).width() < 840 ? 5000 : null;
        }
    });
    

}); 
                  