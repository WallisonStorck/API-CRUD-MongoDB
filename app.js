import express from "express";
import mongoose from "mongoose";
import { studentRouter } from "./routes/studentRouter.js";

const port = 3000;

const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(port, () => console.log("API is running..."));

// Conectar ao MongoDB pelo Mongoose
await mongoose
  .connect("mongodb://localhost:27017/grades", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Conectado ao MongoDB Atlas"))
  .catch((err) => console.log("Erro ao conectar com MongoDB Atlas: " + err));
