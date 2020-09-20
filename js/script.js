'use strict';

var mixer = mixitup('.works_row');
jQuery(function(){
    $('#works_row').mixItUp({
        transitionSpeed: 450,

        callbacks: {
            onMixFail: function(state){
                alert('No elements found matching '+state.activeFilter);
            },
            onMixEnd: function(state){
                console.log(state.activeFilter);
            }
        }
    });
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    center:true,
    mouseDrag:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
