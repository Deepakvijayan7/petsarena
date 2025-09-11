
$('.section-1-ul-1').owlCarousel({
    loop:true,
    margin:8,
    stagePadding:5,
    nav:false,
    autoplay:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1200:{
            items:4,
            stagePadding:15
        },
        1300:{
            items:6
        }
    }
})

$('.service-slider').owlCarousel({
    loop:true,
    margin:8,
    stagePadding:5,
    nav:false,
    autoplay:true,
    dots: false,
    center:true,
    responsive:{
        0:{
            items:1,
            nav:true,
        },
        900:{
            items:2,
            center:true,
        },
        1200:{
            items:3
        }
    }
})