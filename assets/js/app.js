var doc = $( document );
var w = $( window );

doc.ready(function() {
    // slideshow
    $('.slideshow__carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev carousel-btn carousel-btn-prev" style="width: 60px; height: 60px;"><i class="fa-regular fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next carousel-btn carousel-btn-next" style="width: 60px; height: 60px;"><i class="fa-regular fa-arrow-right"></i></button>',
        responsive: []
    });

    // header
    var prevScroll =  w.scrollTop() || doc.scrollTop();
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var header = $('.header');

    var toggleHeader = function(direction, curScroll) {
        if (direction === 2 && curScroll > 52) { 
            header.addClass('hide');
            prevDirection = direction;
        }
        else if (direction === 1) {
            header.removeClass('hide');
            prevDirection = direction;
        }
    };

    w.scroll(function () {
        curScroll = w.scrollTop() || doc.scrollTop();
        if (curScroll > prevScroll) { 
            direction = 2;
        }
        else if (curScroll < prevScroll) { 
            direction = 1;
        }
    
        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }
        
        prevScroll = curScroll;
    })
    
    $(".header .header__inner .header__btn-bars").click(function(){
        $(".header .header__menu").slideToggle();
    });
});