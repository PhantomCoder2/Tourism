/*OWL CAROUSEL*/ 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1,
            loop:true
        },
        600:{
            items:3,
            loop:true
        },
        1000:{
            items:5,
            loop:true
        }
    }
})