require('./jquery.instagramFeed.min.js');

(function($){
    $(window).on('load', function(){
        $.instagramFeed({
            'username': 'happylandcreative',
            'container': "#instagram-feed",
            'display_profile': true,
            'display_biography': true,
            'display_gallery': true,
            'display_captions': false,
            'display_igtv': true,
            'callback': null,
            'styling': false,
            'items': 12,
            'cache_time': 240
        });
    });
})(jQuery);

$(document).ready(function() {

    $("#hamburger").click(function() {
    	$("body").toggleClass('open-nav');
    });

	var theWindow = $(window);

	theWindow.on("scroll", function() {
		var stop = theWindow.scrollTop();
		var shrinkHeight = 0;

		if($("#announcement").length) {
			shrinkHeight = $("#announcement").height();
		}

		if (stop > 100) {
			$("#main-nav").addClass("bg-tan-bg");
			$("#logo").addClass("scale-75");
			$("#main-nav").css({'transform' : 'translateY(-' + shrinkHeight + 'px)'});
		} else {
			$("#main-nav").removeClass("bg-tan-bg");
			$("#logo").removeClass("scale-75");
			$("#main-nav").css({'transform' : 'translateY(0)'});
		}
	});

});