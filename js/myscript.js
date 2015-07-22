$(function(){
	
	"use strict";

	//Activate scrollspy
	$('body').scrollspy({
			target: 'header .navbar'
		});

//Add inbody class if this is non a first page #featured
	var hash = $(this).find( 'li.active a' ).attr('href');

	if (hash !== '#featured'){
		$('header nav').addClass('inbody');
	}else{
		$('header nav').removeClass('inbody');
	}


//Add inbody class when scrollspy event fires
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function(){
			
		var hash = $(this).find( 'li.active a' ).attr('href');

		if (hash !== '#featured'){
			$('header nav').addClass('inbody');
		}else{
			$('header nav').removeClass('inbody');
		}
	
	});



	

	//Set carousel interval
	$('.carousel').carousel({
	  interval: false
});

});
