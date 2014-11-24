// javascript starts here
// JQuery
$(document).ready(function(){    
	$('.child,.next').mouseenter(function(){
		$(this).animate({
		height: '+=10px'
		});//end of animate
	});
	$('.child,.next').mouseleave(function() {
    	$(this).animate({
        height: '-=10px'
    }); 
	});
});
