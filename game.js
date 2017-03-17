/**
 * Created by Claudia on 15-3-2017.
 */

$(document).ready(function () {
    var container = document.getElementsByClassName('gamecontainer');
    var canvas = document.getElementById("canvas");
    var balloon = document.getElementById("balloon");
    var cactusBottom = document.getElementById("cactusBottom");
    var cactusTop = document.getElementById("cactusTop");
    var pang = document.getElementById("pang");
    var desert = document.getElementById("desert");
    var myGamePiece;
    var myObstacles = [];
    var myBackground;
    var myScore;
    var resetbutton = document.getElementById("resetbutton");
    var keys = [37, 65, 39, 68, 38, 87, 40, 83];

    function startGame() {
        myBackground = new item(750, 500, "desert.gif", 0, 0);
        myGamePiece = new component(41, 47, "blue", 5, 220);
        myScore = new score("30px", "Arial", "black", 280, 40, "text");
        myGameArea.start();
    }

    var myGameArea = {
        canvas: document.createElement("canvas"),
        start: function () {
            this.canvas.width = 750;
            this.canvas.height = 500;
            this.context = this.canvas.getContext("2d");
            $('.gamecontainer').append(this.canvas);
            this.frameNo = 0;
            this.interval = setInterval(updateGameArea, 20);
            window.addEventListener('keydown', function (e) {
                myGameArea.key = e.keyCode;
                if (keys.indexOf(e.keyCode) > -1) {
                    e.preventDefault();
                }
            });

            window.addEventListener('keyup', function (e) {
                myGameArea.key = false;
                e.preventDefault();
            });
            window.addEventListener('touchmove', function (e) {
                myGameArea.x = e.touches[0].screenX;
                myGameArea.y = e.touches[0].screenY;
            })
        },
        clear: function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        stop: function () {
            clearInterval(this.interval);
        }
    };


    function everyinterval(n) {
        if ((myGameArea.frameNo / n) % 1 == 0) {
            return true;
        }
        return false;
    }

    function component(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.update = function () {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            // ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(balloon, this.x, this.y, this.width, this.height);
        };
        this.newPos = function () {
            this.x += this.speedX;
            this.y += this.speedY;
        };
        this.reset = function () {
            this.x = this.originalX;
            this.y = this.originalY;
        };
        this.crashWith = function (otherobj) {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var otherleft = otherobj.x;
            var otherright = otherobj.x + (otherobj.width);
            var othertop = otherobj.y;
            var otherbottom = otherobj.y + (otherobj.height);
            var crash = true;
            if ((mybottom < othertop) ||
                (mytop > otherbottom) ||
                (myright < otherleft) ||
                (myleft > otherright)) {
                crash = false;
            }
            return crash;
        }
    }

    function opponent(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.update = function () {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            // ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(cactusBottom, this.x, this.y, this.width, this.height);
        };
        this.newPos = function () {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    }

    function opponentup(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.update = function () {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            // ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(cactusTop, this.x, this.y, this.width, this.height);
        };
        this.newPos = function () {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    }

    function item(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.update = function () {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.drawImage(desert, this.x, this.y, this.width, this.height);
        }

    }

    function score(width, height, color, x, y, type) {
        this.type = type;
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.update = function () {
            ctx = myGameArea.context;
            if (this.type == "text") {
                ctx.font = this.width + " " + this.height;
                ctx.fillStyle = color;
                ctx.fillText(this.text, this.x, this.y);
            } else {
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }
    }

    function updateGameArea() {
        var x, y;
        var stopped = false;
        for (i = 0; i < myObstacles.length; i += 1) {
            if (myGamePiece.crashWith(myObstacles[i])) {
                myGameArea.stop();
                ctx = myGameArea.context;
                ctx.drawImage(pang, 0, 0, 750, 500);

                console.log('pang');
                return;

            }
        }

        myGameArea.clear();
        myGameArea.frameNo += 1;
        if (myGameArea.frameNo == 1 || everyinterval(200)) {
            x = myGameArea.canvas.width;
            minHeight = 50;
            maxHeight = 150;
            height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
            minGap = 60;
            maxGap = 250;
            gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
            myObstacles.push(new opponentup(50, height, "green", x, 0));
            myObstacles.push(new opponent(50, x - height - gap, "green", x, height + gap));
        }
        for (i = 0; i < myObstacles.length; i += 1) {
            myObstacles[i].x += -1;
            myObstacles[i].update();
        }
        myScore.text = "SCORE: " + (myGameArea.frameNo / 100) + " meter";
        myScore.update();
        // myObstacle.x += -1;
        // myObstacle.update();


        myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;

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

        myGamePiece.newPos();
        myGamePiece.update();
    }


    $("#buttonreset").click(function () {
        myGameArea.stop();
        myGameArea.clear();
        myGameArea.frameNo = 0;
        myGamePiece.reset();
        myObstacles = [];
        myGameArea.start();
    });


    function moveup() {
        myGamePiece.speedY -= 1;
    }

    function movedown() {
        myGamePiece.speedY += 1;
    }

    function moveleft() {
        myGamePiece.speedX -= 1;
    }

    function moveright() {
        myGamePiece.speedX += 1;
    }


    startGame();

});