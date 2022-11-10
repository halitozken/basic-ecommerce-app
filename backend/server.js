import express from "express";
import { config } from "dotenv";

import connectDatabase from "./helpers/database/connectDatabase.js";
import routers from "./routers/index.js";

config({
  path: "./config/env/config.env",
});

connectDatabase();

const app = express();

app.listen(process.env.PORT, () => {
  console.log("App started on port: " + process.env.PORT);
});

app.use(express.json());

app.use("/api", routers);
