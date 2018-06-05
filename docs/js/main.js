"use strict";
var Ball = (function () {
    function Ball() {
        this.x = 0;
        this.y = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.x = (Math.random() * (window.innerWidth / 2)) + (window.innerWidth / 4);
        this.y = (Math.random() * (window.innerHeight / 2)) + (window.innerHeight / 4);
        this.speedX = Math.round(Math.random() * 3) + 1;
        this.speedY = Math.round(Math.random() * 6) - 3;
        if (Math.random() > 0.5)
            this.speedX *= -1;
    }
    Ball.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y + 40 > window.innerHeight || this.y < 0) {
            this.speedY *= -1;
        }
        if (this.x - 40 > window.innerWidth || this.x < 0) {
            this.speedX *= -1;
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.balls = [];
        for (var i = 0; i < 15; i++) {
            this.balls.push(new Ball());
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
            var b = _a[_i];
            b.update();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map