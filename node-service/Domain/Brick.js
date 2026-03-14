export class Brick {
    constructor() {
        this.position = { x: 5, y: 10 }; 
        this.color = "#ff00ff";
    }

    move(direction) {
        const moves = {
            'up':    { x: 0, y: -1 },
            'down':  { x: 0, y: 1 },
            'left':  { x: -1, y: 0 },
            'right': { x: 1, y: 0 }
        };

        const delta = moves[direction] || { x: 0, y: 0 };
        this.position.x += delta.x;
        this.position.y += delta.y;
        
        if (this.position.x >= 10) this.position.x = 0;
        if (this.position.x < 0) this.position.x = 9;

        if (this.position.y >= 20) this.position.y = 0;
        if (this.position.y < 0) this.position.y = 19;
    }

    getPosition() {
        return { ...this.position, color: this.color };
    }
}