import express from "express";
import { config } from "dotenv";
config();
const app = express();
// middlewares
app.use(express.json());
export { app };
//# sourceMappingURL=app.js.map