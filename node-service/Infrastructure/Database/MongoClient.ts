import { MongoClient, Db } from 'mongodb';
import { dbConfig } from '../Config/db.config.js';
import { Logger } from '../Utils/Logger.js';

let db: Db | null = null;
const client = new MongoClient(dbConfig.uri!);

export async function connectDB(): Promise<Db> {
    if (db) return db;

    try {
        await client.connect();
        db = client.db(dbConfig.name);
        Logger.success(`MongoDB: Conectado a "${dbConfig.name}"`); 
        return db;
    } catch (error: any) {
        Logger.error("MongoDB Connection Error:", error.message);
        throw error;
    }
}

export async function closeDB(): Promise<void> {
    if (client) {
        await client.close();
        db = null;
        Logger.info("MongoDB: Conexion cerrada");
    }
}