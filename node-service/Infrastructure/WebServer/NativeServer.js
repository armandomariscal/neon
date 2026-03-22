import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UI_PATH = path.join(__dirname, '..', 'UI');

export const startServer = (port, gameState) => {
    const server = http.createServer(async (req, res) => {
        if (req.url === '/api/state') {
            try {
                const state = await gameState.refresh(); 
                res.writeHead(200, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify(state));
            } catch (error) {
                console.error("❌ Error en el Core:", error.message);
                res.writeHead(500);
                return res.end(JSON.stringify({ error: "Error interno del servidor" }));
            }
        }

        const relativePath = req.url === '/' ? 'index.html' : req.url;
        const filePath = path.join(UI_PATH, relativePath);
        
        const mimeTypes = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' };
        const contentType = mimeTypes[path.extname(filePath)] || 'text/plain';

        const stream = fs.createReadStream(filePath);

        stream.on('open', () => {
            res.writeHead(200, { 'Content-Type': contentType });
            stream.pipe(res);
        });

        stream.on('error', () => {
            res.writeHead(404);
            res.end('404: Not Found');
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