$(document).ready(function() {
  $('.menu-icon').click(function() {
    $('.site-header__content').slideToggle(500);
  });//end slide toggle
   $(window).resize(function() {		
		if (  $(window).width() > 960 ) {			
			$('.site-header__content').removeAttr('style');
		 }
	});//end resize
  //	$(function() {
  //		$('#main').smoothState();
	//});
});//end ready