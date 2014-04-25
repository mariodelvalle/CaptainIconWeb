$(document).ready(function() {

	/* ===========================================================
	                            GLOBAL
	   =========================================================== */

	var window_height = $(window).height();
	var $section = $('.row');

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
		$('body').addClass('mobile');
	}

	function page_adjustments() {
		$('#nav-down').click(function(){
			$('html,body').animate({
			    scrollTop: $("#welcome").offset().top
			}, 1000);
			return false;
		});
    }
    page_adjustments();

   	function section_active(){
   		if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){
			scroll_top = $(window).scrollTop();
		
			$section.each(function() {
				$current_section = $(this);

				if (scroll_top>=($current_section.offset().top-window_height*2/3)) {
					$current_section.addClass('active');
				} else {
					$current_section.removeClass('active');
				}
			});
		};
   	}
   	section_active();

	$(window).scroll(function(){
		section_active();
	});

	if (window.innerWidth > 960){
		section_active();
	}
		
	/* ===========================================================
	                            STEPS
	   =========================================================== */

	$('.onhover').hide();
	$('div.image').hover(function(){
		$(this).find('.onhover').fadeIn(1000);
		},function(){
		$(this).find('.onhover').fadeOut(1000);
	})

	/* ===========================================================
	                            COLORS
	   =========================================================== */

	jQuery('#icon').css('background-color', '#f6e5d0');

	jQuery('.color-list li span').click(function(){
		jQuery('.color-list li.selected').removeClass('selected');
		jQuery(this).parent().addClass('selected');
		var colors = new Array('#f6e5d0','#e6c7b9','#d3807b','#c5e3c7','#bfe1dd','#8c4a62','#594255','#726873','#bfb2a3','#c0c0c0');
		jQuery('#icon').css('background-color',colors[jQuery(this).parent().index()]);
	});

	jQuery('#icon').click(function(){
		jQuery('.color-list li.selected').nextOrFirst('li').find('span').click();
	});

});

