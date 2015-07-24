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

  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === 
            this.pathname.replace(/^\//,'') && 
                  location.hostname === this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        if (target.length) {
                            $('html,body').animate({
                                 scrollTop: target.offset().top+2
                             }, 500);
                             return false;
                             } //target.length
                             } //click function
                             }); //smooth scrolling




	

	//Set carousel interval
	$('.carousel').carousel({
	  interval: false
});

});
