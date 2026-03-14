export class GameElement {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    isOutOfBounds(width = 10, height = 20) {
        return this.x < 0 || this.x >= width || this.y < 0 || this.y >= height;
    }
}