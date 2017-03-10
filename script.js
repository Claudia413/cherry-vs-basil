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


    /* Below is Game stuff */

    /*   var c = document.getElementById("testcanvas");
     var context = c.getContext('2d');
     context.fillStyle = "#FF0000";

     var balloon = document.getElementById("balloon");
     var cactusBottom = document.getElementById("cactusBottom");
     var cactusTop = document.getElementById("cactusTop");

     context.drawImage(cactusBottom, 75, 250, 160, 250);
     context.drawImage(balloon, 2, 200, 82, 93.4);
     context.drawImage(cactusTop, 150, -10, 120, 200); */
    var balloon = document.getElementById("balloon");
    var myGamePiece;

    function startGame() {
        myGamePiece = new component(30, 30, "rgba(250,00,150,0.2", 10, 120);
        myGameArea.start();
    }

    var myGameArea = {
        canvas: document.createElement("canvas"),
        start: function() {
            this.canvas.width = 480;
            this.canvas.height = 270;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateGameArea, 20);
        },
        clear : function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    function component(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.update = function(){
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            // ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(balloon, this.x, this.y, this.width, this.height);

        }
    }

    function updateGameArea() {
        myGameArea.clear();
        myGamePiece.update();
    }


    startGame();

    // $("canvas").keydown(Function);
    //
    // function moveImage(key) {
    //     var position = (component).position();
    //     switch (parseInt(key.which, 10)) {
    //         // Left arrow key pressed
    //         case 37:
    //             if (position.left > 0) {
    //                 (component).animate({left: "-=10px"}, 50);
    //             }
    //             break;
    //         // Up Arrow Pressed
    //         case 38:
    //             if (position.top > 6) {
    //                 (component).animate({top: "-=10px"}, 100);
    //             }
    //             break;
    //         // Right Arrow Pressed
    //         case 39:
    //             component.animate({left: "+=10px"}, 100);
    //             break;
    //         // Down Arrow Pressed
    //         case 40:
    //             component.animate({top: "+=10px"}, 100);
    //             break;
    //     }
    // }
})
;