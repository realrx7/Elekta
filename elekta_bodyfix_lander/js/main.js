$(document).ready(function(){
	// ON RELOAD SCROLL TO TOP OF PAGE
	$(window).on('beforeunload', function(){
		$(window).scrollTop(0);
	});

	$('input').focus(function()
		{
		  $(this).attr('placeholder','');

		});


	// SUBMIT CONFIRMATION
	MktoForms2.whenReady(function (form){
	// IE9 PLACEHOLDER TEXT FIX
	// Form ONE
	$('#mktoForm_1497 #FirstName').attr('placeholder', '*First Name');
	$('#mktoForm_1497 #LastName').attr('placeholder', '*Last Name');
	$('#mktoForm_1497 #Company').attr('placeholder', 'Company');
	$('#mktoForm_1497 #Email').attr('placeholder', '*Email');
	// Form TWO
	$('#mktoForm_1498 #Company').attr('placeholder', 'Hospital/Institution');
	$('#mktoForm_1498 #Phone').attr('placeholder', 'Phone Number');
	$('#mktoForm_1498 #Marketing_Notes__c').attr('placeholder', 'Questions or Comments');
	$('#mktoForm_1498 #FirstName').attr('placeholder', '*First Name');
	$('#mktoForm_1498 #LastName').attr('placeholder', '*Last Name');
	$('#mktoForm_1498 #Email').attr('placeholder', '*Email');


	$('input, textarea').placeholder();
	    //Add an onSuccess handler
	    form.onSuccess(function(values, followUpUrl){
		   //get the form's jQuery element and hide it
		   form.getFormElem().toggle();
		   $('#contact-us-text').toggle();
		   $('#product-one-synopsis').toggle();
		   var confirmID = 'mktoForm_' + this.id + '-success';
		   console.log(confirmID);
		   document.getElementById(confirmID).style.display = 'block';
		   //return false to prevent the submission handler from taking the lead to the follow up url.
		   return false;
		});
	});
 
	// OVERFLOW HIDDEN
	$('#main').css('overflow-x','hidden');
	$('.navigation-bar').css('overflow-x','hidden');
	$('.close-button').css('display','none');
	
	// OPEN/ CLOSE NAVIGATION BAR MENU
	$('.navigation-button').click(function(){
		$('.navigation-container').css('display', 'block');
		$(this).addClass('open');
		$('.close-button').css('display', 'inline-block');
		$('.navigation-button').css('display', 'none');
		$('#close').css('display','inline-block');
		$('#menu').css('display','none');
	});

	// CLOSE NAVIGATION MENU
	$('.close-button').click(function(){
	 	closeNavigation(this);
	});

	// CTA CONTACT US CLICK EVENT : SHOW/ HIDE CONTACT US CONTAINER 
	$('body').css('overflow-x','hidden');
	$('#wht-down-arrow, #navigation-cta-button, #click-to-contact').click(function(){
		displayContactForm();
	});

	// NAVIGATION CTA NAVIGATION TO CONTACT US FORM
	$("#navigation-cta-button").click(function() {
		animateScroll(230, '#mktoForm_1498');
	});

	// ANIMATION CLICK EVENT / SROLL
	animateClick('#file', 150, '.bg-text');
	animateClick('#play-button', 150, '.body-fix-container');
	animateClick('#download-button', 150, '.green-container');
	animateClick('#users', 410, '.scan-container');

	$("#envelope").click(function() {
		animateScroll(250, 'footer');
		displayContactForm();
		closeNavigation(this);
	});

	// LEARN MORE CTA / NAVIGATION
	$(".learn-more-cta").click(function() {
		animateScroll(130, '.down-arrow');
	});

	// CONTACT US FOOTER ANIMATE
	$("#contact-us-footer").click(function() {
		animateScroll(130, '#contact-us-text');
		$('#contact-us-container').css('display','block');
	});
});

var animateScroll = function(offsetScroll, moveToContainer){
	$('html, body').animate({
		scrollTop: $(moveToContainer).offset().top - offsetScroll
	}, "500");
};

var animateClick = function(clickSelector, offsetScroll, moveToContainer){
	$(clickSelector).click(function() {
		animateScroll(offsetScroll, moveToContainer);
		closeNavigation(this);
	});
};		

 var closeNavigation = function(clickedElement){
	$('.navigation-container').css('display','none');
	$(clickedElement).addClass('closed');
	$('.navigation-button').css('display','inline-block');
	$('.close-button').css('display','none');
	$('#close').css('display','none');
	$('#menu').css('display','inline-block');
 };	 

 var displayContactForm = function(){
	$('#click-to-contact').css('display','none');
	$('#contact-us-container').css('display','block');
	$('#contact-us-text').css('display','block');
 };




