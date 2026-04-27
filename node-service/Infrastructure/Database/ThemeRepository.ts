import { Db } from 'mongodb';
import { connectDB } from './MongoClient.js';
import { ITheme, ThemeId } from '../../Domain/Theme.js';

export async function getThemes(): Promise<ITheme[]> {
    const db: Db = await connectDB();
    return await db.collection<ITheme>('themes').find({}).toArray();
}

export async function upsertTheme(theme: ITheme) {
    const db = await connectDB();
    return await db.collection<ITheme>('themes').updateOne(
        { id: theme.id },
        { $set: theme },
        { upsert: true }
    );
}

export async function deleteOldThemes(activeIds: ThemeId[]) {
    const db = await connectDB();
    return await db.collection('themes').deleteMany({
        id: { $nin: activeIds }
    });
}