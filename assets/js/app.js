$( document ).ready(function() {
    $('.slideshow__carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev carousel-btn carousel-btn-prev" style="width: 60px; height: 60px;"><i class="fa-regular fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next carousel-btn carousel-btn-next" style="width: 60px; height: 60px;"><i class="fa-regular fa-arrow-right"></i></button>',
    });
});