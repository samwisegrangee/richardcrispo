
$(document).ready(function() {
	// Do stuff when the page is ready...

	// Form Stuff
	$('#results-contact-form').attr('action', 'https://formspree.io/' + 'mindsurfer24' + '@' + 'gmail' + '.' + 'com');


	$('.toggler').click(function(){
		var totalHeight = 0;

		$(this).parent().children().each(function(){
		    totalHeight = totalHeight + $(this).outerHeight(true);
		});
		$(this).parent().css('height', totalHeight);
		$(this).css('opacity', '0');
	});
	$('.closer').click(function(){
		var $parent = $(this).parent();
		$parent.css('height', '40px');

		$('.toggler', $parent).css('opacity', '1');
	});

	// Scroll Events
	$(window).on('scroll', function () {
		var scrolled = $(window).scrollTop();
		var viewport = $(window).width();

		if (viewport > 768) {
			$('.parallax img').css('margin-top', 'calc(-20% - ' + (scrolled * .2) + 'px)');
		}
	});

});
