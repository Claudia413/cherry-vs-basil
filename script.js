/**
 * Created by Claudia on 9-3-2017.
 */
$(document).ready(function () {
    $(".navigation li").hover(function () {
        $(this).toggleClass("navigation_on");
    });
    /* $(".navigation li").hover (function () {
     $(this).toggleClass(".navigation li a:hover")
     })*/


/* Below is TopSecret Game stuff */


    $("body").keydown(function (key) {
        switch (parseInt(key.which, 10)) {
            // Left arrow key pressed
            case 37:
                $("#balloon").animate({left: "-=10px"}, 'fast');
                break;
            // Up Arrow Pressed
            case 38:
                $("#balloon").animate({top: "-=10px"}, 'fast');
                break;
            // Right Arrow Pressed
            case 39:
                $("#balloon").animate({left: "+=10px"}, 'fast');
                break;
            // Down Arrow Pressed
            case 40:
                $("#balloon").animate({top: "+=10px"}, 'fast');
                break;
        }
    });
    

});

