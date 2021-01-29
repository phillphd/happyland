// (function($){
//     $(window).on('load', function(){
//         $.instagramFeed({
//             'username': 'happylandcreative',
//             'container': "#instagram-feed3",
//             'display_profile': true,
//             'display_biography': true,
//             'display_gallery': true,
//             'display_captions': false,
//             'display_igtv': true,
//             'callback': null,
//             'styling': false,
//             'items': 12,
//             'cache_time': 240
//         });
//     });
// })(jQuery);

$(document).ready(function() {

    $("#hamburger").click(function() {
    	$("body").toggleClass('open-nav');
    });

});