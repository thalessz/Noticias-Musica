const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Olá <b>mundo</b>!");
});
app.get('/noticia/:id', (req,res) => {
    let id= req.params.id;
})
app.get('*', (req,res) =>{
    res.send("Destino não encontrado :(", 404)
})

const port=3000;
app.listen(port, ()=>{
    console.log("servidor rodando em http://localhost:"+ port);
});