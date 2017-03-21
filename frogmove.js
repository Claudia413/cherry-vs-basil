/**
 * Created by Claudia on 21-3-2017.
 */

$(function () {
    $('#no').click(function () {
        $('.nobubble').show().delay(3000).fadeOut(400);
        $('#mouth').removeClass('froglip');
        $('#mouth').addClass('froglipsad');
        setTimeout(function() {$('#mouth').removeClass('froglipsad');
            $('#mouth').addClass('froglip');}, 3000);

    });

    $('#shakeplease').click(function () {
        $('.frogface').toggleClass('animated shake');
    });

    $('#armsdown').click(function () {
        $('.frogarm').addClass('animated shake');
    });

    $('#armsup').click(function () {
        $('.frogarm').removeClass('animated shake');
    });
});