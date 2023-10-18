import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGO_URL);
        console.log("Conectado ao banco de dados com sucesso!");
    }
    catch (error) {
        console.log(error);
        throw new Error("Erro ao conectar no banco de dados.");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
        console.log("Desconectado do banco de dados com sucesso!");
    }
    catch (error) {
        console.log(error);
        throw new Error("Erro ao desconectar do banco de dados.");
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connections.js.map