import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
const client = new MongoClient(uri);
let db = null;

export async function connectDB() {
    if (db) return db;
    await client.connect();
    db = client.db(dbName);
    return db;
}

export async function closeDB() {
    await client.close();
    db = null;
}