import { connectDB } from './MongoClient.js';

export async function saveMove(position) {
    const db = await connectDB();
    return await db.collection('moves').insertOne({ 
        position, 
        timestamp: new Date() 
    });
}