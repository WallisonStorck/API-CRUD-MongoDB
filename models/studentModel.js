import mongoose from "mongoose";

// Criação do modelo
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
    // validate(value) {
    //   if (value < 0)
    //     throw new Error("Não é permitido valor negativo para a nota!");
    // },
    min: 0,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

// Guardando o modelo de dados
const studentModel = mongoose.model("student", studentSchema, "student");

export { studentModel };
