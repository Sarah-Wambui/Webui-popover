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

    $(' a.has-pop').webuiPopover({
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
function toggleAccordion(header) {
    var content = header.nextElementSibling.querySelector('.accordion-content');
    var icon = header.querySelector('.accordion-icon i');

    // Check if the clicked accordion is currently open
    var isOpen = content.style.display === 'block';

    // Close all accordion items and reset icons
    var allAccordions = document.querySelectorAll('.accordion-content');
    var allIcons = document.querySelectorAll('.accordion-icon i');
    allAccordions.forEach(function (accordion) {
        accordion.style.display = 'none';
    });
    allIcons.forEach(function (itemIcon) {
        itemIcon.className = 'fas fa-plus'; // Reset all icons to +
    });

    // Toggle the clicked accordion item
    if (!isOpen) {
        content.style.display = 'block';
        icon.className = 'fas fa-times'; // Change icon to X when opened
    } else {
        icon.className = 'fas fa-plus'; // Change icon to + when closed
    }    
}
var acc = document.getElementsByClassName("accordion-header");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    // Close all other accordions
    for (var j = 0; j < acc.length; j++) {
    if (acc[j] !== this) {
        acc[j].classList.remove("active");
        var otherPanel = acc[j].nextElementSibling;
        otherPanel.style.maxHeight = null;
    }
    }

    // Toggle the clicked accordion
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    }
});
}

                  