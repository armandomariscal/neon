import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GameState } from '../../Application/GameState.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UI_PATH = path.join(__dirname, '..', 'UI');

export const startServer = (port) => {
    const server = http.createServer((req, res) => {
        if (req.url === '/api/state') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(GameState.refresh()));
        }

        let filePath = req.url === '/' ? path.join(UI_PATH, 'index.html') : path.join(UI_PATH, req.url);
        const extname = path.extname(filePath);
        const mimeTypes = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };

        fs.readFile(filePath, (error, content) => {
            if (error) {
                res.writeHead(404);
                res.end('Error 404: Archivo no encontrado.');
            } else {
                res.writeHead(200, { 'Content-Type': mimeTypes[extname] || 'text/plain' });
                res.end(content, 'utf-8');
            }
        });
    });

    server.listen(port, () => {
        console.clear();
        console.log("\x1b[35m%s\x1b[0m", "====================================");
        console.log("\x1b[36m%s\x1b[0m", "      NEON v1.0                     ");
        console.log("\x1b[35m%s\x1b[0m", "====================================");
        console.log(`📡 Core activo en: http://localhost:${port}`);
    });
};