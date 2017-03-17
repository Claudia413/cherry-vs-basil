/**
 * Created by Claudia on 9-3-2017.
 */
$(document).ready(function () {
    $(".navigation li").hover(function () {
        $(this).toggleClass("navigation_on");
    });
    $(".navigation li").hover(function () {
        $(this).toggleClass(".navigation li a:hover")
    });

});