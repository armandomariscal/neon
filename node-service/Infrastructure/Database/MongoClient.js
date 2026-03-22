import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
const client = new MongoClient(uri);
let db = null;

async function connectDB() {
    if (db) return db;
    await client.connect();
    db = client.db(dbName);
    console.log(`🟢 MongoDB conectado a: ${dbName}`);
    return db;
}

export async function saveMove(position) {
    const database = await connectDB();
    return database.collection('moves').insertOne({ 
        ...position, 
        timestamp: new Date() 
    });
}

export async function getThemes() {
    const database = await connectDB();
    return database.collection('themes').find({}).toArray();
}