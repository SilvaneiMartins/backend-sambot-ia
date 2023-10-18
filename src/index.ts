import { app } from "./app.js";
import { connectToDatabase } from "./db/connections.js";

// connections and listen
const port = process.env.PORT || 5000;

connectToDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log(`🔥 Servidor está rodando na porta ${port}`);
            console.log("🚀 Banco de dados conectado com sucesso.");
        });
    })

