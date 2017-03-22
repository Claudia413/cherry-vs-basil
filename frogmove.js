/**
 * Created by Claudia on 21-3-2017.
 */

$(document).ready(function () {
    $('#welcome').show().delay(3000).fadeOut(400);
});

$(function () {


    $('#no').click(function () {
        $('#notext').show().delay(3000).fadeOut(400);
        $('#mouth').removeClass('froglip');
        $('#mouth').addClass('froglipsad');
        setTimeout(function () {
            $('#mouth').removeClass('froglipsad');
            $('#mouth').addClass('froglip');
        }, 3000);

    });

    $('#shakeplease').click(function () {
        $('.frogface').addClass('animated shake');
        setTimeout(function () {
            $('.frogface').addClass('animated shake');
            $('.frogface').removeClass('animated shake');
        }, 1000);
    });

    $('#armsdown').click(function () {
        $('.frogarm').addClass('animated shake');
    });

    $('#armsup').click(function () {
        $('.frogarm').removeClass('animated shake');
    });

    $('#standUp').click(function () {
        $('#froglegOne').addClass('standUpA');
        $('#invisiFroglegOne').addClass('standUpA');
        $('#froglegTwo').addClass('standUpB');
        $('#invisiFroglegTwo').addClass('standUpB');
        $('#froglegLowOne').addClass('standUpLowA');
        $('#froglegLowTwo').addClass('standUpLowB');
        $('.body').addClass('standUpBody');
        $('#head').addClass('standUpBody');
        $('#leftFoot').addClass('leftFoot');
        $('#rightFoot').addClass('rightFoot');
        setTimeout(function () {
            $('#head').removeClass('standUpBody');
            $('#froglegOne').removeClass('standUpA');
            $('#invisiFroglegOne').removeClass('standUpA');
            $('#froglegTwo').removeClass('standUpB');
            $('#invisiFroglegTwo').removeClass('standUpB');
            $('#froglegLowOne').removeClass('standUpLowA');
            $('#froglegLowTwo').removeClass('standUpLowB');
            $('.body').removeClass('standUpBody')
            $('#leftFoot').removeClass('leftFoot')
            $('#rightFoot').removeClass('rightFoot');
        }, 6000);
    });

    $('#cool').click(function () {
        $('.pupil').css('border-color', '#333333');
        $('#mouth').addClass('froglipSmirk');
        $('.sunglasses').show();
    });

    $('#normal').click(function () {
        $('.pupil').css('border-color', '#ffffff');
        $('#mouth').removeClass('froglipSmirk');
        $('.sunglasses').hide(0);
    });

    $('#cheer').click(function () {
        $('#frogarmOne').addClass('standUpArm1');
        $('#frogarmTwo').addClass('standUpArm2');
    });

});