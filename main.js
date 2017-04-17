var data = { projects: [
    {
        title: "Bing 2016 Olympics Search Experience",
        link: "" ,
        description: "During my summer 2016 internship at Microsoft, I worked in Bing Experiences to help build the Olympics portal. I specifically worked on the Events to Watch module which showed the top 5 country-specific events to watch of the day. These events were determined through machine learning by Bing Predicts and were predicted to be significant based off of sport popularity, predicted world records, participating athletes, and more. Events to Watch was also localized and translated for all markets.", 
        tools: "C# .NET", 
        images: [
            "img/olympics/olym2.png",
            "img/olympics/olym4.png"
        ]
    },
    {
        title: "Kaleidoscope",
        link: "http://kaleidoscope.dailybruin.com" ,
        description: " is an application that lets authors build their own online flatpage through reuseable pieces such as headers, subheads, images, quotes, and text sections. This dashboard saves developer time by generating the HTML and CSS of a webpage that they previously manually made for articles.", 
        tools: "React.js node.js Docker", 
        images: [
            "img/kaleidoscope/kaleidoscope1.png",
            "img/kaleidoscope/kaleidoscope2.png",
            "img/kaleidoscope/kaleidoscope3.png"
        ]
    },    
    {
    	title: "Spectrum",
    	link: "http://dailybruin.com/category/spectrum/" ,
    	description: "by the Daily Bruin is a photo gallery showing high quality photosets taken by newsroom photographers. View all the galleries that exist or browse through a slideshow of a gallery of interest!", 
    	tools: "PHP JavaScript Wordpress API", 
    	images: [
    		"img/spectrum/spectrum1.JPG",
    		"img/spectrum/spectrum3.JPG"
    	]
    },
    {
    	title: "oceanize",
    	link: "https://oceanize.herokuapp.com/" ,
    	description: "is an application that makes you happy to be productive and organized during any conversation or meeting through a built-in chat server! Create limitless creative, resizeable, and draggable digital note-taking stickies and minimize them to store in a powerful dynamic note container that creates more room as more notes are added.", 
    	tools: "node.js socket.io paper.js", 
    	images: [
    		"img/oceanize/oceanize-1.png"
    	]
    },
    {
    	title: "xspense",
    	link: "https://xspense.herokuapp.com/" ,
    	description: "| A Django powered web application that aids in managing daily finances. Organized in a budget-expense format. Users can log in and track expenses and will be notified if they have gone over budget.", 
    	tools: "Python Django Javascript", 
    	images: [
    		"img/xspense/xspense-overview.png",
    		"img/xspense/xspense-budgets.png",
    		"img/xspense/xspense-expenses.png"
    	]
    },
    {
    	title: "Boulder Blast",
    	link: "" ,
    	description: "Blast through bullet-shooting robots and other obstacles to collect all the gems in this multi-level C++ game. Push boulders around to fill up giant ditches so you can cross. Pick up health and ammo goodies to replenish your supplies.", 
    	tools: "C++ OpenGL", 
    	images: [
    		"img/boulderblast/boulderblast-1.png",
    		"img/boulderblast/boulderblast-2.png"
    	]
    },
    {
    	title: "Morning Sign Out News",
    	link: "https://itunes.apple.com/us/app/morning-signout/id1099515952?mt=8" ,
    	description: "| Keep up to date with medicine and health news published by Morning Sign Out. This app allows users to read, search, bookmark, filter, and comment on articles of interest. Readers can also view most recent articles offline.", 
    	tools: "Objective-C AFNetworking", 
    	images: [
    		"img/mso-news/mso-news1.png",
    		"img/mso-news/mso-news2.png",
    		"img/mso-news/mso-news3.png"
    	]
    },
    {
    	title: "Find Me Bubble Tea",
    	link: "" ,
    	description: "Craving for some boba? Use this iOS app to find the 200 closest bubble tea store nearby your current location. Functional world-wide. Store menus, phone numbers, and directions to reach stores are fully integrated in this app.", 
    	tools: "Objective-C RestKit AFNetworking SOCKit", 
    	images: [
    		"img/milktea/findmemilktea.png"
    	]
    },
    {
    	title: "bounce",
    	link: "" ,
    	description: "Rebound falling bubbles before they get sucked off-screen! Apply the universal color theme you prefer from the generated choices to style this iOS application.", 
    	tools: "Objective-C ColoursAPI", 
    	images: [
    		"img/bounce/bounce-home.png",
    		"img/bounce/bounce-play.png",
    		"img/bounce/bounce-settings.png"
    	]
    },
    {
    	title: "Give a Robot a Fish",
    	link: "http://graphics.dailybruin.com/give-robot-a-fish/" ,
    	description: "", 
    	tools: "", 
    	images: [
    		"img/design/robot-a-fish/robot1.JPG",
    		"img/design/robot-a-fish/robot2.JPG",
    		"img/design/robot-a-fish/robot3.JPG"
    	]
    },
    {
    	title: "Caring for the Caregivers",
    	link: "http://graphics.dailybruin.com/caregivers/" ,
    	description: "", 
    	tools: "", 
    	images: [
    		"img/design/bob-2016/bob1.JPG",
    		"img/design/bob-2016/bob2.JPG",
    		"img/design/bob-2016/bob3.JPG"
    	]
    }

    // Boilerplate format
    // {
    // 	title: "",
    // 	link: "" ,
    // 	description: "", 
    // 	tools: "", 
    // 	images: [

    // 	]
    // },
  ]};

$(document).ready(function() {
    checkWidth();
    $(window).resize(checkWidth);

    var source   = $("#project-template").html();
    var template = Handlebars.compile(source);
    $(".project-content").html(template(data));

	// set rows for project blocks
	var blocksPerRow;
	if ($(window).width() >= 1025)
		blocksPerRow ="2";
	else
		blocksPerRow = "1";

	$('.project-description:nth-child(' + blocksPerRow + 'n)').each(function(index) {
	    $(this).prevAll('.project-description').andSelf().wrapAll('<div class="row"></div>');
	});

	if (data.projects.length % 2 != 0) {
		$('.project-description:last-child').wrap('<div class="row" />');
	}

	// Scroll Speed
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, function () {
	        window.location.hash = target;
	    });
	});
});

// make nav + content divs responsive
function checkWidth() {
    if ($(window).width() <= 575) {
        $('nav').css("position", "relative");
        $('nav').addClass("small-12 columns");
        $('.content').css("margin-left", 0);
    }
    else {
        var navWidth = $('nav').outerWidth();
        $('nav').removeClass("small-12 columns");
        $('nav').css("position", "fixed");
        $('.content').css("margin-left", navWidth + 20);
    }       
}