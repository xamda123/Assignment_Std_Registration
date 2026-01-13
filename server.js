import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import cors from "cors";
import connectMongo from "./database/mongo.js";

import studentRoutes from "./router/studentRoutes.js";
import classRoutes from "./router/classRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

connectMongo();

app.use("/api/students", studentRoutes);
app.use("/api/classes", classRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
