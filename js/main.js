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
		$('#wht-down-arrow').click(function(){
			$('#contact-us-container').css('display','block');

		});

	$(window).load( function(){
		responsiveMinHeight();
});
});


