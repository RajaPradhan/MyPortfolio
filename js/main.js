$(function() {
	
	//jQuery for page scrolling feature - uses the scrollTop and animate functions
	//tiles click actions	
	$('.scroll-link').click(function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	
	// scroll function
	function scrollToID(id, speed){
		var offSet = 0;
		var targetOffset = $(id).offset().top - offSet;
		$('html,body').animate({scrollTop:targetOffset}, speed);
	}
	
	// scroll to top action
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
	//fancybox
	$(".fancybox").fancybox({
		openEffect: 'fade',
		closeEffect: 'fade',
		nextEffect: 'fade',
		prevEffect: 'fade',
	    helpers: { 
			title: {
				type: 'float'
			}
		}
    });
	
	//Google Map
	function initialize() {
		var map_canvas = document.getElementById('map');
		var map_options = {
		  center: new google.maps.LatLng(12.963632,77.597122),
		  zoom: 8,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(map_canvas, map_options);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
});