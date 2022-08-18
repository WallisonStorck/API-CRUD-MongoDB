import express from "express";
import { studentModel } from "../models/studentModel.js";

const app = express();

// CREATE
app.post("/student", async (req, res) => {
  try {
    const student = new studentModel(req.body);
    // console.log(student);
    await student.save();
    console.log("Documento inserido com sucesso!");
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// RETRIEVE
app.get("/student", async (req, res) => {
  try {
    const student = await studentModel.find({});
    res.send(student);
    console.log("Consulta realizada com sucesso!");
  } catch (error) {
    res.status(500).send(error);
  }
});

// UPDATE
app.patch("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete({ _id: id });
    if (!student) {
      res.status(404).send("Documento não encontrado!");
    } else {
      console.log(student);
      res.status(200).send("Documento excluído com sucesso!");
    }
  } catch (error) {}
});

export { app as studentRouter };
