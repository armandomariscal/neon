export const dbConfig = {
    uri: process.env.MONGO_URI,
    name: process.env.DB_NAME,
};

if (!dbConfig.uri) {
    throw new Error("Error de Configuración: MONGO_URI no está definida en el .env");
}