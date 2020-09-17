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
