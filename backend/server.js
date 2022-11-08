import express from "express";
import { config } from "dotenv";

import routers from "./routers/index.js";

const app = express();

app.use(express.json());

config({
  path: "./config/env/config.env",
});

app.listen(process.env.PORT, () => {
  console.log("App started on port: " + process.env.PORT);
});

app.use("/api", routers);
