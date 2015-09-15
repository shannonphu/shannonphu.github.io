$(document).ready(function() {

	var imgHeight, lineHeight;
	var animate = true;

	// make nav + content divs responsive
	function checkWidth() {
		if ($(window).width() <= 575) {
			$('nav').css("position", "relative");
			$('nav').addClass("small-12 columns");
			$('.content').css("margin-left", 0);
			animate = false;
			// set up project blocks
			$('.project h3').width($('.project img').width());
			$('.project h3').css("line-height", "2em");
		}
		else {
			var navWidth = $('nav').outerWidth();
			$('nav').removeClass("small-12 columns");
			$('nav').css("position", "fixed");
			$('.content').css("margin-left", navWidth + 20);
			projectOverlay();
		}		
	}

	function projectOverlay() {
		// set up project blocks
		$('.project-description').each(function(i, obj) {
			// make width of overlay 100% over img
		    $(this).find('h3').width($('.fotorama').width());
		    // make height of overlay 100% over img
		    imgHeight = $(this).find('img').height();
		    //lineHeight = String(imgHeight) + "px";
		    lineHeight = "2em";
			$(this).find('h3').css("line-height", lineHeight);
			$(".fotorama").css("margin-top", "3.5em");
		});
	}

	function addFotorama() {
		$('.project-description').each(function(i, obj) {
			$(this).find('.image-set').children().wrapAll('<div class="fotorama" data-autoplay="2000"/>');
		});
	}

	addFotorama();
	projectOverlay();
	checkWidth();

	// project block animation based on window width
	if (animate) {
		// project blocks
		$( ".project" ).hover(
		  function() {
		    $(this).find('h3').animate({
		    	'line-height':'2em'
		    }, 'slow');
		    $(this).find('.fotorama').animate({
		    	'marginTop':'3.5em'
		    }, 'slow');
		  }, function() {
		    $(this).find('.fotorama').animate({
		    	'marginTop': 0
		    }, 'slow');
		    imgHeight = $(this).find('img').height();
		    lineHeight = String(imgHeight) + "px";
			$(this).find('h3').animate({"line-height":lineHeight});
		  }
		);

		// set rows for project blocks
		var blocksPerRow;
		if ($(window).width() >= 1025)
			blocksPerRow = 2;
		else if($(window).width() > 575)
			blocksPerRow = 1;
		$('.project-description:nth-child(' + String(blocksPerRow) + 'n)').each(function(index) {
		    $(this).prevAll('.project-description').andSelf().wrapAll('<div class="row"/>');
		});
		$('#project-content > .project-description').wrapAll('<div class="row" />');
	}
	else {
		$(".project h3").css({
			lineHeight: "2em",
			backgroundColor: 'rgba(0,0,0,0.5)'
		});
		$(".fotorama").css("margin-top", "3em");
		$('.project p').show();
	}

	checkWidth();
	$(window).resize(checkWidth);

	// Scroll Speed
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});