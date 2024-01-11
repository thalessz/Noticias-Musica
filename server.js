var mysql = require('mysql2/promise');
const express = require('express');
const app = express();

app.set('view engine', 'hbs')
app.set('views', './views')
app.set('assets', './assets')

app.get('/', (req, res) => {
    res.render('index')
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

async function main(){
    try{
    var connection = await mysql.createConnection({
        user: 'root', database: 'jornal'
    });
    }

    let [results, fields]= await connection.query('select * from autor');
    console.log(results);
    connection.end();
}
main();