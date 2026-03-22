import { Brick } from '../Domain/Brick.js';
import { saveMove, getThemes } from '../Infrastructure/Database/MongoClient.js';

const playerOne = new Brick();

export const GameState = {
    async refresh() {
        const directions = ['up', 'down', 'left', 'right'];
        const randomDir = directions[Math.floor(Math.random() * directions.length)];
        
        playerOne.move(randomDir);
        const currentPosition = playerOne.getPosition();

        saveMove(currentPosition).catch(err => console.error("DB Error:", err));
        return currentPosition;
    },
    async getAllThemes() {
        return await getThemes();
    }
};