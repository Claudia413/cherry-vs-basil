/**
 * Created by Claudia on 21-3-2017.
 */
//This is the welcome message upon page load
$(document).ready(function () {
    $('#welcome').show().delay(3000).fadeOut(400);
});


$(function () {

    setInterval(function() {
        var time = new Date().getMinutes();

        // This is the stand-up at 10AM
        if (time == 00) {
            standUpNow();
        }
    }, 30000);

    //This happens when you click shake your head.
    $('#no').click(function () {
        $('#notext').show().delay(3000).fadeOut(400);
        $('#mouth').removeClass('froglip');
        $('#mouth').addClass('froglipsad');
        setTimeout(function () {
            $('#mouth').removeClass('froglipsad');
            $('#mouth').addClass('froglip');
        }, 3000);

    });

    //This happens when you click shake your head, please?
    $('#shakeplease').click(function () {
        $('.frogface').addClass('animated shake');
        setTimeout(function () {
            $('.frogface').removeClass('animated shake');
        }, 1000);
    });

    //This happens when you click Put your arms down this looks ridiculous
    $('#armsdown').click(function () {
        $('.frogarm').addClass('putdownArm');
    });

    //This happends when you click Ok put them back up this is even worse
    $('#armsup').click(function () {
        $('.frogarm').removeClass('putdownArm');
    });

    //This happens when you click Stand up gracefully please
    $('#standUp').click(standUpNow);

    function standUpNow() {
        $('.tophattop').addClass('standUpBody');
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
            $('.tophattop').removeClass('standUpBody');
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
    }

    //This happens when you click "I think youre cool!'
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

    //This happens when you click "I don't think youre cool"
    $('#notcool').click(function () {
        $('#tearOne').css('display', 'block');
        $('#tearOne').toggleClass('tearsOne');
        $('#tearTwo').toggleClass('tearsTwo');
        $('#mouth').removeClass('froglip');
        $('#mouth').addClass('froglipsad');
        $('#tearTwo').css('display', 'block');
        $('#notcool').text("No, don't cry, I'm sorry, you are cool!");
        $('#cheer').text("I dó think you're cool!");
        setTimeout(function () {
            $('#notcool').text("I don't think you're cool...");
        }, 3200);
        setTimeout(function () {
            $('#tearOne').toggleClass('tearsOne');
            $('#tearTwo').toggleClass('tearsTwo');
            $('#tearOne').css('display', 'none');
            $('#tearTwo').css('display', 'none');
        }, 4000);
    });

    //This happens when you click How do you feel about your look?
    $('#opinion').click(function () {
        var look = $('input[name=look]:checked', '#look').val();
        switch (look) {
            case 'normal':
                $('#opinionNormal').show().delay(3000).fadeOut(400);
                break;
            case 'cool':
                $('#opinionCool').show().delay(3000).fadeOut(400);
                break;
            case 'pirate':
                $('#opinionPirate').show().delay(3000).fadeOut(400);
                break;
        }
    });

    // This happens when you click How about a hat?
    $('#hat').click(function () {
        $('.tophattop').toggle(1, 'swing', function () {
            if ($('.tophattop').is(':visible')) {
                $('#hat').text("How about no?");
            } else {
                $('#hat').text("How about a hat?");
            }
        });
    });

    //
    //FROG LOOKS BELOW
    //

    // cool frog look
    $('#cool').click(function () {
        $('.pupil').css('border-color', '#333333');
        $('#mouth').addClass('froglipSmirk');
        $('.sunglasses').show();
        $('.sunglasses').css('width', '110')
        $('.frogleglow.two').css('background-color', '#53b28f')
        $('.frogfoot.two').css('display', 'block');
    });

    //Normal frog look
    $('#normal').click(function () {
        $('.pupil').css('border-color', '#ffffff');
        $('#mouth').removeClass('froglipSmirk');
        $('.sunglasses').hide(0);
        $('.frogleglow.two').css('background-color', '#53b28f')
        $('.frogfoot.two').css('display', 'block');
    });

    //Pirate frog look
    $('#pirate').click(function () {
        $('.pupil.one').css('border-color', '#333333');
        $('.pupil.two').css('border-color', '#ffffff');
        $('#mouth').addClass('froglipSmirk');
        $('.sunglasses').show(0);
        $('.sunglasses').css('width', '45');
        $('.frogleglow.two').css('background-color', '#7A654C');
        $('.frogfoot.two').css('display', 'none');
    });

    //Silly frog look
    $('#silly').click(function (){
        $('#tongue').addClass('frogtongue');
        $('#pupilOne').addClass('silly silly.one');
        $('#pupilTwo').addClass('silly silly.two');

    })

});