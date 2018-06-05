/// <reference path="ball.ts"/>

class Game {
    
    private balls: Ball[] = []

    constructor() {

        for (var i = 0; i < 15; i++) {
            this.balls.push(new Ball())
        }

        this.gameLoop()        
    }
    
    private gameLoop():void{
        for (var b of this.balls) {
            b.update();
        }
        
        requestAnimationFrame(() => this.gameLoop())
    }
    
} 


window.addEventListener("load", () => new Game())