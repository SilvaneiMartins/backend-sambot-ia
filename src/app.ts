import morgan from "morgan";
import express from "express";
import { config } from "dotenv";

import appRouter from "./routes/index.js";

config();
const app = express();

// middlewares
app.use(express.json());

// remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export { app };
