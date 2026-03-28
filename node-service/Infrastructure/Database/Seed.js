import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { closeDB } from './MongoClient.js';
import { upsertTheme, deleteOldThemes } from './ThemeRepository.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function seed() {
    try {
        const jsonPath = path.join(__dirname, 'themes.json');
        const data = await fs.readFile(jsonPath, 'utf-8');
        const themes = JSON.parse(data);

        console.log("Iniciando sincronización total...");

        for (const theme of themes) {
            await upsertTheme(theme);
            console.log(`Sincronizado: ${theme.name}`);
        }

        const validIds = themes.map(t => t.id);
        const result = await deleteOldThemes(validIds);

        if (result.deletedCount > 0) {
            console.log(`Se eliminaron ${result.deletedCount} temas antiguos de la DB.`);
        } else {
            console.log(`La base de datos ya está limpia.`);
        }

    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await closeDB();
        process.exit(0);
    }
}

seed();