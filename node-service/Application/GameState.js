import { Brick } from '../Domain/Brick.js';
import { getThemes } from '../Infrastructure/Database/ThemeRepository.js';
import { saveMove } from '../Infrastructure/Database/MoveRepository.js';

const playerOne = new Brick();

export const GameState = {
    async refresh() {
        const directions = ['up', 'down', 'left', 'right'];
        const randomDir = directions[Math.floor(Math.random() * directions.length)];
        
        playerOne.move(randomDir);
        const currentPosition = playerOne.getPosition();

        saveMove(currentPosition).catch(err => 
            console.error("Error persistiendo movimiento:", err.message)
        );
        return currentPosition;
    },
    async getAllThemes() {
        return await getThemes();
    }
};