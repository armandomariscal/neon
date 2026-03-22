import { startServer } from './Infrastructure/WebServer/NativeServer.js';
import { GameState } from './Application/GameState.js';

const PORT = 3000;

startServer(PORT, GameState);