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
    var cactusBottom = document.getElementById("cactusBottom");
    var cactusTop = document.getElementById("cactusTop");
    var myGamePiece;
    var myObstacle;

    function startGame() {
        myGamePiece = new component(41, 47, "blue", 5, 220);
        myObstacle = new opponent(50, 140, "green", 200, 400);
        myGameArea.start();
    }

    var myGameArea = {
        canvas: document.createElement("canvas"),
        start: function() {
            this.canvas.width = 750;
            this.canvas.height = 500;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateGameArea, 20);
            window.addEventListener('keydown', function (e) {
                myGameArea.key = e.keyCode;
            })
            window.addEventListener('keyup', function (e) {
                myGameArea.key = false;
            })
            window.addEventListener('touchmove', function (e) {
                myGameArea.x = e.touches[0].screenX;
                myGameArea.y = e.touches[0].screenY;
            })
        },
        clear : function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    function component(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.update = function(){
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            // ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(balloon, this.x, this.y, this.width, this.height);
        }
        this.newPos = function() {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    }

    function opponent(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.update = function(){
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            // ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(cactusBottom, this.x, this.y, this.width, this.height);
        }
        this.newPos = function() {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    }

    function updateGameArea() {
        myGameArea.clear();
        myObstacle.update();

        myGamePiece.speedX=0;
        myGamePiece.speedY=0;

        switch (myGameArea.key) {
            case 37:
            case 65:
                myGamePiece.speedX = -1;
                break;
            case 39:
            case 68:
                myGamePiece.speedX = 1;
                break;
            case 38:
            case 87:
                myGamePiece.speedY = -1;
                break;
            case 40:
            case 83:
                myGamePiece.speedY = 1;
                break;
        }

        // if (myGameArea.key && myGameArea.key == 37 || myGameArea.key == 65) {myGamePiece.speedX = -1}
        // if (myGameArea.key && myGameArea.key == 39 || myGameArea.key == 68) {myGamePiece.speedX = 1}
        // if (myGameArea.key && myGameArea.key == 38 || myGameArea.key == 87) {myGamePiece.speedY = -1}
        // if (myGameArea.key && myGameArea.key == 40 || myGameArea.key == 83) {myGamePiece.speedY = 1}

        myGamePiece.newPos();
        myGamePiece.update();
    }

    function moveup(){
        myGamePiece.speedY -= 1;
        }
    function movedown (){
        myGamePiece.speedY += 1;
    }

    function moveleft (){
        myGamePiece.speedX -= 1;
    }

    function moveright (){
        myGamePiece.speedX += 1;
    }


    startGame();
        myGameArea.start();

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