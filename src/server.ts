import express, { response } from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({message:"Olá NLW 05"});
})

app.post("/", (req, res) => {
  return response.json({ message: "Usuário salvo com sucesso!"});
})

app.listen(3000, () => console.log("Api Started"));