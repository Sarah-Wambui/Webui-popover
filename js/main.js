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

(function() {
    $('.gallery-link').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.find('figcaption').text() || item.el.attr('title');
        }
      },
      zoom: {
        enabled: true
      },
      // duration: 300
      gallery: {
        enabled: true,
        navigateByImgClick: false,
        tCounter: ''
      },
      disableOn: function() {
        return $(window).width() > 640;
      }
    });
  
  }).call(this);

  console.log('This is in the staging branch')
  function handleAlert(){
    return alert('This is an alert');
  }
  handleAlert()
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLGFBQW5CLENBQ0U7SUFBQSxJQUFBLEVBQU0sT0FBTjtJQUNBLG1CQUFBLEVBQXFCLElBRHJCO0lBRUEsY0FBQSxFQUFnQixLQUZoQjtJQUdBLFNBQUEsRUFBVyw4QkFIWDtJQUlBLEtBQUEsRUFDRTtNQUFBLFdBQUEsRUFBYSxJQUFiO01BQ0EsUUFBQSxFQUFVLFFBQUEsQ0FBQyxJQUFELENBQUE7ZUFDUixJQUFJLENBQUMsRUFBRSxDQUFDLElBQVIsQ0FBYSxZQUFiLENBQTBCLENBQUMsSUFBM0IsQ0FBQSxDQUFBLElBQXFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBUixDQUFhLE9BQWI7TUFEN0I7SUFEVixDQUxGO0lBUUEsSUFBQSxFQUNFO01BQUEsT0FBQSxFQUFTO0lBQVQsQ0FURjs7SUFXQSxPQUFBLEVBQ0U7TUFBQSxPQUFBLEVBQVMsSUFBVDtNQUNBLGtCQUFBLEVBQW9CLEtBRHBCO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0FaRjtJQWVBLFNBQUEsRUFBVyxRQUFBLENBQUEsQ0FBQTthQUNULENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxLQUFWLENBQUEsQ0FBQSxHQUFvQjtJQURYO0VBZlgsQ0FERjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJCgnLmdhbGxlcnktbGluaycpLm1hZ25pZmljUG9wdXBcbiAgdHlwZTogJ2ltYWdlJ1xuICBjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlXG4gIGNsb3NlQnRuSW5zaWRlOiBmYWxzZVxuICBtYWluQ2xhc3M6ICdtZnAtd2l0aC16b29tIG1mcC1pbWctbW9iaWxlJ1xuICBpbWFnZTogXG4gICAgdmVydGljYWxGaXQ6IHRydWVcbiAgICB0aXRsZVNyYzogKGl0ZW0pIC0+XG4gICAgICBpdGVtLmVsLmZpbmQoJ2ZpZ2NhcHRpb24nKS50ZXh0KCkgfHwgaXRlbS5lbC5hdHRyKCd0aXRsZScpXG4gIHpvb206XG4gICAgZW5hYmxlZDogdHJ1ZVxuICAgICMgZHVyYXRpb246IDMwMFxuICBnYWxsZXJ5OlxuICAgIGVuYWJsZWQ6IHRydWVcbiAgICBuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IGZhbHNlXG4gICAgdENvdW50ZXI6ICcnXG4gIGRpc2FibGVPbjogLT5cbiAgICAkKHdpbmRvdykud2lkdGgoKSA+IDY0MCAiXX0=
  //# sourceURL=coffeescript

                  