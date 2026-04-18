import { MongoClient } from 'mongodb';
import { dbConfig } from '../Config/db.config.js';
import { Logger } from '../Utils/Logger.js';

const client = new MongoClient(dbConfig.uri);
let db = null;

export async function connectDB() {
    if (db) return db;

    try {
        await client.connect();
        db = client.db(dbConfig.name);
        Logger.success(`MongoDB: Conectado a "${dbConfig.name}"`); 
        return db;
    } catch (error) {
        Logger.error("MongoDB Connection Error:", error.message);
        throw error;
    }
}

export async function closeDB() {
    if (client) {
        await client.close();
        db = null;
        Logger.info("MongoDB: Conexion cerrada");
    }
}