import express from "express";

const app = express();
const PORT = 8080;

app.get('/products', (req, res) =>{
  res.send("hola mundo")
})

app.listen(PORT, () =>{
  console.log(`server run on port: ${PORT}`);
})