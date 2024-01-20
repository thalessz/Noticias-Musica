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
    let connection = await mysql.createConnection({
        user: 'root', database: 'jornal'
    });
    console.log('Conexão bem sucedida com o banco de dados')
    let [results, fields] = await connection.query('select * from noticia where 1');
    connection.end();
    console.log(results);

    }catch(err){console.err}
}
main();