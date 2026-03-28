import { connectDB } from './MongoClient.js';

export async function getThemes() {
    const db = await connectDB();
    return await db.collection('themes').find({}).toArray();
}

export async function upsertTheme(theme) {
    const db = await connectDB();
    return await db.collection('themes').updateOne(
        { id: theme.id },
        { $set: theme },
        { upsert: true }
    );
}

export async function deleteOldThemes(activeIds) {
    const db = await connectDB();
    return await db.collection('themes').deleteMany({
        id: { $nin: activeIds }
    });
}