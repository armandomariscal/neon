import { startServer } from './Infrastructure/WebServer/NativeServer.js';
import { GameState } from './Application/GameState.js';

const PORT = process.env.PORT;

startServer(PORT, GameState);