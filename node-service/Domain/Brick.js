import { GameElement } from './GameElement.js';

export class Brick extends GameElement {
    constructor() {
        super(5, 10, "#ff00ff"); 
    }

    move(direction) {
        const moves = {
            'up':    { x: 0, y: -1 },
            'down':  { x: 0, y: 1 },
            'left':  { x: -1, y: 0 },
            'right': { x: 1, y: 0 }
        };

        const delta = moves[direction] || { x: 0, y: 0 };
        
        this.x += delta.x;
        this.y += delta.y;
        
        if (this.x >= 10) this.x = 0;
        if (this.x < 0) this.x = 9;
        if (this.y >= 20) this.y = 0;
        if (this.y < 0) this.y = 19;
    }

    getPosition() {
        return { x: this.x, y: this.y, color: this.color };
    }
}