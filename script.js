
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
const mybtn= document.getElementById('stop');
function scrollToTop(){
    window.scroll({
        top:0,
        left:0,
        behavior:'smooth'
    });
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybtn.style.display = "block";
  } else {
    mybtn.style.display = "none";
  }
}