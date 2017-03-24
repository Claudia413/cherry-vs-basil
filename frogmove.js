/**
 * Created by Claudia on 21-3-2017.
 */

$(document).ready(function () {
    $('#welcome').show().delay(3000).fadeOut(400);
});

var time = new Date().getMinutes;

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

    $('#standUp').click(function standUpNow() {
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


    // if (time == 23) {
    //      standUpNow();
    // }

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
        $('#mouth').removeClass('froglipsad');
        $('#mouth').addClass('froglip');
        setTimeout(function () {
            $('#frogarmOne').removeClass('standUpArm1');
            $('#frogarmTwo').removeClass('standUpArm2');
        }, 4000);
    });

    $('#notcool').click(function () {
        $('#tearOne').css ('display', 'block');
        $('#tearOne').toggleClass ('tearsOne');
        $('#tearTwo').toggleClass ('tearsTwo');
        $('#mouth').removeClass('froglip');
        $('#mouth').addClass('froglipsad');
        $('#tearTwo').css ('display', 'block');
        $('#notcool').text("No, don't cry, I'm sorry, you are cool!");
        setTimeout(function () {
            $('#notcool').text("I don't think you're cool...");
        }, 2000);
        setTimeout(function () {
            $('#tearOne').toggleClass ('tearsOne');
            $('#tearTwo').toggleClass ('tearsTwo');
            $('#tearOne').css ('display', 'none');
            $('#tearTwo').css ('display', 'none');
        }, 3000);


    })
});