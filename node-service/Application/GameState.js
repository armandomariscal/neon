import { Brick } from '../Domain/Brick.js';

const playerOne = new Brick();

export const GameState = {
    refresh() {
        const directions = ['up', 'down', 'left', 'right'];
        const randomDir = directions[Math.floor(Math.random() * directions.length)];
        playerOne.move(randomDir);
        
        return playerOne.getPosition();
    }
};