$(document).ready(function(){
	$('#main').css('overflow-x','hidden');
	$('.navigation-bar').css('overflow-x','hidden');
	$('.close-button').css('display','none');
	$('.navigation-button').click(function(){
		$('.navigation-container').css('display', 'block');
			$(this).addClass('open');
				if($(this).hasClass('open') ){
					$('.close-button').css('display', 'inline-block');
					$('.navigation-button').css('display', 'none');
					
					$(this).addClass('closed');
					$('#close').css('display','inline-block');
					$('#menu').css('display','none');
				}; 
			});
		$('.close-button').click(function(){
			$('.navigation-container').css('display','none');
			$(this).addClass('closed');
			if($(this).hasClass('closed') ){
				$('.navigation-button').css('display','inline-block');
				$('.close-button').css('display','none');
				$('#close').css('display','none');
				$('#menu').css('display','inline-block');
			}

		});
		$('body').css('overflow-x','hidden');

		function responsiveMinHeight(){
		var height = $('#bioC').height();
		$('#cameraMan').css('min-height', height); 
		var height = $('#lensC').height();
		$('#formImg').css('min-height', height); 
}
	$(window).load( function(){
		responsiveMinHeight();
});
});

// loads > menu shows
// click the open menu > hamburger icon
// menu hides
// dropdown opens



// $(document).ready(function(){
// 	$('#navBar').click(function(){
// 		$('nav').toggle(200);
// 		$(this).toggleClass('active');
// 		if ( $(window).innerWidth() < 533 ){
// 			$('#pCont').toggle(200);
// 		}
// 	});
// 	$('.navLink').click(function(event){
// 		event.preventDefault();
// 		$('#pCont').show(200);
// 		$('nav a.active').removeClass('active');
// 		$(this).addClass('active');
// 		var hrf = $(this).attr('href');
// 		hrf = $(hrf).offset();
// 		var headerHeight = parseInt( $('#headerCont').css("line-height") );
// 		$('html, body').animate( { scrollTop: hrf.top - headerHeight + 1} );
// 		if($('#navBar').is(':visible') ){
// 			$('nav').hide(200);
// 			$('#navBar').removeClass('active');	
// 		}
// 	});
// 	responsiveMinHeight();
// });
// $( window ).resize( function(){	
// 	responsiveMinHeight();
// });	
function responsiveMinHeight(){
	var height = $('#bioC').height();
	$('#cameraMan').css('min-height', height); 
	var height = $('#lensC').height();
	$('#formImg').css('min-height', height); 
}
$(window).load( function(){
	responsiveMinHeight();
});


// STEPS

// click navigation icon
// open navigation navigation-container
// add class
// navigation-button now has a class of open
// if navigation-button has a class of open
// show the close-button
// close button is clicked
// add class "closed"
